import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Format = ({ format, setFormat }) => {
  return (
    <ButtonGroup size="small" style={{ marginTop: 8, marginRight: 8 }}>
      <Button variant={format ? 'contained' : 'outlined'} onClick={() => setFormat(true)}>
        Broj
      </Button>
      <Button variant={!format ? 'contained' : 'outlined'} onClick={() => setFormat(false)}>
        Procenat
      </Button>
    </ButtonGroup>
  );
};

export default Format;
