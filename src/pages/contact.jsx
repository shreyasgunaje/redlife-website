import React from 'react';
import './contact.scss';
import { Link, Paper } from '@mui/material';
import { Box, MenuItem } from "@mui/material";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function Contact() {
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
return (
    <div className="message_container">
        <div className='left_container'>

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


                        <form id="form" onSubmit={handleSubmit}>
                            <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                                <div className='form_head'>
                                    <div className='text_head'>Drop Us A Message</div>
                                    <div className='text_content'>Fill this form and we will be in touch with you soon<br/>If you need blood, please register at <Link href="/find-a-donor">FIND A DONOR </Link> only</div>
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
                                    <label className="lables">Message</label>
                                    <TextField className="field" multiline maxRows={5} placeholder="Enter your message here" variant="outlined" />
                                </div>
                            </Typography>
                            <div className="create_request">
                                <Button variant="contained" >Submit</Button>
                            </div>
                        </form>
                    </Paper>
                </Box>
        </div>

    </div>
);
}

export default Contact;