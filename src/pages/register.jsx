import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import footer_icon from '../assets/images/icon-red.png'
import { FormControl, InputLabel, MenuItem, Select, Step, StepLabel, Stepper } from '@mui/material';

function Register() {

  const Head = () => (
    // <div className='title_container'>
// 	<img src={header_icon} alt='icon' className='header_icon' />
// 	<Typography className='header_title'>redLife</Typography>
// </div>
    <div className='title_container'>
      <img src={footer_icon} alt='icon' className='footer_icon'/>
      <Typography className='footer_title' >red<span>Life</span></Typography>
    </div>
  )

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {/* {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            RedLife Foundation
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} */}
        Copyright © RedLife Foundation 2023
      </Typography>
    );
  }

    
    function SelectUserType({setUserType}) {

      const handleUserTypeChange = (event) => {
        setUserType(Number(event.target.value));
      };

      return(
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth required>
            <InputLabel id="userType">User type</InputLabel>
              <Select
                  id='userType'
                  label="user type"
                  name="userType"
                  onChange={handleUserTypeChange}
              >
                <MenuItem value={1}>Donor</MenuItem>
                <MenuItem value={2}>Hospital / Clinic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      )
    }

    const defaultTheme = createTheme();

    const bloodgroups = [ 'A+', 'A-', 'B+','B-','O+','O-','AB+','AB-'];
    var bloodgp;
    
    function SignUpDonor() {

      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      return(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth >
              <InputLabel id="bloodGroup">Blood Group</InputLabel>
                <Select
                    id='bloodGroup'
                    label="Blood Group"
                    name="bloodGroup"
                    value={bloodgp}
                >
                    {bloodgroups.map((bloodgroup, i) => (
                        <MenuItem value={bloodgroup} key={i}>{bloodgroup}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone no."
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" style={{color: '#7a0303'}} />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>      
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor:'#7a0303', '&:hover':{bgcolor:'#4a0202'} }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" color= '#7a0303'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      )
    }

    function SignUpOrganization(){
      
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      return(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="orgName"
                required
                fullWidth
                id="orgName"
                label="Hospital / Clinic Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone no."
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" style={{color: '#7a0303'}} />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid> 
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor:'#7a0303', '&:hover':{bgcolor:'#4a0202'} }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" color= '#7a0303'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      )
    }

    
    
    function SignUp() {
        
      const steps = ['Select User type', 'Enter User details'];
      const [activeStep, setActiveStep] = React.useState(0);
      const [userType, setUserType] = React.useState(0);

      function getStepContent(step) {
          switch (step) {
          case 0:
            return <SelectUserType setUserType={setUserType} />;
          case 1:
              if( userType === 1) return <SignUpDonor/>;
              else if(userType === 2) return <SignUpOrganization/>;
          default:
              throw new Error('Unknown step');
          }
      }
      
  
      const handleNext = () => {
          setActiveStep(activeStep + 1);
      };
  
      const handleBack = () => {
          setActiveStep(activeStep - 1);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

        return (
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box                           
                sx={{
                  marginTop: 2,
                  // marginLeft: 'auto',
                  // marginRight: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: '#7a0303' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, width:1 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Grid
                    container
                    justifyContent="space-between"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <Grid item xs={5}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ color:'#fff',bgcolor:'#7a0303', '&:hover':{bgcolor:'#4a0202'} }}>
                          Back
                        </Button>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                        sx={{ bgcolor:'#7a0303', '&:hover':{bgcolor:'#4a0202'} }}
                      >
                        {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                      </Button>
                    </Grid>
                  </Grid>
                </React.Fragment>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2" color= '#7a0303'>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>    
              <Copyright sx={{ mt: 5, mb: 1 }} />
            </Container>
          </ThemeProvider>
        );
      }

  return (
    <div className='auth_body'>
        <Head/>
        <div className="auth_inner">
            <SignUp/>
        </div>
        
    </div>
  )
}

export default Register