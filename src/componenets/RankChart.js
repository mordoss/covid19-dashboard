import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const theme = {
  axis: {
    ticks: { text: { fill: '#999', fontSize: 11 } },
  },
};

const MyResponsiveBar = ({ data }) => (
  <div style={{ height: '40vh' }}>
    <ResponsiveBar
      theme={theme}
      data={data}
      keys={['property1', 'property2']}
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
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

export default MyResponsiveBar;
