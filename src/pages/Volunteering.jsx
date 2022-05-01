import React from 'react';
import './ngoregister.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Volunteering = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div class="container1">
        <div class="screen">
            <div class="screen__content">
            <div className='login-text'><center>Volunteering</center></div>
                <form class="login">
                    <div class="login__field">
                        <input type="text" class="login__input" placeholder="Volunteering_ID"></input>
                    </div>
                    <div class="login__field">
                        <input type="text" class="login__input" placeholder="Name"></input>
                    </div>
                    <div class="login__field">
                        <input type="tel" class="login__input" placeholder="Contact_No"></input>
                    </div>
                    <div class="login__field">
                        <input type="text" class="login__input" placeholder="Email_ID"></input>
                    </div>
                    <div class="login__field">
                        <input type="text" class="login__input" placeholder="Name_of_NGO"></input>
                    </div>
                    <Button onClick={handleOpen} class="button login__submit">
                        <span class="button__text">Volunteer Now</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                SUCCESS!
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                YOU HAVE BEEN REGISTERED SUCCESSFULLY :)
                            </Typography>
                            </Box>
                        </Modal>
                    </Button>				
                </form>
                </div>
        </div>
    </div>
  )
}

export default Volunteering