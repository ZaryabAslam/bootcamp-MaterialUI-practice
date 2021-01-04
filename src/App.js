import React, {useEffect} from 'react';
import ButtonAppBar from './components/appBar'
import RadioButtonsGroup from './components/radio'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Checkbox} from '@material-ui/core';


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
    width: '40%',
    marginLeft: 10,
    marginBottom: 10
  },
  intro: {
    // textAlign: 'center',
    color: 'blue',
  },
  address: {
    width: '90%', 
  },
  next: {
    marginLeft: 310,
  },
  para: {
    mariginleft: 10,
  },
  btn: {
    marginRight: 40,
  },
}));


function App() {
//i havent used formik- which is for form validaton
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  useEffect(()=> {
    async function fetchData(){
     
      const response = await fetch('https://www.bitspro.com/api/form'); ///this api is returning no data, 
      console.log("response = ",response);
      let data2 = await response.json()
  
     console.log("Data = ",data2);
    }
    fetchData();
  },[]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className={classes.root}>
       <ButtonAppBar />
       
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.intro}>Checkout</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="First name" className={classes.input}/>
          <TextField label="Last name" className={classes.input}/>
          <TextField label="adrres line 1" className={classes.address}/>
          <TextField label="adrres line 2" className={classes.address}/>
          <TextField label="city" className={classes.input}/>
          <TextField label="state/province" className={classes.input}/>
          <TextField label="zip code" className={classes.input}/>
          <TextField label="postal code" className={classes.input}/>
          
      <br />
      <Checkbox
        
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      >hii</Checkbox>
          <br></br>
          
          <Button variant="contained" color="primary" className={classes.next}>
            Next
          </Button>
        </form>
        
      </Paper> 

     
    
    </div>
  );
}

export default App;