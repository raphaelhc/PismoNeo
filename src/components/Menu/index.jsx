import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as MenuIconComponent } from 'assets/menu.svg';
import { useNavigate } from 'react-router-dom';
import { menu } from 'common/menu'

const ITEM_HEIGHT = 48;

const LongMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
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
                role="menuButton"
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
                role="menuComponent"
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
                {menu.map((option) => (
                    <MenuItem key={option.value} onClick={() => handleClose(option.value)} role="menuItem">
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default LongMenu