import React, { useEffect, memo, useState } from "react";
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const ErrorAlert = ({ error, setError }) => {
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        if (error) {
            setOpenAlert(true)
        }
    }, [openAlert, error]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(null)
        setOpenAlert(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const renderErroDetail = (label, data) => data && <AlertTitle>{label}: {data}</AlertTitle>

    return (
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {renderErroDetail('Error code', error?.response?.status)}
                {renderErroDetail('URL', error?.response?.request?.responseURL)}
                {renderErroDetail('Status', error?.response?.statusText)}
                {renderErroDetail('Message', error?.response?.data?.error_message)}
            </Alert>
        </Snackbar>
    );
};

ErrorAlert.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func
};

export default memo(ErrorAlert);