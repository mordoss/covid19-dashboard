import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RankChart from './charts/RankChart';
import Format from './Format';
import PropertyCheckers from './PropertyCheckers';
import { regionsAccumulated } from '../fakeData';

const Rank = () => {
  const [checkersArray, setCheck] = useState([['temperature', 'fever', '>38.9°C']]);
  const [sortProperty, setSortProperty] = useState(checkersArray[0][2]);
  const [sort, setSort] = useState('desc');
  const [format, setFormat] = useState('num');

  const makeData = (region) =>
    checkersArray.reduce((acc, cur) => {
      const totalTesters = Object.values(region.age).reduce((a, b) => a + b, 0);
      acc[cur[2]] =
        format === 'num'
          ? region[cur[0]][cur[1]]
          : Math.round((region[cur[0]][cur[1]] / totalTesters) * 100);
      return acc;
    }, {});

  const data = regionsAccumulated
    .filter((region) => region.region !== 'Svi')
    .map((region) => ({
      region: region.region,
      ...makeData(region),
    }))
    .sort((a, b) =>
      sort === 'desc' ? b[sortProperty] - a[sortProperty] : a[sortProperty] - b[sortProperty]
    )
    .slice(0, 6);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <FormControl>
          <InputLabel>Sortiraj po</InputLabel>
          <Select value={sortProperty} onChange={(e) => setSortProperty(e.target.value)} native>
            {checkersArray.map((arr) => (
              <option value={arr[2]} key={arr[2]}>
                {arr[2]}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ marginLeft: 16 }}>
          <FormLabel>Sortiraj</FormLabel>
          <RadioGroup
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ flexDirection: 'row' }}
          >
            <FormControlLabel value="asc" control={<Radio />} label="Uzlazno" />
            <FormControlLabel value="desc" control={<Radio />} label="Silazno" />
          </RadioGroup>
        </FormControl>
        <Format format={format} setFormat={setFormat} />
      </div>
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} maxProperties={4} />
      <RankChart data={data} />
    </>
  );
};

export default Rank;
