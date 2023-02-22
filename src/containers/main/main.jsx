import React from 'react';
import { useTheme } from '../../context/theme-context.js';
import { MainContainer } from './main';
import { Route, Routes } from 'react-router-dom';
import CountriesDashboard from '../countries-dashboard/index.jsx';
import CountryDashboard from '../country-dashboard/index.jsx';

export default function Main() {
    const lightTheme = useTheme();

    return (
        <MainContainer lightTheme={lightTheme}>
            <Routes>
                <Route
                    path='/'
                    element={<CountriesDashboard />}
                />
                <Route
                    path='/:name'
                    element={<CountryDashboard />}
                />
            </Routes>
        </MainContainer>
    );
}
