import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomAlert(props) {
  const [open, setOpen] = React.useState(false);
  const alertState = props.alertState;
  const setAlertState = props.setAlertState;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertState({open: false})
  };



  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={alertState.open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertState.severityOfAlert} sx={{ width: '100%' }}>
          {alertState.textOnAlert}
        </Alert>
      </Snackbar>
    </Stack>
  );
}