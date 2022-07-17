import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataFaq from '../assets/fake-data/data-faq';
import dataPartners from '../assets/fake-data/data-partners';
import dataRoadMap from '../assets/fake-data/data-roadmap';
import dataTestimonials from '../assets/fake-data/data-testimonials';
import About from '../components/layouts/About';
import Action from '../components/layouts/Action';
import FAQ from '../components/layouts/FAQ';
import Partners from '../components/layouts/Partners';
import RoadMap from '../components/layouts/RoadMap';
import Testimonial from '../components/layouts/Testimonial';
import SliderOne from '../components/slider/SliderOne';
import Infomation from '../components/layouts/Infomation';

const Home01 = () => {
    return (
        <div>
            <Header />
            <SliderOne />
            <About />
            <Infomation />
            <RoadMap data={dataRoadMap} />
            <Partners data={dataPartners} />
            <Testimonial data={dataTestimonials} />
            <FAQ data={dataFaq} />
            <Action />
            <Footer />
        </div>
    );
}

export default Home01;