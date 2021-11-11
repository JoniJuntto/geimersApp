import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState } from 'react';

export default function SignUp({handleClose}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');

    const handleSubmit = () =>{

    }

    return(
        <Box p={3} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <TextField 
            variant='outlined'
            type='email'
            label='Syötä sähköposti'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            />
            <TextField 
            variant='outlined'
            type='password'
            label='Valitse salasana'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            />
            <TextField 
            variant='outlined'
            type='password'
            label='Syötä salasana uudelleen'
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            fullWidth
            />
            <Button
            variant='contained'
            size='large'
            style={{backgroundColor:'red'}}
            onClick={handleSubmit}
            >
                Rekisteröidy
            </Button>
        </Box>
    );
}