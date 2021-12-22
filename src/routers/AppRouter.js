import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {Navbar} from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <MarvelScreen /> } />
                <Route path="/login" element={ <LoginScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}
