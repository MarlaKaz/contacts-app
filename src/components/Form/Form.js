import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

//redux
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createCard } from '../../actions/cards';

const Form = () => {
    const [cardData, setCardData] = useState({
        cardname: '', cardaddress1: '', cardaddress2: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log(cardData)
        // e.preventDefault();

        dispatch(createCard(cardData));
        
    }

    const clear = () => {
        
    }

    return (
        <>
            <Typography variant="h4" align="center">New Contact</Typography>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> {/*noValidate excluded */}
                <TextField 
                    name="fullName" 
                    variant="outlined" 
                    label="Full Name" 
                    fullWidth 
                    value={cardData.cardname} 
                    onChange={(e) => setCardData({ ...cardData, cardname: e.target.value })} 
                />
                <TextField 
                    name="address1" 
                    variant="outlined" 
                    label="Address 1" 
                    fullWidth 
                    value={cardData.cardaddress1} 
                    onChange={(e) => setCardData({ ...cardData, cardaddress1: e.target.value })} 
                />
                <TextField 
                    name="address2" 
                    variant="outlined" 
                    label="Address 2" 
                    fullWidth 
                    value={cardData.cardaddress2} 
                    onChange={(e) => setCardData({ ...cardData, cardaddress2: e.target.value })} 
                />
            </form>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Create</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>  {/* alternatively discard*/}
        </>
    )
}

export default Form
