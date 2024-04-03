import React from 'react';
import { Routes, Route } from "react-router-dom";
import AllProjects from './components/AllProjects';
import Portfolio from './components/Portfolio';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="allprojects" element={<AllProjects />} />
        </Routes>
    );
};

export default AppRoutes;