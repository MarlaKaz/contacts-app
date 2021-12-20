import React, {useState} from 'react'
import { Grid, Typography } from '@material-ui/core';

//redux
import { useSelector } from 'react-redux';

//components
import Card from './Card/Card';
import Modal from '../Modal/Modal';

//add-button 
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

//styles
import useStyles from './styles';

const Cards = () => {

    const cards = useSelector((state) => state.cards); {/* redux */}

    const classes = useStyles();

    console.log(cards);

    //modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
           <div>
              <h1>Contacts 
                  <IconButton color="primary" onClick={handleOpen}> 
                      <AddCircle /> 
                  </IconButton>
                  <Modal open={open} onClose={handleClose} />
                </h1>
           </div>
           <Card />
           <Card /> 
           {/* <div>
               !cards.length ? 
               <Typography variant="h4" align="center"> You haven't added any contacts yet. </Typography> : 
               (
                   <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                       {cards.map((card) => (
                           <Grid key={card._id} item xs={12} sm={6}>
                               <Card card={card} />
                           </Grid>
                       ))}
                   </Grid>
               )
           </div> */}
        </>
    )
}

export default Cards
