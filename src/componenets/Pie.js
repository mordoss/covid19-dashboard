import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PieChart from './charts/PieChart';
import Format from './shared/Format';
import Intervals from './shared/Intevrals';

import {
  regions,
  regionsAccumulated,
  countTotalPieTesters as countTotalTesters,
} from '../fakeData';
import { convertPropertyToNative } from '../helpers';

const Pie = () => {
  const [regionSelected, setRegion] = useState('Beograd');
  const [property, setProperty] = useState('temperature');
  const [format, setFormat] = useState(true);
  const [intervalSelected, setInterval] = useState('Danas');

  const totalTesters = countTotalTesters(regionSelected);

  const properties = [
    ['temperature', 'Temperatura'],
    ['sex', 'Pol'],
    ['travel', 'Putovanje i kontakt'],
    ['age', 'Starost'],
    ['last48h', 'Stanje zadnjih 48h'],
  ];

  const selectedRegionDataObject = regionsAccumulated.find((e) => e.region === regionSelected);
  const data = Object.entries(selectedRegionDataObject[property]).map((e) => ({
    id: convertPropertyToNative(e[0]),
    label: convertPropertyToNative(e[0]),
    value: format ? e[1] : Math.round((e[1] / totalTesters) * 100),
  }));

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 12,
            flexWrap: 'wrap',
          }}
        >
          <FormControl variant="filled" style={{ marginTop: 8, marginRight: 8 }}>
            <InputLabel>Region</InputLabel>
            <Select value={regionSelected} onChange={(e) => setRegion(e.target.value)} native>
              {regions.map((region) => (
                <option value={region} key={region}>
                  {region}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="filled" style={{ marginTop: 8, marginRight: 8 }}>
            <InputLabel>Polje</InputLabel>
            <Select value={property} onChange={(e) => setProperty(e.target.value)} native>
              {properties.map((propertyElement) => (
                <option value={propertyElement[0]} key={propertyElement[0]}>
                  {propertyElement[1]}
                </option>
              ))}
            </Select>
          </FormControl>

          <Intervals intervalSelected={intervalSelected} setInterval={setInterval} />
          <Format format={format} setFormat={setFormat} />
        </div>
      </div>
      <PieChart data={data} />
    </>
  );
};

export default Pie;
