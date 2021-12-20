import React from 'react'

//material-ui 
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

//styles, assets
import useStyles from './styles';
import defaultImg from '../../../images/contacts.png'

//redux
// import { useDispatch } from 'react-redux';
// import { deleteCard } from '../../../actions/cards';

const CardItem = ({ card }) => {
    const classes = useStyles();

    return (
        <h1>Contact</h1>
        // <Card className={classes.card}>
        //     <CardMedia className={classes.media} image={defaultImg} title={card.name} />
        //     <Typography className={classes.title} variant="h5" gutterBottom>{card.name}</Typography>
        //     <CardContent>
        //         <Typography variant="body2" color="textSecondary" gutterBottom>{card.address1}</Typography>
        //         <Typography variant="body2" color="textSecondary" gutterBottom>{card.address2}</Typography>
        //     </CardContent>
        //     <CardActions className={classes.cardActions}>
        //         <Button size="small" color="secondary" onClick={() => dispatch(deleteCard(card._id))}>
        //             <DeleteIcon fontSize="small" />
        //             Delete
        //         </Button> 
        //     </CardActions>
        // </Card>
    )
}

export default CardItem
