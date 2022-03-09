/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Modal from 'components/Modal'
import { hasHazardousText } from './constant'
import { getEstimatedDiameter } from './helper'


function ObjectDetail(props) {
    const { onClose, open, itemSelected } = props;

    const renderItem = (label, value) => {
        return (
            <div>
                <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                    {label}:
                </Typography>
                <Typography component="span" sx={{ ml: 1, 'fontWeight': '600' }} variant="subtitle2" gutterBottom>
                    {value}
                </Typography>
            </div>
        )
    }


    return itemSelected && (
        <Modal title={itemSelected.name} onClose={onClose} open={open}>
            {renderItem('Magnitude absoluta', `${Number(itemSelected?.absolute_magnitude_h)} h`)}
            {renderItem('Diâmetro máximo estimado', `${getEstimatedDiameter(itemSelected).max} km`)}
            {renderItem('Diâmetro mínimo estimado', `${getEstimatedDiameter(itemSelected).min} km`)}
            <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                É potencialmente perigoso?:
            </Typography>
            <Typography
                color={hasHazardousText[itemSelected?.is_potentially_hazardous_asteroid].color}
                component="span"
                sx={{ ml: 1, 'fontWeight': '600' }}
                variant="subtitle2"
                gutterBottom
            >
                {hasHazardousText[itemSelected?.is_potentially_hazardous_asteroid].label}
            </Typography>
            <br />
            <br />
            <Typography component="span" sx={{ mb: 1.5, mr: 1 }} color="text.secondary">
                Link NASA JPL:
            </Typography>
            <Link href={itemSelected?.nasa_jpl_url} target="_blank">{itemSelected.name}</Link>
        </Modal>

    );
}

ObjectDetail.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default ObjectDetail