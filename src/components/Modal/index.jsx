import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IconButtonStyled } from './styles'
import { ReactComponent as CloseIconComponent } from 'assets/close.svg';


function ObjectDetail(props) {
    const { onClose, open, title, children } = props;

    return (
        <Dialog onClose={onClose} open={open} role="modalDialog" data-testid="modalDialog">
            <DialogTitle>
                {title}
                <IconButtonStyled onClick={onClose} role="modalCloseButton"><CloseIconComponent /></IconButtonStyled>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
}

ObjectDetail.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ObjectDetail


