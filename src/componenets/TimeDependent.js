import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Format from './shared/Format';
import PropertyCheckers from './shared/PropertyCheckers';
import TimeDependentChart from './charts/TimeDependentChart';
import { regions, intervalsWithRegions } from '../fakeData';

const TimeDependent = () => {
  const [regionSelected, setRegion] = useState('Beograd');
  const [checkersArray, setCheck] = useState([
    ['symptoms2', 'severeCough', 'Jak kašalj'],
    ['symptoms2', 'painChest', 'Bol u grudima'],
  ]);
  const [format, setFormat] = useState(true);

  const objectToDataArr = (prop) =>
    Object.entries(intervalsWithRegions).reduce((acc, cur, i) => {
      acc[i] = {
        x: cur[0],
        y: format
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
    id: el[2].substr(0, 10),
    data: objectToDataArr(el),
  }));

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <FormControl variant="filled" style={{ marginTop: 8, marginRight: 8 }}>
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
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} maxProperties={6} />
      <TimeDependentChart data={dataForChart} />
    </>
  );
};

export default TimeDependent;
