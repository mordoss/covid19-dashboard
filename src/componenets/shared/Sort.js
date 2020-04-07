import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Sort = ({ sort, setSort }) => {
  return (
    <ButtonGroup size="small" style={{ marginTop: 8 }}>
      <Button variant={sort ? 'contained' : 'outlined'} onClick={() => setSort(true)}>
        Silazno
      </Button>
      <Button variant={!sort ? 'contained' : 'outlined'} onClick={() => setSort(false)}>
        Uzlazno
      </Button>
    </ButtonGroup>
  );
};

export default Sort;
