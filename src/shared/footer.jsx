import { Divider } from '@mui/material'
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

function Footer() {

  const handleRefreshToHomePage = () => {
		window.location.href = '/';
	}

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
            
          </div>
        </Box>
    </div>
  )
}

export default Footer