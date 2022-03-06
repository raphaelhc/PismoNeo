import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import routes from '../../routes'
import { AppProvider } from './AppContext'
import Home from 'containers/Home'

const Main = () => (
    <AppProvider>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </AppProvider>
)

export default Main