import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const YuModal = ({ activate_settings, handleClose, content }) => {
    const classes = useStyles();
    const [ activate, setActivate ] = useState( activate_settings );
    useEffect(() => {
        setActivate( activate_settings )
    }, [ activate_settings ])
    console.log( activate_settings );
    return (
        <div>
            <Modal
                aria-labelledby = "transition-modal-title"
                aria-describedby = "transition-modal-description"
                className = { classes.modal }
                open = { activate }
                onClose = { handleClose }
                closeAfterTransition
                BackdropComponent = { Backdrop }
                BackdropProps = {{
                  timeout: 500,
                }}
            >
                <Fade in = { activate }>
                    <div className = "ModalContainer">
                        <div className = "CloseModal">
                            <span
                                onClick = {
                                    () => handleClose( false )
                                }
                            >
                                X
                            </span>
                        </div>
                        { content }
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default YuModal;