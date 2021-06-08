import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Contact from '../../Contact/Contact';
import Doctors from '../../Doctors/Doctors';
import FeaturedService from '../../FeaturedSevice/FeaturedService';
import Footer from '../../Footer/Footer';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';

import Testimonials from '../Testimonials/Testimonials';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;