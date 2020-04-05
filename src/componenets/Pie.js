import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PieChart from './charts/PieChart';
import Format from './Format';
import {
  regions,
  regionsAccumulated,
  countTotalPieTesters as countTotalTesters,
} from '../fakeData';
import { convertPropertyToNative } from '../helpers';

const Pie = () => {
  const [regionSelected, setRegion] = useState('Beograd');
  const [property, setProperty] = useState('temperature');
  const [format, setFormat] = useState('num');

  const totalTesters = countTotalTesters(regionSelected);
  const properties = [['temperature', 'Temperatura']];

  const selectedRegionDataObject = regionsAccumulated.find((e) => e.region === regionSelected);
  const data = Object.entries(selectedRegionDataObject[property]).map((e) => ({
    id: convertPropertyToNative(e[0]),
    label: convertPropertyToNative(e[0]),
    value: format === 'perc' ? Math.round((e[1] / totalTesters) * 100) : e[1],
  }));

  return (
    <>
      <FormControl>
        <InputLabel>Region</InputLabel>
        <Select value={regionSelected} onChange={(e) => setRegion(e.target.value)} native>
          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ marginLeft: 16 }}>
        <InputLabel>Izaberi polje</InputLabel>
        <Select value={property} onChange={(e) => setProperty(e.target.value)} native>
          {properties.map((propertyElement) => (
            <option value={propertyElement[0]} key={propertyElement[0]}>
              {propertyElement[1]}
            </option>
          ))}
        </Select>
      </FormControl>

      <Format format={format} setFormat={setFormat} />

      <PieChart data={data} />
    </>
  );
};

export default Pie;
