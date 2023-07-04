import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import footer_icon from '../assets/images/icon-red.png';
import './footer.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {

  const handleRefreshToHomePage = () => {
		window.location.href = '/';
	}

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='footer_container'>
        <Box>
          <div className='top_container'>
              <Divider
                orientation='horizontal'
                flexItem
                className='footer_divider'
              ></Divider>
              <div className='top_inner'>
                <div className='title_container'>
                  <img src={footer_icon} alt='icon' className='footer_icon' onClick={handleRefreshToHomePage}/>
				          <Typography className='footer_title' onClick={handleRefreshToHomePage}>red<span>Life</span></Typography>
                </div>
                <Stack className='social_stack' direction="row" alignItems="center" spacing={4}>
                  <Link href="https://www.instagram.com/" target='_blank'>
                    <InstagramIcon fontSize="medium" sx={{ color: "#7a0303" }} />
                  </Link>
                  <Link href="https://www.youtube.com/" target='_blank'>
                    <YouTubeIcon fontSize="medium" sx={{ color: "#7a0303" }} />
                  </Link>
                  <Link href="https://www.facebook.com/" target='_blank'>
                    <FacebookIcon sx={{ color: "#7a0303" }} fontSize="medium" />
                  </Link>
                  <Link href='https://twitter.com/' target='_blank'>
                    <TwitterIcon fontSize="medium" sx={{ color: "#7a0303" }} />
                  </Link>
                  <Link href='https://in.linkedin.com/' target='_blank'>
                    <LinkedInIcon fontSize="medium" sx={{ color: "#7a0303" }} />
                  </Link>
                  
                </Stack>
              </div>
              <Divider
                orientation='horizontal'
                flexItem
                className='footer_divider'
              ></Divider>
          </div>

          <div className='bottom_container'>
            <div className='list_container'>
              <Typography className='list_title'>NAVIGATION</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/home')}>
                  <ListItemText className={location.pathname === '/home' ? 'active' : ''} primary="Home" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/about-us')}>
                  <ListItemText className={location.pathname === '/about-us' ? 'active' : ''} primary="About us" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/join-us')}>
                  <ListItemText className={location.pathname === '/join-us' ? 'active' : ''} primary="Join us" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/contact-us')}>
                  <ListItemText className={location.pathname === '/contact-us' ? 'active' : ''} primary="Contact us" />
                </ListItem>
              </List>
              
            </div>
            <div className='list_container'>
              <Typography className='list_title'>REGISTER NOW</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/register-as-donor')}>
                  <ListItemText className={location.pathname === '/register-as-donor' ? 'active' : ''} primary="Register as a donor" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/register-as-organization')}>
                  <ListItemText className={location.pathname === '/register-as-organisation' ? 'active' : ''} primary="Register as an organization" />
                </ListItem>               
              </List>
            </div>
            <div className='list_container'>
              <Typography className='list_title'>FIND A DONOR</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/find-a-donor')}>
                  <ListItemText className='' primary="Find a donor in Mangaluru" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/find-a-donor')}>
                  <ListItemText className='' primary="Find a donor in Udupi-Manipal" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/find-a-donor')}>
                  <ListItemText className='' primary="Find a donor in Karkala" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/find-a-donor')}>
                  <ListItemText className='' primary="Find a donor in Puttur" />
                </ListItem>
              </List>
            </div>
          </div>
          <div className='copyright_container'>
            <Typography className='copy_text'>Copyright © RedLife Foundation 2023</Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/privacy')}>
                  <ListItemText className={location.pathname === '/privacy' ? 'active' : ''} primary="Privacy" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/terms-and-conditions')}>
                  <ListItemText className={location.pathname === '/terms-and-conditions' ? 'active' : ''} primary="Terms and Conditions" />
                </ListItem>
              </List>
          </div>
        </Box>
    </div>
  )
}

export default Footer