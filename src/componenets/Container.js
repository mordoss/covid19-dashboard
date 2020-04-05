import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TimeDependent from './TimeDependent';
import Rank from './Rank';
import Pie from './Pie';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 32,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 24,
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <Paper className={classes.paper}>
          <TimeDependent />
        </Paper>
      </Grid>

      <Grid item xs={12} md={5}>
        <Paper className={classes.paper}>
          <Pie />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Rank />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Container;
