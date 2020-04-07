import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import WorldChart from './charts/WorldChart';

const World = () => {
  const [data, setData] = useState(null);
  let response;
  useEffect(() => {
    async function loadData() {
      response = await axios.get('https://corona.lmao.ninja/countries');
      setData(
        response.data.map((country) => ({
          id: country.countryInfo.iso3,
          value: country.cases,
          deaths: country.deaths,
          todayCases: country.todayCases,
          todayDeaths: country.todayDeaths,
          critical: country.critical,
          flag: country.countryInfo.flag,
        }))
      );
    }
    loadData();
  }, []);
  return (
    <div>
      <Typography style={{ marginBottom: 54 }}>Klikni na zemlju za informacije</Typography>
      {data && <WorldChart data={data} />}
    </div>
  );
};

export default World;
