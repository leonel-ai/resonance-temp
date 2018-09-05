import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paperMain: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.orange,
    backgroundColor: theme.palette.primary.main,
  },
  paperLight: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.defaultText,
    backgroundColor: theme.palette.primary.darkBlue,
  },
  paperDark: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.orange,
    backgroundColor: theme.palette.primary.yellow,
  },
  contrastText:{
    color: theme.palette.primary.orange,
  },
})

class ThemeDemo extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperMain}>main background with orange text</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperLight}>darkBlue background with defaultText</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperDark}>yellow background with orange text</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles, {withTheme: true})(ThemeDemo);
