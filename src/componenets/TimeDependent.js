import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropertyCheckers from './PropertyCheckers';
import TimeDependentChart from './TimeDependentChart';
import { regions, intervalsWithRegions } from '../fakeData';

const TimeDependent = () => {
  const [regionSelected, setRegion] = useState('Beograd');
  const [checkersArray, setCheck] = useState([['temperature', 'fever', '38.9°C']]);

  const objectToDataArr = (prop) =>
    Object.entries(intervalsWithRegions).reduce((acc, cur, i) => {
      acc[i] = {
        x: cur[0],
        y: cur[1][regionSelected][prop[0]][prop[1]],
      };
      return acc;
    }, []);

  const dataForChart = checkersArray.map((el) => ({
    id: el[2],
    color: 'hsl(100, 70%, 50%)',
    data: objectToDataArr(el),
  }));

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <FormControl>
        <InputLabel>Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={regionSelected || ''}
          onChange={(e) => setRegion(e.target.value)}
          native
        >
          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </Select>
      </FormControl>
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} />
      <TimeDependentChart data={dataForChart} />
    </Paper>
  );
};

export default TimeDependent;
