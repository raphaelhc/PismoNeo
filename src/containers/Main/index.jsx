import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppProvider from './AppContext'
import { LoadingProvider } from './LoadingContext'
import ListByRange from 'containers/ListByRange'
import About from 'containers/About'
import CssBaseline from '@mui/material/CssBaseline';

const Main = () => (
    <LoadingProvider>
        <AppProvider>
            <Fragment>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<About />}></Route>
                    <Route path="/lista-por-intervalo" element={<ListByRange />}></Route>
                </Routes>
            </Fragment>
        </AppProvider>
    </LoadingProvider>
)

export default Main