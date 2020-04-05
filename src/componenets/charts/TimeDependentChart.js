import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const theme = {
  axis: {
    ticks: { text: { fill: '#999', fontSize: 11 } },
  },
};

const MyResponsiveLine = ({ data }) => (
  <div style={{ height: '40vh' }}>
    <ResponsiveLine
      data={data}
      theme={theme}
      margin={{ top: 20, right: 20, bottom: 50, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh
      legends={[
        {
          itemTextColor: '#eee',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 100,
          translateY: 40,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);
export default MyResponsiveLine;
