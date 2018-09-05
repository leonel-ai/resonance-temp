import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import CircleIcon from "material-ui-icons/FiberManualRecord"
import Grid from 'material-ui/Grid'

const styles = theme => ({
  activeLink: {
    color: "#fc5724 !important"
  },
  inactiveLink: {
    color: "white"
  },
  linkContainer: {
    padding: '0 8rem',
  },
  [theme.breakpoints.down('lg')]:{
    linkContainer: {
      padding: '0 6rem',
    },
    circle: {
      fontSize: '1.1rem'
    }
  },
  [theme.breakpoints.down('sm')]:{
    linkContainer: {
      padding: '0 2rem'
    },
    circle: {
      fontSize: '0.5rem',
    },
  },
})

class CircleLinks extends Component {

  render() {
    const { classes } = this.props
    return (
      <Grid container direction='row' justify='space-between' alignItems='center' className={classes.linkContainer}>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle}/>
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
        <a
          to='/'
          // activeClassName={classes.activeLink}
          className={classes.inactiveLink}
        >
          <CircleIcon className={classes.circle} />
        </a>
      </Grid>
    );
  }

}

export default withStyles(styles, {withTheme: true})(CircleLinks);
