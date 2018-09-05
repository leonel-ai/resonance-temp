import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  containerDiv:{
    margin: '0 0 12rem 0',
  },
  textBlock:{
    color: theme.palette.primary.defaultText,
    fontWeight: '300',
    fontSize: '3.5rem',
  },
  textArea: {
    backgroundColor: theme.palette.primary.orange,
    color: theme.palette.primary.defaultText,
    width: '100%',
    fontSize: '2rem',
    marginTop: '3rem',
    fontFamily: 'GT-Pressura'
  },
  [theme.breakpoints.down('lg')]:{
    containerDiv: {
      margin: '0 0 10rem 0',
    },
    textBlock: {
      fontSize: '2.7rem'
    },
    textArea: {
      marginTop: '1.7rem',
      fontSize: '1.5rem',
    },
  },
  [theme.breakpoints.down('md')]:{
    containerDiv: {
      margin: '9rem 0 7rem 0',
    },
  },
  [theme.breakpoints.down('sm')]:{
    containerDiv: {
      margin: '4rem 0 2rem 0'
    },
    textBlock: {
      fontSize: '1.1rem',
    },
    textArea: {
      marginTop:'0.5rem',
      fontSize: '0.8rem',
    },
  },
  [theme.breakpoints.down('xs')]:{

  },
})

class PostContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: '',
    };
  }

  handleTextChange = e => {
    this.setState({
      textArea: e.target.value
    })
  }

  handleSubmit = (e) => {
    if(e.key === 'Enter' && e.shiftKey === false){
      e.preventDefault()
      this.props.handleSubmit(this.state.textArea)
      this.setState({
        textArea: ''
      })
    }
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.containerDiv}>
        <Typography variant='subheading' className={classes.textBlock}>
          What's on your mind?
        </Typography>
        <textarea
          rows='5'
          className={classes.textArea}
          value={this.state.textArea}
          onChange={this.handleTextChange}
          onKeyPress={this.handleSubmit}
        />
      </div>
    );
  }

}

export default withStyles(styles, { withTheme: true })(PostContent);
