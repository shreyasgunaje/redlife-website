import React from 'react';
import './find_donor.scss';
import { Box, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";


function Find_donor() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    units: "",
    blood: "",
    region: ""
});

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
        ...prevProps,
        [name]: value
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
};

const City = [
    {
        value: '--Select a Region--',
        label:'--Select a Region--',
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
    
const blood = [
    {
      value: 'A+',
      label: 'A+',
    },
    {
      value: 'A-',
      label: 'A-',
    },
    {
      value: 'B+',
      label: 'B+',
    },
    {
      value: 'AB+',
      label: 'AB+',
    },
    {
        value: 'AB-',
        label: 'AB-',
      },
      {
        value: 'O+',
        label: 'O+',
      },
      {
        value: 'O-',
        label: 'O-',
      },
      {
        value: 'Any',
        label: 'Any',
      },
    
  ];

return (
    <div className="container">
        <div className="main_container">
            <div className="top_container">
                <div className="title_text">
                    <div className="title_head">
                        We Are Here To Help You
                    </div>
                    <div className="text_content"> RedLife Foundation has partnered with other NGOs to help you
                        reach out to more and more potential donors.
                        Fill this short form to reach out to our partner organisations.
                    </div>
                </div>
            </div>
        </div>
        <div className="form_container">
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

                   
                    <form onSubmit={handleSubmit}>
                        <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                            <div  className="form_fields">
                            <label className="lables">Patient Name*</label>
                            <TextField className="field" margin="normal" placeholder="Patient Name" variant="standard" />
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
                            <TextField className="field" placeholder="9999xxxxxx" variant="standard" />
                            </div>
                            <div className="form_fields">
                            <label className="lables">Units Required*</label>
                            <TextField
                                className="field"
                                type="number"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            </div>
                            <div className="form_fields">
                            <label className="lables">Blood Group Required*</label>
                            <TextField
                                id="standard-select-bloodgroup"
                                select
                                defaultValue="A+"
                                variant="standard"
                            >
                                {blood.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField><br /><br />
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
                        </Typography>
                        <div className="create_request">
                        <Button variant="contained" >Create Request</Button>
                        </div>
                        </form>
                </Paper>
            </Box>
        </div>


    </div>
)
}
export default Find_donor;