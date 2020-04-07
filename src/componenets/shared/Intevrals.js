import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const intervals = [
  'Od početka',
  'Danas (t.n.r.)',
  'Zadnje nedelje (t.n.r.)',
  'Zadnjeg meseca (t.n.r.)',
];

const Intevals = ({ intervalSelected, setInterval }) => {
  return (
    <FormControl variant="filled" style={{ marginTop: 8, marginRight: 8 }}>
      <InputLabel>Interval</InputLabel>
      <Select value={intervalSelected} onChange={(e) => setInterval(e.target.value)} native>
        {intervals.map((interval) => (
          <option value={interval} key={interval}>
            {interval}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Intevals;
