import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { signup } from "./firebase";
import CustomAlert from './CustomAlert'
import { useHistory } from "react-router-dom";

export default function SignUp(props){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const history = useHistory();

    const handleSubmit = async () =>{
        if(password !== confirmPassword){
             props.setAlertState({
                 open: true,
                 textOnAlert: "Passwords don't match",
                 severityOfAlert: 'error'
             })
             return;
        }
        setLoading(true)
        try {
            await signup(email, password);
            props.setAlertState({
                open: true,
                textOnAlert: "Signup success",
                severityOfAlert: 'success'
            })
            history.push('/create');

        } catch(error) {
            props.setAlertState({
                open: true,
                textOnAlert: error.message,
                severityOfAlert: 'error'
            });
            return;
        }
        setLoading(false);
    }

    return(
        <Box p={3} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <CustomAlert alertState={props.alertState} setAlertState={props.setAlertState}/>
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