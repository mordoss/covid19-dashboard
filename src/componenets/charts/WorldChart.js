import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import world_countries from '../../world_countries';

const theme = {
  tooltip: {
    container: {
      color: 'white',
      background: 'rebeccapurple',
    },
  },
};

const MyResponsiveChoropleth = ({ data }) => (
  <div style={{ height: '60vh' }}>
    <ResponsiveChoropleth
      theme={theme}
      data={data}
      features={world_countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="RdBu"
      domain={[0, 1000000]}
      unknownColor="#101b42"
      valueFormat=".5s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule
      graticuleLineColor="rgba(0, 0, 0, .2)"
      borderWidth={0.5}
      borderColor="#101b42"
      tooltip={(obj) => {
        if (obj.feature.data !== undefined) {
          return (
            <div style={{ backgroundColor: '#15182A', padding: 4, borderRadius: 3 }}>
              <img src={obj.feature.data.flag} alt="flag" style={{ width: 24, height: 'auto' }} />
              <p>Država: {obj.feature.data.id}</p>
              <p>Zaraženo: {obj.feature.data.value}</p>
              <p>Umrlih: {obj.feature.data.deaths}</p>
              <p>Danas zaraženih: {obj.feature.data.todayCases}</p>
              <p>Danas umrlih: {obj.feature.data.todayDeaths}</p>
              <p>U kritčnom stanju: {obj.feature.data.critical}</p>
            </div>
          );
        }
        return null;
      }}
    />
  </div>
);

export default MyResponsiveChoropleth;
