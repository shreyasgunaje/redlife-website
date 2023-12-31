import './organize_camp.scss';
import { useState } from "react";
import { Link, Paper } from '@mui/material';
import { Box, MenuItem } from "@mui/material";
import { TextField, Button, Typography } from "@mui/material";
import banner_img1 from '../assets/images/1.png';
import banner_img2 from '../assets/images/2.png';
import Carousel from 'react-material-ui-carousel';


function Organize_camp(props) {

    let items = [
        {
            bannerImg: banner_img1,
        },
        {
            bannerImg: banner_img2,
        },
    ];
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
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        units: "",
        blood: "",
        region: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

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
            <div className='sub1_container'>
                    <div className="carousel_container">
                        <Carousel
                            className="banner_carousel"
                            //   NextIcon={<CarouselNextIcon />}
                            //   PrevIcon={<CarouselPrevIcon />}
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
            </div>
            <div className='sub2_container'>
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

                            <form id="form" onSubmit={handleSubmit}>
                                <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                                    <div className='form_head'>
                                        <div className='text_head'>Organize a camp</div>
                                        <div className='text_content'>Fill this form and a volunteer would be in touch with you soon</div>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Your Name*</label>
                                        <TextField className="field" placeholder="Your Name" variant="standard" />
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Email address*</label>
                                        <TextField className="field" placeholder="example@domain.com" variant="standard" />
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Phone Number*</label>
                                        <TextField type="tel" className="field" placeholder="9999xxxxxx" variant="standard" />
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">City Region*</label>
                                        <TextField
                                            id="standard-select-city"
                                            select
                                            defaultValue="--Select a Region--"
                                            variant="standard"
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
                                        <TextField className="field" placeholder="Your Organization Name" variant="standard" />
                                    </div>
                                </Typography>
                                <div className="create_request">
                                    <Button variant="contained" >Create Request</Button>
                                </div>
                            </form>
                        </Paper>
                    </Box>
                </div>
                <div className='left_container'>

                </div>
            </div>

        </div>
    )
}
export default Organize_camp