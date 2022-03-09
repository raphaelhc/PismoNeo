import React from 'react'
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import PageContent from 'components/PageContent'
import Box from '@mui/material/Box';

const About = () => {
    return (
        <div className='container'>
            <AppBar title='Near Earth Object'></AppBar>
            <PageBar pageName={'Sobre o projeto'} >
            </PageBar>
            <PageContent>
                <Box>
                    sdfsdfsdf
                </Box>
            </PageContent>
        </div >
    )
}

export default About