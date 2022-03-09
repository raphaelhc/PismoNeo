import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { BoxStyled, GridStyled } from './styles'

const GridComponent = ({ children }) => {
    const myRef = React.createRef();

    return (
        <BoxStyled>
            <GridStyled
                ref={myRef}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                {children}
            </GridStyled>
        </BoxStyled>

    )
}

GridComponent.propTypes = {
    children: PropTypes.node
};

export default memo(GridComponent)
