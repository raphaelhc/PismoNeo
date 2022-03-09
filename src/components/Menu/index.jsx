import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as MenuIconComponent } from 'assets/menu.svg';
import { useNavigate } from 'react-router-dom';

const options = [
    { label: 'Sobre', value: '/' },
    { label: 'Lista por intervalo', value: '/lista-por-intervalo' }
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
    console.log(props);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (value) => {
        navigate(value);
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: 'white' }}
            >
                <MenuIconComponent />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} onClick={() => handleClose(option.value)}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}