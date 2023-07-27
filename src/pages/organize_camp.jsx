import './organize_camp.scss';
import { useState } from "react";
import { Paper } from '@mui/material';
import { Box, MenuItem } from "@mui/material";
import { TextField, Button, Typography } from "@mui/material";
import banner_img1 from '../assets/images/1.png';
import banner_img2 from '../assets/images/2.png';
import img1 from '../assets/images/orgcamp1.jpg';
import img2 from '../assets/images/orgcamp2.jpg';
import img3 from '../assets/images/orgcamp3.jpg';
import img4 from '../assets/images/orgcamp4.jpg';
import img5 from '../assets/images/orgcamp5.jpg';
import img6 from '../assets/images/orgcamp6.jpg';
import Carousel from 'react-material-ui-carousel';
import { CarouselNextIcon, CarouselPrevIcon } from '../shared/icon';
import axios from 'axios';

function Organize_camp(props) {

    const [yourNameState, setYourNameState] = useState('');
    const [emailAddressState, setEmailAddressState] = useState('');
    const [phoneNumberState, setPhoneNumberState] = useState('');
    const [cityRegionState, setCityRegionState] = useState('--Select a Region--');
    const [organizationNameState,setOrganizationNameState] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create the formData object to send to the backend
        const formData = {
            your_name: yourNameState,
            email_address: emailAddressState,
            phone_number: phoneNumberState,
            city_region: cityRegionState,
            name_of_organization: organizationNameState
        };

        // Send form data to the backend
        axios.post('http://localhost:8000/submit-form2', formData)
            .then((response) => {
                // Handle successful form submission (if needed)
                console.log(response.data);
            })
            .catch((error) => {
                // Handle form submission error (if needed)
                console.error('Error submitting form:', error);
            });
    };

    let items = [
        {
            bannerImg: banner_img1,
        },
        {
            bannerImg: banner_img2,
        },
    ];
    let items2 = [
        {
            bannerImg1: img3,
        },
        {
            bannerImg1: img4,
        },
        {
            bannerImg1: img5,
        },
        {
            bannerImg1: img6,
        },
    ]
    let textItems = [
        {
            text1: 'Organize A Blood Camp',
            description: 'You are one step closer to being a superhero. Organize a blood donation camp in your college, office, society and get that superman cape. We would take care of the process end-to-end'
        },
        {
            text1: 'Donate Blood, Save Lives',
            description: 'You are one step closer to being a superhero. Organize a blood donation camp in your college, office, society and get that superman cape. We would take care of the process end-to-end'
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <div className="banner_img">
                    <img src={props.item.bannerImg} alt="banner-image" />
                </div>
            </Paper>
        );
    }
    function Item1(props) {
        return (
            <Paper>
                <div className="banner1_img">
                    <img src={props.item.bannerImg1} alt="banner-image" />
                </div>
            </Paper>
        );
    }
    function TextItem(props) {
        return (
            <div className='overlay_text'>
                <div className='overlay_head'>
                    <Typography>{props.item.text1}</Typography>
                </div>
                <div className='overlay_body'>
                    <Typography>{props.item.description}</Typography>
                </div>
            </div>
        )
    }

    const City = [
        {
            value: '--Select a Region--',
            label: '--Select a Region--',
        },
        {
            value: 'Udupi',
            label: 'Udupi',
        },
        {
            value: 'Manglore',
            label: 'Manglore',
        },
        {
            value: 'Hassan',
            label: 'Hassan',
        },
    ];
    return (
        <div className="container1">
            <div className="carousel_container">
                <Carousel
                    className="banner_carousel"
                    NextIcon={<CarouselNextIcon />}
                    PrevIcon={<CarouselPrevIcon />}
                    // navButtonsAlwaysInvisible={true}
                    navButtonsAlwaysVisible={false}
                    autoPlay={true}
                    stopAutoPlayOnHover={false}
                    interval={10000}
                    animation={'slide'}
                    swipe={true}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}

                </Carousel>
                <div className="carousel_overlay">
                    <Carousel
                        className='overlay_carousel'
                        interval={6000}
                        navButtonsAlwaysInvisible={true}
                        indicators={false}
                    >
                        {textItems.map((item, i) => (
                            <TextItem key={i} item={item} />
                        ))}
                    </Carousel>
                    <Button
                        className="register_btn"
                        variant="contained"
                    >
                        <a href='#form' >REQUEST CALLBACK</a>
                    </Button>
                </div>
            </div>
            <div className='info1_container'>
                <div className='info1_image'>
                    <img className='i_img' src={img1} />
                </div>
                <div className='info1_text'>
                    <h3>What are Blood Donation Camps</h3>
                    <p>Rather than going to the hospital to donate blood, we bring the hospital to you.
                        We partner with government recognized blood banks who bring their expert doctors and staff to conduct a clean blood donation camp without any hassles.
                        The camp can be organized in a common area or in a blood donation bus which we can bring. We make all the other arrangements, you just have to provide a ventilated clean area.Now saving lives does not need any travel even,
                        just 20 minutes at the camp!
                    </p>
                </div>
            </div>
            <div className='info2_container'>
                <div className='info2_image'>
                    <img className='i_img' src={img2} />
                </div>
                <div className='info2_text'>
                    <h3>How we can make them different:</h3>
                    <p>
                        We do not just help you organize a camp, but we also try to ensure each donor feels special.
                        A blood donation camp can be fun with music, it can have a theme, it can motivate people for greater things.
                        We help you do that,right from motivating people before the camp to ensuring each donor feels a sense of pride and happiness post donation.
                    </p>

                </div>


            </div>
            <div className='form_container'>
                <div className='left_container'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 728,
                            },
                        }}
                    >
                        <Carousel
                            className="banner_carousel"
                            //   NextIcon={<CarouselNextIcon />}
                            //   PrevIcon={<CarouselPrevIcon />}
                            navButtonsAlwaysInvisible={true}
                            // navButtonsAlwaysVisible={false}
                            autoPlay={true}
                            stopAutoPlayOnHover={false}
                            interval={10000}
                            animation={'slide'}
                            swipe={true}
                        >
                            {items2.map((item, i) => (
                                <Item1 key={i} item={item} />
                            ))}

                        </Carousel>
                    </Box>
                </div>
                <div className='right_container'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 728,
                            },
                        }}
                    >
                        <Paper elevation={24} >

                            <form id="form" >
                                <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                                    <div className='form_head'>
                                        <div className='text_head'>Organize a camp</div>
                                        <div className='text_content'>Fill this form and a volunteer would be in touch with you soon</div>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Your Name*</label>
                                        <TextField
                                            className="field"
                                            placeholder="Your Name"
                                            variant="standard" 
                                            name="yourName"
                                            value={yourNameState}
                                            onChange={(e) => setYourNameState(e.target.value)}/>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Email address*</label>
                                        <TextField
                                            className="field"
                                            placeholder="example@domain.com"
                                            variant="standard" 
                                            name="emailAddress"
                                                value={emailAddressState}
                                                onChange={(e) => setEmailAddressState(e.target.value)}
                                           />
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Phone Number*</label>
                                        <TextField
                                            type="tel"
                                            className="field"
                                            placeholder="9999xxxxxx"
                                            variant="standard" 
                                            name="phoneNumber"
                                                value={phoneNumberState}
                                                onChange={(e) => setPhoneNumberState(e.target.value)}/>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">City Region*</label>
                                        <TextField
                                            id="standard-select-city"
                                            select
                                            defaultValue="--Select a Region--"
                                            variant="standard"
                                            name="cityRegion"
                                                value={cityRegionState}
                                                onChange={(e) => setCityRegionState(e.target.value)}
                                            >
                                        
                                            {City.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Name of Organization*</label>
                                        <TextField
                                            className="field"
                                            placeholder="Your Organization Name"
                                            variant="standard"
                                            name="cityRegion"
                                            value={organizationNameState}
                                            onChange={(e) => setOrganizationNameState(e.target.value)}
                                        />
                                    </div>
                                </Typography>
                                <div className="create_request">
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Create Request
                                    </Button>
                                </div>
                            </form>
                        </Paper>
                    </Box>
                </div>
            </div>

        </div>
    )
}
export default Organize_camp