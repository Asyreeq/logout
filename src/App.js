import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  // appBar: {
  //   position: 'relative',
  // },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,   
    //marginTop: theme.spacing(25),    
  },
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(22),      
    },
  },
}));

export default function FullScreenDialog() {
  const classes = useStyles();

  const values = {    
    currDate: new Date().toDateString().substring(0,10),
    currTime: new Date().toLocaleTimeString()
  };

  return (
    <div style={{ width: '100%', height: '100%'  }}>
    <Box display="flex" p={1} bgcolor="background.bgcolor">    
       <React.Fragment>
          <CssBaseline />
          <Container >           
              <Paper className={classes.paper} elevation={5}>                              
                  You are now logged out. <br/>
                  Thank you for using Kiswire Sales System. 
                  Click here if you wish to <Link href="/login">login to Kiswire Sales System</Link> again. <br/>
                  {values.currDate} {values.currTime} <br/><br/>

                  <Button variant="outlined" color="secondary" href="/home">
                    Home
                  </Button>
              </Paper>                      
                 
         </Container>         
        </React.Fragment>      
      </Box>
  </div>
    
  );
}


