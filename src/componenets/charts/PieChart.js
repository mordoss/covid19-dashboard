import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const theme = {
  tooltip: {
    container: {
      color: 'white',
      background: '#15182A',
    },
  },
};

const MyResponsivePie = ({ data }) => (
  <div style={{ height: '57vh' }}>
    <ResponsivePie
      borderWidth={6}
      data={data}
      theme={theme}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.2}
      padAngle={3}
      cornerRadius={5}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate
      motionStiffness={90}
      motionDamping={15}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#E4DFC7"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={8}
      radialLabelsLinkHorizontalLength={4}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: 'color' }}
      legends={[
        {
          itemTextColor: '#eee',
          anchor: 'bottom-right',
          direction: 'column',
          translateY: 66,
          translateX: 36,
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
            id: 'Muški',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Nepoznato',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Bez putovanja ili kontakta sa simptomima',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Nepromenjeno',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Mladi',
          },
          id: 'dots',
        },
        {
          match: {
            id: '37°C-38.9°C',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'Ženski',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'Putovanje ili kontakt sa simptomima',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'Stari',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'Pogoršano',
          },
          id: 'lines',
        },
      ]}
      tooltip={(obj) => (
        <p>
          {obj.id}: {obj.value}
        </p>
      )}
    />
  </div>
);

export default MyResponsivePie;
