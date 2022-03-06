/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as CloseIconComponent } from 'assets/close.svg';
import IconButton from '@mui/material/IconButton';

function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
}

const MinMaxDateRangePicker = ({ filterValue, setfilterValue }) => {
    const [value, setValue] = React.useState([null, null]);

    const seta = (newValue) => {
        setValue(newValue);
        setfilterValue(newValue);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ display: 'flex' }} container >
                <DateRangePicker
                    startText="Check-in"
                    endText="Check-out"
                    inputFormat='dd/MM/yyyy'
                    value={filterValue}
                    maxDate={getWeeksAfter(filterValue[0], 1)}
                    minDate={null}
                    onChange={(newValue) => {
                        seta(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} size="small" color="primary" focused />
                            <Box sx={{ mx: 1 }}>
                                <Typography color='primary' >to</Typography>
                            </Box>
                            <TextField {...endProps} size="small" color="primary" focused />
                        </React.Fragment>
                    )}
                />
                <IconButton disableRipple aria-label="delete" size="small" onClick={() => seta([null, null])}>
                    <CloseIconComponent />
                </IconButton>
            </Box>
        </LocalizationProvider>
    );
}

export default memo(MinMaxDateRangePicker)