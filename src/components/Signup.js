import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState, useContext } from 'react';
import { signup } from "../firebase";
import CustomAlert from './CustomAlert'
import { useHistory } from "react-router-dom";
import { GeimerContext } from '../DataContext';


export default function SignUp({handleClose}){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const history = useHistory();
    const {alertOpen, setAlertOpen, alertText, setAlerText, alertSeverity, setAlertSeverity} = useContext(GeimerContext);

    const handleSubmit = async () =>{
        if(password !== confirmPassword){
            setAlertOpen(true);
            setAlerText("Salasanat eivät yhtenäisiä");
            setAlertSeverity('error')
             return;
        }
        setLoading(true)
        try {
            await signup(email, password);
            setAlertOpen(true);
            setAlerText("Rekisteröityminen onnistui, tervetuloa")
            setAlertSeverity("success")
            history.push('/create');

        } catch(error) {
            setAlertOpen(true);
            setAlerText(error.message);
            setAlertSeverity('error')
            return;
        }
        setLoading(false);
    }

    return(
        <Box p={3} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <CustomAlert />
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