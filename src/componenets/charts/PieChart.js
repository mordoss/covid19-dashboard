import React from 'react';
import { ResponsivePie } from '@nivo/pie';

/* const data = [
  {
    id: 'rust',
    label: 'rust',
    value: 263,
    color: 'hsl(145, 70%, 50%)',
  },
  {
    id: 'haskell',
    label: 'haskell',
    value: 69,
    color: 'hsl(270, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 333,
    color: 'hsl(140, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 295,
    color: 'hsl(203, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 83,
    color: 'hsl(168, 70%, 50%)',
  },
];
 */
const MyResponsivePie = ({ data }) => (
  <div style={{ height: '30vh' }}>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={3}
      cornerRadius={5}
      colors={{ scheme: 'nivo' }}
      borderWidth={3}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      enableRadialLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          itemTextColor: '#eee',
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MyResponsivePie;
