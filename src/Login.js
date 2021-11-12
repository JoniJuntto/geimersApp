import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { login } from './firebase';
import { useHistory } from "react-router-dom";
import CustomAlert from './CustomAlert';

export default function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () =>{
        if(!email || !password ){
            props.setAlertState({
                open: true,
                textOnAlert: "Sähköposti tai salasana tyhjä",
                severityOfAlert: 'error'
            });
            return;
        }
        try {
            const result = await login(email, password);
            props.setAlertState({
                open: true,
                textOnAlert: `Kirjautuminen onnistui, tervetuloa`,
                severityOfAlert: 'success'
            });
            history.push('/home');

        } catch(error) {
            console.log(error.message)
            props.setAlertState({
                open: true,
                textOnAlert: error.message,
                severityOfAlert: 'error'
            });
            return;
        }
    };


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
            <Button
            variant='contained'
            size='large'
            style={{backgroundColor:'red'}}
            onClick={handleSubmit}
            >
                Kirjaudu sisään
            </Button>
        </Box>
    );
}