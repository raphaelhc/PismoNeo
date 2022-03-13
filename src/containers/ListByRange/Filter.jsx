import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BasicDateRangePicker from 'components/DatePicker'
import Button from '@mui/material/Button';

const Filter = ({ onSearch }) => {
    const [filterValue, setfilterValue] = useState([null, null]);

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', 'flexWrap': 'wrap' }} container >
                <Box sx={{ 'marginRight': '0.3rem', 'my': 1 }} container >
                    <BasicDateRangePicker sx={{ mr: 1 }} setfilterValue={setfilterValue} filterValue={filterValue}></BasicDateRangePicker>
                </Box>
                <Button size="string" variant="contained" sx={{ 'my': 1 }} onClick={() => onSearch(filterValue[0], filterValue[1])}>Filtrar</Button>
            </Box>
        </React.Fragment >
    );
}

Filter.propTypes = {
    setfilterValue: PropTypes.func,
    onSearch: PropTypes.func,
    filterValue: PropTypes.array
};

export default memo(Filter)