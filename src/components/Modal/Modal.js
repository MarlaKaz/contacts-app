import React, {Children, useState} from 'react'
import Form from '../Form/Form';

//modal component
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';


const BtnModal = ({open, onClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
           open={open}
           onClose={onClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {/* {Children} */}
                <Form />
            </Box>
        </Modal>
    )
}

export default BtnModal
