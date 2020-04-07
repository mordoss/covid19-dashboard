import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PublicIcon from '@material-ui/icons/Public';
import TimeDependent from './TimeDependent';
import Rank from './Rank';
import Pie from './Pie';
import World from './World';
import Test from './shared/Test';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 32,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
    [theme.breakpoints.down('xs')]: {
      marginTop: 24,
      marginLeft: 8,
      marginRight: 8,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 16,
    },
  },
}));

const Container = () => {
  const classes = useStyles();
  const [tabSelected, setTab] = useState(2);

  return (
    <>
      <Hidden smUp>
        <div style={{ backgroundColor: '#15182A' }}>
          <Test />
          <AppBar position="sticky">
            <Paper square>
              <Tabs
                value={tabSelected}
                indicatorColor="primary"
                textColor="primary"
                onChange={(e, newTab) => setTab(newTab)}
                variant="fullWidth"
              >
                <Tab icon={<TimelineIcon />} />
                <Tab icon={<PieChartIcon />} />
                <Tab icon={<BarChartIcon />} />
                <Tab icon={<PublicIcon />} />
              </Tabs>
            </Paper>
          </AppBar>
          <SwipeableViews index={tabSelected} onChangeIndex={(e, newTab) => setTab(newTab)}>
            <Paper className={classes.paper}>
              <TimeDependent index={0} />
            </Paper>
            <Paper className={classes.paper}>
              <Pie index={1} />
            </Paper>
            <Paper className={classes.paper}>
              <Rank index={2} />
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <World index={3} />
              </div>
            </Paper>
          </SwipeableViews>
        </div>
      </Hidden>

      <Hidden xsDown>
        <Test />

        <Grid container>
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

          <Grid item xs={12} lg={7}>
            <Paper className={classes.paper}>
              <Rank />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Paper className={classes.paper}>
              <World />
            </Paper>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default Container;
