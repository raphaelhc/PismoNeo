import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { default as Bar } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as SunIconComponent } from 'assets/sun-warm.svg';
import { ReactComponent as MoonIconComponent } from 'assets/moon-black.svg';
import { useTheme } from 'containers/Main/ThemeContext'
import Typography from '@mui/material/Typography';
import { ToolbarStyled, BoxStyled } from './styles'
import { themeModeArray } from 'common/theme'
import Menu from 'components/Menu'

const AppBar = ({ title }) => {
    const { screenMode, setScreenMode } = useTheme();
    const isLigthMode = screenMode === themeModeArray[0]
    const getColorMode = isLigthMode ? themeModeArray[1] : themeModeArray[0]

    return (
        <Bar position="relative" role="BarTopLevelElement">
            <ToolbarStyled>
                <BoxStyled sx={{ display: 'flex', 'alignItems': 'center' }}>
                    <Menu></Menu>
                    <Typography role="heading" component="div" variant="h5" sx={{ ml: 1, 'minWidth': '9rem' }}>{title}</Typography>
                </BoxStyled>
                <div>
                    Light mode:
                    <IconButton role="action" aria-label="delete" color={themeModeArray[0]} className="left" onClick={() => setScreenMode(getColorMode)}>
                        {isLigthMode ? <MoonIconComponent /> : <SunIconComponent />}
                    </IconButton>
                </div>
            </ToolbarStyled>
        </Bar>
    )
}

AppBar.propTypes = {
    title: PropTypes.string
};

export default memo(AppBar)