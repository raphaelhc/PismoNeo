import React from 'react'
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import PageContent from 'components/PageContent'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const About = () => {
    return (
        <div className='container'>
            <AppBar title='Near Earth Object'></AppBar>
            <PageBar pageName={'Sobre o projeto'} >
            </PageBar>
            <PageContent>
                <Box>
                    <Typography component="span">
                        Esta aplicação é um desafio proposto pela <Link href="https://pismo.io/pt/" underline="none">Pismo</Link> e realizada por
                    </Typography>
                    <Typography component="span" color='primary'>
                        <Link href="https://www.linkedin.com/in/raphael-hernando-2ba81032/" underline="none" > Raphael Hernando.</Link>
                    </Typography>

                    <Typography>
                        O seu objetivo é criar uma aplicação para consumir a <Link color="inherit" href="https://api.nasa.gov/neo/?api_key=DEMO_KEY">API NeoWs</Link> que é disponibilizado pela NASA que permite listar os objetos próximos à Terra em um intervalo de datas.
                    </Typography>
                    <Typography>
                        Esta aplicação foi desenvolvida em React a partir do <Link color="inherit" href="https://create-react-app.dev/">create-react-app</Link> e seus componentes foram baseados na biblioteca Material-ui. Foram escritos testes unitários apenas para os compontentes.
                    </Typography>
                    <Typography>
                        Para acessar a funcionalidade em que eu me propus a desenvolver, por favor, clique no menu na barra superior da aplicação e em seguida na opção Lista por intervalo.
                    </Typography>
                    <Typography>
                        Obrigado!
                    </Typography>
                </Box>
            </PageContent>
        </div >
    )
}

export default About