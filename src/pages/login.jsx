import "./login.scss"
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
import header_icon from '../assets/images/icon.png';
import footer_icon from '../assets/images/icon-red.png'

function Login() {

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

      const defaultTheme = createTheme();

      function SignIn() {
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
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: '#7a0303' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" style={{color: '#7a0303'}} />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor:'#7a0303', '&:hover':{bgcolor:'#4a0202'} }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2" color={'#7a0303'}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2" color={'#7a0303'}>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5, mb: 2 }} />
            </Container>
          </ThemeProvider>
        );
      }

  return (
    <div className='auth_body'>
        <Head/>
        <div className="auth_inner">
            <SignIn/>
        </div>
        
    </div>
  )
}

export default Login