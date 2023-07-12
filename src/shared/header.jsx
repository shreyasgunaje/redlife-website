import { Button, Divider, Grid, Icon, IconButton, Link, ListItem } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import './header.scss';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import header_icon from '../assets/images/icon.png';
import {useNavigate, useLocation} from 'react-router-dom';
import { NavToggleIcon } from './icon';

function LogInUserIcon(props) {
	return (
		<SvgIcon {...props} viewBox="0 0 16 16">
			<defs>
				<clipPath id="clip-path">
					<rect
						id="Rectangle_15"
						data-name="Rectangle 15"
						width="16"
						height="16"
						fill="#fff"
					/>
				</clipPath>
			</defs>
			<g id="Group_31560" data-name="Group 31560" clipPath="url(#clip-path)">
				<path
					id="Path_29218"
					data-name="Path 29218"
					d="M7.584,0h.831a1.019,1.019,0,0,0,.118.021,6.985,6.985,0,0,1,1.994.392,7.936,7.936,0,0,1,5.262,5.772A9.644,9.644,0,0,1,16,7.584v.831a1.031,1.031,0,0,0-.021.119,7.519,7.519,0,0,1-.726,2.828,7.934,7.934,0,0,1-5.372,4.411A10.117,10.117,0,0,1,8.416,16H7.584a.7.7,0,0,0-.1-.02,7.684,7.684,0,0,1-3.533-1.088A7.93,7.93,0,0,1,.218,9.847,10.458,10.458,0,0,1,0,8.415V7.584c.007-.045.019-.09.022-.136A7.748,7.748,0,0,1,1.328,3.6,7.925,7.925,0,0,1,6.153.219,10.888,10.888,0,0,1,7.584,0M2.559,12.411c.013-.015.02-.018.021-.023.005-.04.013-.079.015-.119a1.834,1.834,0,0,1,.752-1.4c.1-.082.208-.166.319-.238A12.214,12.214,0,0,1,5.909,9.441a2.353,2.353,0,0,0,.328-.156.669.669,0,0,0,.269-.964A3.494,3.494,0,0,0,6.2,7.885,4.8,4.8,0,0,1,5.155,4.173,2.65,2.65,0,0,1,7.12,1.844a3.127,3.127,0,0,1,1.1-.12,2.634,2.634,0,0,1,2.4,1.565,3.643,3.643,0,0,1,.28,2A4.8,4.8,0,0,1,9.853,7.809a1.987,1.987,0,0,0-.38.656.674.674,0,0,0,.319.874,5.193,5.193,0,0,0,.868.387,7.627,7.627,0,0,1,1.914,1.029,1.9,1.9,0,0,1,.8,1.213,2.919,2.919,0,0,0,.057.446,7.007,7.007,0,1,0-10.868,0"
					fill="#7a0303"
				/>
			</g>
			,
		</SvgIcon>
	);
}

function LogArrowIcon(props) {
	return (
		<SvgIcon {...props} viewBox="0 0 8.828 14.827">
			<path
				id="Path_29214"
				data-name="Path 29214"
				d="M3847.184,1022.835l6,6-6,6"
				transform="translate(-3845.77 -1021.421)"
				fill="none"
				stroke="#7a0303"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</SvgIcon>
	);
}

function SelectArrowIcon(props) {
	return (
		<SvgIcon
			{...props}
			width="14.828"
			height="8.828"
			viewBox="0 0 14.828 8.828"
		>
			<path
				id="Path_29205"
				data-name="Path 29205"
				d="M3847.184,1022.835l6,6-6,6"
				transform="translate(1036.248 -3845.77) rotate(90)"
				fill="none"
				stroke="#02a54f"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</SvgIcon>
	);
}

function MenuArrowIcon(props) {
	return (
		<SvgIcon
			{...props}
			width="7.121"
			height="12.121"
			viewBox="0 0 7.121 12.121"
		>
			<path
				id="Path_29391"
				data-name="Path 29391"
				d="M3847.184,1022.835l5,5-5,5"
				transform="translate(-3846.123 -1021.774)"
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</SvgIcon>
	);
}

function NavMenuArrowIcon(props) {
	return (
		<SvgIcon {...props} width="14.12" height="8.121" viewBox="0 0 14.12 8.121">
			<path
				id="Path_29223"
				data-name="Path 29223"
				d="M3847.184,1022.835l6,6-6,6"
				transform="translate(1035.895 -3846.123) rotate(90)"
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</SvgIcon>
	);
}

function Header() {
	
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const handleRefreshToHomePage = () => {
		window.location.href = '/';
	}

	const navigate = useNavigate();
	const location = useLocation();

	const Navbar = () => {
		return(
			<List component="nav" aria-label='main mailbox folders'>
				<ListItemButton
					selected={location.pathname==='/find-a-donor'}
					onClick={(e)=>{
						navigate('/find-a-donor');
					}}
				>
					<ListItemText primary="FIND A DONOR"/>
				</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/organize-a-camp'}
					onClick={(e)=>{
						navigate('/organize-a-camp');
					}}	
				>
	 				<ListItemText primary="ORGANIZE A CAMP"/>
	 			</ListItemButton>
				 <ListItemButton
					selected={location.pathname==='/join-us'}
					onClick={(e)=>{
						navigate('/join-us');
					}}	
				>
					<ListItemText primary="JOIN US"/>
				</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/about-us'}
					onClick={(e)=>{
						navigate('/about-us');
					}}	
				>
	 				<ListItemText primary="ABOUT US"/>
	 			</ListItemButton>
	 			<ListItemButton
					selected={location.pathname==='/contact-us'}
					onClick={(e)=>{
						navigate('/contact-us');
					}}	
				>
					<ListItemText primary="CONTACT US"/>
				</ListItemButton>
				{/* <ListItemButton
					selected={location.pathname==='/register-now'}
					onClick={(e)=>{
						navigate('/register-now');
					}}	
				>
	 				<ListItemText primary="REGISTER NOW"/>
	 			</ListItemButton> */}
			</List>
		)
	}

	const MobileDrawer = () => {
		return (
			<div
				className={
					'mobile_drawer_container ' + (openDrawer ? 'open_drawer' : '')
				}
			>
				<Navbar />
			</div>
		);
	};

  return (
	<div className='header_container'>
		<Box>
			<div className='title_container'>
				<img src={header_icon} alt='icon' className='header_icon' onClick={handleRefreshToHomePage}/>
				<Typography className='header_title' onClick={handleRefreshToHomePage}>redLife</Typography>
			</div>
			<Navbar/>
			<div className='right_container'>
				<Button
					className="login_btn"
					variant="contained"
					startIcon={<LogInUserIcon />}
					endIcon={<LogArrowIcon />}
					onClick={(e) => {
						window.open('');
					}}
				>
					<span>LOGIN</span>
				</Button>
				<IconButton
					aria-label="Menu"
					className={
						'navbar_toggler_btn' + (openDrawer ? ' drawer_open' : '')
					}
					onClick={() => setOpenDrawer(!openDrawer)}
				>
					<NavToggleIcon />
				</IconButton>
			</div>
		</Box>
		<MobileDrawer/>
	</div>
  )
}

export default Header