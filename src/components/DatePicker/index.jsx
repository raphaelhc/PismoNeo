import React, { memo } from 'react';
import PropTypes from 'prop-types';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as CloseIconComponent } from 'assets/close.svg';
import IconButton from '@mui/material/IconButton';
import ptLocale from 'date-fns/locale/pt-BR';

const localeMap = { pt: ptLocale };



function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
}

const MinMaxDateRangePicker = ({ filterValue, setfilterValue }) => {
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = React.useState([null, null]);

    const seta = (newValue) => {
        setValue(newValue);
        setfilterValue(newValue);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap.pt}>
            <Box sx={{ display: 'flex' }} container >
                <DateRangePicker
                    locale={'pt'}
                    startText="Inicio"
                    endText="Fim"
                    inputFormat='dd/MM/yyyy'
                    value={filterValue}
                    maxDate={getWeeksAfter(filterValue[0], 1)}
                    minDate={null}
                    onChange={(newValue) => {
                        seta(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} size="small" color="primary" role="textbox" focused />
                            <Box sx={{ mx: 1 }}>
                                <Typography color='primary' >to</Typography>
                            </Box>
                            <TextField {...endProps} size="small" color="primary" role="textbox" focused />
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

MinMaxDateRangePicker.propTypes = {
    filterValue: PropTypes.array,
    setfilterValue: PropTypes.func
};

export default memo(MinMaxDateRangePicker)