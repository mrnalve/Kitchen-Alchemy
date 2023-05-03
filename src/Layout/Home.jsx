import React from 'react';
import Banner from '../Components/Banner/Banner';
import ChefSection from '../Components/ChefSection/ChefSection';
import Events from '../Components/Events/Events';
import Testimonial from '../Components/Testimonial/Testimonial';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Events></Events>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Main;