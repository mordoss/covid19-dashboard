import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RankChart from './charts/RankChart';
import Format from './shared/Format';
import Sort from './shared/Sort';
import Intervals from './shared/Intevrals';
import PropertyCheckers from './shared/PropertyCheckers';
import { regionsAccumulated } from '../fakeData';

const Rank = () => {
  const [checkersArray, setCheck] = useState([
    ['symptoms2', 'severeCough', 'Jak kašalj'],
    ['diseases', 'reducedImunity', 'Narušen imunitet'],
  ]);
  const [sortProperty, setSortProperty] = useState(checkersArray[0][2]);
  const [sort, setSort] = useState(false);
  const [format, setFormat] = useState(true);
  const [intervalSelected, setInterval] = useState('Danas');

  const makeData = (region) =>
    checkersArray.reduce((acc, cur) => {
      const totalTesters = Object.values(region.age).reduce((a, b) => a + b, 0);
      acc[cur[2].substr(0, 10)] = format
        ? region[cur[0]][cur[1]]
        : Math.round((region[cur[0]][cur[1]] / totalTesters) * 100);
      return acc;
    }, {});

  const data = regionsAccumulated
    .filter((region) => region.region !== 'Svi')
    .map((region) => ({
      region: region.region
        .split(/(?=[A-Z])/)
        .map((word, i, arr) => {
          if (arr.length !== 1 && !i) {
            return `${word.substring(0, 1)}. `;
          }
          return word;
        })
        .join(''),
      ...makeData(region),
    }))
    .sort((a, b) => (sort ? b[sortProperty] - a[sortProperty] : a[sortProperty] - b[sortProperty]))
    .slice(0, 5);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 12,
          flexWrap: 'wrap',
        }}
      >
        <FormControl variant="filled" style={{ marginTop: 8 }}>
          <InputLabel>Sortiraj po</InputLabel>
          <Select value={sortProperty} onChange={(e) => setSortProperty(e.target.value)} native>
            {checkersArray.map((arr) => (
              <option value={arr[2]} key={arr[2]}>
                {arr[2]}
              </option>
            ))}
          </Select>
        </FormControl>

        <Intervals intervalSelected={intervalSelected} setInterval={setInterval} />
      </div>
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} maxProperties={4} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 12,
          flexWrap: 'wrap',
        }}
      >
        <Sort sort={sort} setSort={setSort} />
        <Format format={format} setFormat={setFormat} />
      </div>

      <RankChart data={data} />
    </>
  );
};

export default Rank;
