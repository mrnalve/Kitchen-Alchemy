import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Components/Banner/Banner';
import ChefSection from '../Components/ChefSection/ChefSection';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Footer></Footer>
        </div>
    );
};

export default Main;