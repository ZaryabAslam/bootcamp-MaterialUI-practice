import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    height: 600,
    width: 400,
},
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>

      </Paper>

      
    </div>
  );
}
