import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const theme = {
  axis: {
    ticks: { text: { fill: '#999', fontSize: 10 } },
  },
  tooltip: {
    container: {
      color: 'white',
      background: '#15182A',
    },
  },
};
const MyResponsiveBar = ({ data }) => (
  <div style={{ height: '50vh' }}>
    <ResponsiveBar
      borderWidth={3}
      theme={theme}
      data={data}
      keys={Object.keys(Object.values(data)[0]).slice(1)}
      indexBy="region"
      margin={{ top: 30, right: 10, bottom: 50, left: 35 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      enableLabel={false}
      animate
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          itemTextColor: '#eee',
          dataFrom: 'keys',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={(obj) => (
        <>
          <p>{obj.data.region}</p>
          {Object.entries(obj.data).map(
            (prop, i) =>
              i > 0 && (
                <p key={prop[0]}>
                  {prop[0]}: {prop[1]}
                </p>
              )
          )}
        </>
      )}
    />
  </div>
);

export default MyResponsiveBar;
