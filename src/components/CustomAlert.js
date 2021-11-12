import React, {useState, useContext} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { GeimerContext } from '../DataContext';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomAlert(props) {
  const [open, setOpen] = useState(false);
  const {alertOpen, setAlertOpen, alertText, setAlerText, alertSeverity, setAlertSeverity} = useContext(GeimerContext);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen({ open: false })
  };



  return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
            {alertText}
          </Alert>
        </Snackbar>
      </Stack>
  );
}