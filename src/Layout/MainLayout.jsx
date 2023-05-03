import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;