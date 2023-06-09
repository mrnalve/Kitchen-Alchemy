import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;