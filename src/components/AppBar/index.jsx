import React from 'react'
import { default as Bar } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as SunIconComponent } from 'assets/sun-warm.svg';
import { ReactComponent as MoonIconComponent } from 'assets/moon-black.svg';
import { useScreenMode } from 'containers/Main/AppContext'
import Typography from '@mui/material/Typography';


// eslint-disable-next-line react/prop-types
const AppBar = ({ title }) => {

    const { setScreenMode, screenMode } = useScreenMode();
    const isLigthMode = screenMode === 'light'
    const getColorMode = isLigthMode ? 'dark' : 'light'

    return (
        <Bar position="static" >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Typography component="span" variant="h5" sx={{ 'min-width': '9rem' }}>{title}</Typography>
                </div>
                <div>
                    Light mode:
                    <IconButton aria-label="delete" color='light' className="left" onClick={() => setScreenMode(getColorMode)}>
                        {isLigthMode ? <MoonIconComponent /> : <SunIconComponent />}
                    </IconButton>
                </div>
            </Toolbar>
        </Bar>
    )
}

export default AppBar