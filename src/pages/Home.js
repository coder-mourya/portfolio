import React from 'react';
import About from '../components/About.js';
import Work from '../components/Work.js';
import Tech from '../components/Tech.js';
import Projects from '../components/Projects.js';
import Demo from '../components/Demo.js';
import Pricing from '../components/Pricing.js';
import Contact from '../components/Contact.js';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div >
             <Helmet>
                <title>Dotvate Web Solutions</title>
                <meta name="description" content="Dotvate offers custom IT solutions, including website creation, mobile app development, SEO services, and more. Explore our services and contact us for a quote." />
                <meta name="keywords" content="IT Solutions, Website Creation, Mobile App Development, SEO Services, Custom Websites, Tech Solutions" />
                <meta property="og:title" content="Dotvate | Custom IT Solutions" />
                <meta property="og:description" content="Explore Dotvate's custom IT solutions tailored to meet your business needs. Contact us for personalized IT services and solutions." />
                <meta property="og:image" content="URL_to_your_image" />
                <meta property="og:url" content="https://dotvate.in/" />
            </Helmet>
            <div className='position-relative'>
                <section className="about-me ">
                    <About />
                </section>

                <section className='services px-2 '>
                    <Work />
                </section>
            </div>

            <section className='techs py-5'>
                <Tech />
            </section>

            <section className='projects  text-white py-5'>
                <Projects />
            </section>

            <section>
                <Demo />
            </section>

            <section className='pricing py-5' id='pricing'>
                <Pricing />
            </section>

            <section>
                <Contact />
            </section>

        </div>
    );
};

export default Home;
