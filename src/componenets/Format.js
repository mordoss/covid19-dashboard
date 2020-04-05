import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Format = ({ format, setFormat }) => {
  return (
    <FormControl style={{ marginLeft: 16 }}>
      <FormLabel>Formatiraj</FormLabel>
      <RadioGroup
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        style={{ flexDirection: 'row' }}
      >
        <FormControlLabel value="num" control={<Radio />} label="Po broju" />
        <FormControlLabel value="perc" control={<Radio />} label="Po procentu" />
      </RadioGroup>
    </FormControl>
  );
};

export default Format;
