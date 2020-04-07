import React from 'react';
import { Button } from '@material-ui/core';

const Test = ({ mobile }) => {
  return (
    <div
      style={{
        backgroundColor: mobile ? '' : '#2A2D3D',
        padding: 16,
        textAlign: 'right',
        marginTop: mobile ? 24 : 0,
      }}
    >
      <Button variant="contained" style={{ minWidth: '14rem', marginRight: 16 }}>
        <a
          target="blank"
          style={{ textDecoration: 'none', color: '#15182A' }}
          href="https://koronanetest.netlify.com/"
        >
          Uradi online test
        </a>
      </Button>
    </div>
  );
};

export default Test;
