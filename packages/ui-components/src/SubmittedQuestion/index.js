import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton';
import XIcon from '../Assets/xIcon'

const styles = theme => ({
  root: {
    background: 'linear-gradient(to right, #942d81 33.33%, #013a48 33.33%,#013a48 66.66%, #ffe76a 66.66%)',
    height: "100vh"
  },
  paperWrapper:{
    backgroundColor: theme.palette.primary.orange,
    padding: '3rem 0rem 3rem 5rem'
  },
  subheading: {
    fontSize: '3.5rem',
    color: theme.palette.primary.defaultText
  },
  body: {
    fontSize: '2rem',
    color: theme.palette.primary.defaultText,
    lineHeight: '1.43'
  },
  closeButton:{
    fontSize: '4rem',
    marginTop: '0.8rem',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('lg')]: {
    subheading: {
      fontSize: '3rem',
    },
    closeButton: {
      fontSize: '3.5rem',
      marginTop: '0.6rem',
    },
    body: {
      fontSize: '1.5rem',
    },
  },
  [theme.breakpoints.down('md')]: {
    root: {
      alignItems: 'flex-start',
    },
    gridWrapper: {
      marginTop: '5.5rem'
    },
    subheading: {
      fontSize: '2.5rem',
    },
    closeButton: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        background: 'linear-gradient(to right, #942d81 50%, #013a48 50%,#013a48)',
      },
      gridWrapper: {
        marginTop: '3rem',
      },
      paperWrapper:{
        padding: '3rem 0rem 3rem 2rem'
      },
      subheading: {
        fontSize: '2.2rem',
      },
      closeButton: {
        fontSize: '2.5rem',
        marginTop: '0.3rem',
      },
      body: {
        fontSize: '1.3rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      gridWrapper: {
        marginTop: '3rem',
      },
      paperWrapper: {
        padding: '1rem 0 3rem 1.6rem'
      },
      subheading: {
        fontSize: '1.5rem',
      },
      closeButton: {
        fontSize: '1.7rem',
        marginTop: '0.3rem',
      },
      body: {
        fontSize: '1rem',
      },
    }
  }
})

class SubmittedQuestion extends Component {

  render() {
    const {
      classes,
      handleWindowClose,
      postQuestionQuote,
     } = this.props
    return (
      <Grid container justify='flex-start' alignItems='center' item lg={9} md={12} sm={12} xs={12} className={classes.root}>
          <Grid item lg={8} md={8} sm={10} xs={10} className={classes.gridWrapper}>
          <Paper className={classes.paperWrapper}>
            <Grid container justify='space-between' alignItems='flex-start'>
              <Grid item lg={9} md={9} sm={9} xs={10}>
                <Typography className={classes.subheading} variant='subheading' gutterBottom>
                  Let's Resonate.
                </Typography>
                <Typography className={classes.body} variant='body2'>
                  {postQuestionQuote}
                </Typography>
              </Grid>
              <Grid item lg={2} md={3} sm={2} xs={2}>
                <XIcon className={classes.closeButton} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles, { withTheme: true })(SubmittedQuestion);
