import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from './componenets/Container';
import firebase from './firebase';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    backgroundColor: theme.palette.background.default,
  },
}));

const App = () => {
  const classes = useStyles();
  const [regions, setRegions] = useState('null');

  /* useEffect(() => {
    const logCities = async () => {
      const db = firebase.firestore();
      const regionsRef = db.collection('regions');
      const allRegions = await regionsRef.get();
      const allRegionsObject = {};
      allRegions.forEach((doc) => {
        allRegionsObject[doc.id] = doc.data();
      });
      setRegions(allRegionsObject);
    };
    logCities();
  }, []);
 */
  return (
    regions && (
      <div className={classes.container}>
        <Container />
      </div>
    )
  );
};

export default App;
