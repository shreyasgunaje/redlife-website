import React from 'react';
import './find_donor.scss';
import { Box, MenuItem, Paper } from "@mui/material";
import { useState } from "react";
import { TextField, Button, Typography, Dialog, DialogContent } from "@mui/material";
import axios from 'axios';
import collab from '../assets/images/collaborators.jpg';

function DonorDetails({ donor }) {
    return (
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1">Donor Name: {donor.donor_name}</Typography>
            <Typography variant="body1">Email: {donor.email_address}</Typography>
            <Typography variant="body1">Phone: {donor.phone_number}</Typography>
            <Typography variant="body1">Blood Group: {donor.blood_group}</Typography>
        </Paper>
    );
}

function Find_donor() {
    const [patientNameState, setPatientNameState] = useState('');
    const [yourNameState, setYourNameState] = useState('');
    const [emailAddressState, setEmailAddressState] = useState('');
    const [phoneNumberState, setPhoneNumberState] = useState('');
    const [unitsRequiredState, setUnitsRequiredState] = useState('');
    const [bloodGroupState, setBloodGroupState] = useState('Any');
    const [cityRegionState, setCityRegionState] = useState('--Select a Region--');

    const [successMessage, setSuccessMessage] = useState('');
    const [showDonors, setShowDonors] = useState(false);
    const [donorsList, setDonorsList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create the formData object to send to the backend
        const formData = {
            patient_name: patientNameState,
            your_name: yourNameState,
            email_address: emailAddressState,
            phone_number: phoneNumberState,
            units_required: unitsRequiredState,
            blood_group: bloodGroupState,
            city_region: cityRegionState,
        };

        // Send form data to the backend
        axios.post('http://localhost:8000/submit-form', formData)
            .then((response) => {
                setPatientNameState('');
                setYourNameState('');
                setEmailAddressState('');
                setPhoneNumberState('');
                setUnitsRequiredState('');
                setBloodGroupState('Any');
                setCityRegionState('--Select a Region--');
                // Handle successful form submission (if needed)

                setSuccessMessage('Request sent successfully');

                window.alert('Request sent successfully');

                // After a successful form submission, fetch donors with the same city/region
                axios.get(`http://localhost:8000/get-donors?city_region=${cityRegionState}`)
                    .then((response) => {
                        const donors = response.data.donors;
                        // Handle the fetched donors and displaying them in the UI

                        setDonorsList(donors);
                        setShowDonors(true); // Show the donors' details in MUI Paper
                        console.log('Fetched donors:', donors);
                    })
                    .catch((error) => {
                        console.error('Error fetching donors:', error);
                    });

                console.log(response.data);
            })
            .catch((error) => {
                // Handle form submission error (if needed)
                console.error('Error submitting form:', error);
            });
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
            value: 'Mangalore',
            label: 'Mangalore',
        },
        {
            value: 'Karkala',
            label: 'Karkala',
        },
        {
            value: 'Puttur',
            label: 'Puttur',
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
            value: 'B-',
            label: 'B-',
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
                <div className="form_container">
                    <div className='form_left_container'>
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
                            <Paper elevation={4} >
                                <form >
                                    <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                                        <div className="form_fields">
                                            <label className="lables">Patient Name*</label>
                                            <TextField
                                                className="field" margin="normal"
                                                placeholder="Patient Name"
                                                variant="standard"
                                                name="patientName"
                                                value={patientNameState}
                                                onChange={(e) => setPatientNameState(e.target.value)} />
                                        </div>
                                        <div className="form_fields">
                                            <label className="lables">Your Name*</label>
                                            <TextField
                                                className="field"
                                                placeholder="Your Name"
                                                variant="standard"
                                                name="yourName"
                                                value={yourNameState}
                                                onChange={(e) => setYourNameState(e.target.value)} />
                                        </div>
                                        <div className="form_fields">
                                            <label className="lables">Email address*</label>
                                            <TextField
                                                className="field"
                                                placeholder="example@domain.com"
                                                variant="standard"
                                                type="email"
                                                name="emailAddress"
                                                value={emailAddressState}
                                                onChange={(e) => setEmailAddressState(e.target.value)} />
                                        </div>
                                        <div className="form_fields">
                                            <label className="lables">Phone Number*</label>
                                            <TextField className="field"
                                                placeholder="9999xxxxxx"
                                                variant="standard"
                                                type="tel"
                                                name="phoneNumber"
                                                value={phoneNumberState}
                                                onChange={(e) => setPhoneNumberState(e.target.value)} />
                                        </div>
                                        <div className="form_fields">
                                            <label className="lables">Units Required*</label>
                                            <TextField
                                                className="field"
                                                type='number'
                                                variant="standard"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name="unitsRequired"
                                                value={unitsRequiredState}
                                                onChange={(e) => setUnitsRequiredState(e.target.value)}
                                            />
                                        </div>
                                        <div className="form_fields">
                                            <label className="lables">Blood Group Required*</label>
                                            <TextField
                                                id="standard-select-bloodgroup"
                                                select
                                                defaultValue="Any"
                                                variant="standard"
                                                name="bloodGroup"
                                                value={bloodGroupState}
                                                onChange={(e) => setBloodGroupState(e.target.value)}
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
                                    </Typography>
                                    <div className="create_request">
                                        <Button
                                            variant="contained"
                                            onClick={handleSubmit}
                                        >
                                            Create Request
                                        </Button>
                                    </div>
                                    {/* A dialog will open showing the Donors list when showDonors(boolean) which is true */}
                                    <Dialog open={showDonors} onClose={() => setShowDonors(false)}>
                                        <DialogContent >
                                            <Typography>Available Donors</Typography>
                                            {donorsList.map((donor) => (
                                                <DonorDetails key={donor.donor_name} donor={donor} />
                                            ))}
                                        </DialogContent>
                                    </Dialog>
                                </form>
                            </Paper>
                        </Box>
                    </div>
                    <div className='form_right_container'>
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
                            <Typography>Our Collaborators</Typography>
                            <img className='img_collab' src={collab} alt="collab" />
                        </Box>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Find_donor;