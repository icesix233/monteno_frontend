import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataFaq from '../assets/fake-data/data-faq';
import dataPartners from '../assets/fake-data/data-partners';
import dataPortfolio from '../assets/fake-data/data-portfolio';
import dataRoadMap from '../assets/fake-data/data-roadmap';
import dataTeam from '../assets/fake-data/data-team';
import dataTestimonials from '../assets/fake-data/data-testimonials';
import About from '../components/layouts/About';
import Action from '../components/layouts/Action';
import FAQ from '../components/layouts/FAQ';
import Partners from '../components/layouts/Partners';
import Portfolio from '../components/layouts/Portfolio';
import RoadMap from '../components/layouts/RoadMap';
import Team from '../components/layouts/Team';
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
            <Portfolio data={dataPortfolio} />
            <RoadMap data={dataRoadMap} />
            <Team data={dataTeam} />
            <Partners data={dataPartners} />
            <Testimonial data={dataTestimonials} />
            <FAQ data={dataFaq} />
            <Action />
            <Footer />
        </div>
    );
}

export default Home01;