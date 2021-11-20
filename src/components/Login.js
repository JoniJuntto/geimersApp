import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { login } from '../firebase';
import { useHistory } from "react-router-dom";
import CustomAlert from './CustomAlert';
import { GeimerContext} from '../DataContext';
import { useContext } from 'react';

export default function Login({handleClose}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const values = useContext(GeimerContext);
    const {alertOpen, setAlertOpen, alertText, setAlerText, alertSeverity, setAlertSeverity} = useContext(GeimerContext);

    const handleSubmit = async () =>{
        if(!email || !password ){
            setAlertOpen(true);
            setAlerText("Sähköposti tai salasana tyhjä");
            setAlertSeverity('error')
            return;
        }
        try {
            const result = await login(email, password);
            setAlertOpen(true);
            setAlerText("Kirjautuminen onnistui, tervetuloa")
            setAlertSeverity("success")
            console.log(result)
            history.push('/home');

        } catch(error) {
            console.log(error.message)
            setAlertOpen(true);
            setAlerText(error.message);
            setAlertSeverity('error')
            return;
        }
    };


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