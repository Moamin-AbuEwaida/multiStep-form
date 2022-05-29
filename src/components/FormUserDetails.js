import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            {/* <AppBar title="Enter User Details">Enter User Details</AppBar> */}
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="Menu">
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Enter User Details
                </Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField 
               placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField 
                placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br/>
            <Button
                color="primary"
                variant='contained'
                onClick={this.continue}
            >
                Continue
            </Button>

        </React.Fragment>  
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails