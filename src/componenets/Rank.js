import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import RankChart from './RankChart';
import PropertyCheckers from './PropertyCheckers';
import { regionsAccumulated } from '../fakeData';

const Rank = () => {
  const [checkersArray, setCheck] = useState([['temperature', 'fever', '38.9°C']]);

  const data = regionsAccumulated
    .map((e) => ({ region: e.region, property1: e.age.old, property2: e.sex.males }))
    .sort((a, b) => b.property - a.property)
    .slice(0, 6);

  return (
    <Paper style={{ margin: 16, padding: 16, width: '60vw' }}>
      <PropertyCheckers checkersArray={checkersArray} setCheck={setCheck} />
      <RankChart data={data} />
    </Paper>
  );
};

export default Rank;
