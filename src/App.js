import React from 'react';
import ButtonAppBar from './components/appBar'
import RadioButtonsGroup from './components/radio'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Checkbox} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    margin: '0 auto',
    marginTop: 50,
    
    padding: 15
  },
  input: {
    width: '95%',
    marginBottom: 10
  },
  intro: {
    textAlign: 'center',
    color: 'blue',
  },
  para: {
    mariginleft: 10,
  },
  btn: {
    marginRight: 40,
  },
}));


function App() {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className={classes.root}>
       <ButtonAppBar />
       
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.intro}>Form by Zaryab</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Name" className={classes.input}/>
          <TextField label="Enter Password" className={classes.input}/>
          <p className={classes.para}>Select Ur Gender</p>
          <RadioButtonsGroup />
          <p>Please Select Languages you know:</p>
          Java
          <Checkbox className={classes.btn}
        
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Python
      <Checkbox className={classes.btn}
        
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />React
      <Checkbox
        
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
          
          
          <Button variant="contained" color="primary" className={classes.input}>
            Submit
          </Button>
        </form>
        
      </Paper> 

      <h2>Doughnut Example</h2>
        <Doughnut data={data}  />
    
    </div>
  );
}

export default App;