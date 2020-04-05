import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const theme = {
  axis: {
    ticks: { text: { fill: '#999', fontSize: 11 } },
  },
};

const MyResponsiveBar = ({ data }) => (
  <div style={{ height: '30vh' }}>
    <ResponsiveBar
      theme={theme}
      data={data}
      keys={Object.keys(Object.values(data)[0]).slice(1)}
      indexBy="region"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          itemTextColor: '#eee',
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
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
    />
  </div>
);

export default MyResponsiveBar;
