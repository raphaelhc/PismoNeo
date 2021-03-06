import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { ContainerStyled } from './styles'

const PageContent = ({ children }) => {
    return (
        <ContainerStyled maxWidth="lg">
            {children}
        </ContainerStyled>
    )
}

PageContent.propTypes = {
    children: PropTypes.node.isRequired,
    myRef: PropTypes.object
};

export default memo(PageContent)
