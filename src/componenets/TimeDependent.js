import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Format from './Format';
import PropertyCheckers from './PropertyCheckers';
import TimeDependentChart from './charts/TimeDependentChart';
import { regions, intervalsWithRegions } from '../fakeData';

const TimeDependent = () => {
  const [regionSelected, setRegion] = useState('Beograd');
  const [checkersArray, setCheck] = useState([['temperature', 'fever', '>38.9°C']]);
  const [format, setFormat] = useState('num');

  const objectToDataArr = (prop) =>
    Object.entries(intervalsWithRegions).reduce((acc, cur, i) => {
      acc[i] = {
        x: cur[0],
        y:
          format === 'num'
            ? cur[1][regionSelected][prop[0]][prop[1]]
            : Math.round(
                (cur[1][regionSelected][prop[0]][prop[1]] /
                  Object.values(cur[1][regionSelected].age).reduce((a, b) => a + b, 0)) *
                  100
              ),
      };
      return acc;
    }, []);

  const dataForChart = checkersArray.map((el) => ({
    id: el[2],
    color: 'hsl(100, 70%, 50%)',
    data: objectToDataArr(el),
  }));

  return (
    <>
      <div>
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
        <Format format={format} setFormat={setFormat} />
      </div>
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} maxProperties={8} />
      <TimeDependentChart data={dataForChart} />
    </>
  );
};

export default TimeDependent;
