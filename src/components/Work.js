import React from "react";
import "../assets/styles/style.css";
// import layer from "../assets/img/Layer 2.svg";
// import figma from "../assets/img/figma.svg";
// import search from "../assets/img/search.svg";
import { Link as ScrollLink } from "react-scroll";
import { useInView } from 'react-intersection-observer';
// import { Helmet } from "react-helmet";

const Work = () => {
  const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
  const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
  const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
  const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
  const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });
  const { ref: sixthRef, inView: sixthInView } = useInView({ triggerOnce: true });
  const { ref: seventhRef, inView: seventhInView } = useInView({ triggerOnce: true });

  return (
    <div id="service" className={`container-fluid  `} >
      <div className="container pb-5">
        <div ref={firstRef} className={`section-title text-center position-relative pb-3 mb-5 mx-auto ${firstInView ? 'animate__animated  animate_fadeIn' : ''}`} style={{ maxWidth: "600px" }}>
          {/* {firstInView && (
            <Helmet>
              <title>Dotvate - Our Services </title>
              <meta name="description" content="Explore our range of IT services tailored for your business success." />
              <meta name="keywords" content="Our Services, IT Solutions, Web Development, Dotvate" />
            </Helmet>
          )} */}

          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
        </div>
        <div className="row g-5">
          <div ref={secondRef} className={`col-lg-4 col-md-6 ${secondInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.3s" }}>

            {/* {secondInView && (
              <Helmet>
                <title>Dotvate - Website Creation</title>
                <meta name="description" content="We create custom websites tailored to your specific needs, ensuring a unique and engaging user experience." />
                <meta name="keywords" content="Website Creation, Custom Websites, Web Development" />
              </Helmet>
            )} */}

            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="mb-3">Website Creation</h4>
              <p className="m-0">
                We create custom websites tailored to your specific needs, ensuring a unique and engaging user experience.
              </p>


              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-lg btn-primary rounded">
                <i class="fa-solid fa-arrow-right"></i>
              </ScrollLink>
            </div>
          </div>

          <div ref={thirdRef} className={`col-lg-4 col-md-6 ${thirdInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.6s" }}>
           {/* {thirdInView && (
              <Helmet>
              <title>Dotvate - Landing Pages </title>
              <meta name="description" content="We design and develop landing pages that engage your visitors and encourage them to take action." />
              <meta name="keywords" content="Landing Pages, Custom Landing Pages, Web Development" />
  
              </Helmet>
           )} */}
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="mb-3">Landing Pages</h4>
              <p className="m-0">
                High-converting landing pages designed to capture leads and drive sales. We focus on creating compelling, targeted pages that engage your visitors and encourage them to take action.
              </p>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-lg btn-primary rounded">
                <i class="fa-solid fa-arrow-right"></i>
              </ScrollLink>
            </div>
          </div>

          <div ref={fourthRef} className={`col-lg-4 col-md-6 ${fourthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.9s" }}>
            {/* {fourthInView && (
              <Helmet>
              <title>Dotvate - Website Recreation </title>
              <meta name="description" content="We recreate or refresh your existing websites to ensure a seamless transition and modernization." />
              <meta name="keywords" content="Website Recreation, Custom Website, Web Development" />
              </Helmet>
            )} */}
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="mb-3">Website Recreation</h4>
              <p className="m-0">
                "Revamp or recreate websites with advanced technologies like React.js, enhancing performance, interactivity, and user experience while preserving existing content and functionalities for seamless transition and modernization."
              </p>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-lg btn-primary rounded">
                <i class="fa-solid fa-arrow-right"></i>
              </ScrollLink>
            </div>
          </div>

          <div ref={fifthRef} className={`col-lg-4 col-md-6 ${fifthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.3s" }}>
            {/* {fifthInView && (
              <Helmet>
                <title>Dotvate - SEO </title>
                <meta name="description" content="We optimize your website for search engines to rank higher in search engine results and drive organic traffic, leads, and conversions." />
                <meta name="keywords" content="SEO, Search Engine Optimization, Web Development" />
              </Helmet>
            )} */}
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="mb-3">SEO</h4>
              <p className="m-0">
                "Boost online visibility with comprehensive Search Engine Optimization (SEO) services, optimizing websites to rank higher in search engine results and drive organic traffic, leads, and conversions."
              </p>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-lg btn-primary rounded">
                <i class="fa-solid fa-arrow-right"></i>
              </ScrollLink>
            </div>
          </div>

          <div ref={sixthRef} className={`col-lg-4 col-md-6 ${sixthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.6s" }}>
            {/* {sixthInView && (
              <Helmet>
                <title>Dotvate - Mobile App Development </title>
                <meta name="description" content="We develop custom mobile apps to engage your customers and enhance their mobile experience. We ensure a seamless user experience across devices." />
                <meta name="keywords" content="Mobile App Development, Custom Mobile App, Web Development" />
              </Helmet>
            )} */}
            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center">
              <h4 className="mb-3">Mobile App Development</h4>
              <p className="m-0">
                Custom mobile apps to engage your customers and enhance their mobile experience. We develop apps for both iOS and Android platforms, ensuring a seamless user experience across devices.
              </p>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-lg btn-primary rounded">
                <i class="fa-solid fa-arrow-right"></i>
              </ScrollLink>
            </div>
          </div>

          <div ref={seventhRef} className={`col-lg-4 col-md-6 ${seventhInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.9s" }}>
            {/* {seventhInView && (
              <Helmet>
                <title>Dotvate - Content Writing </title>
                <meta name="description" content="We write engaging content for your website, blog, or social media platforms to engage your audience and drive traffic." />
                <meta name="keywords" content="Content Writing, Web Development, Web Development" />
              </Helmet>
            )} */}
            <div className="position-relative last-item  rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us For Quote</h3>

              <h2 className="text-white mb-0">+91 8979226642</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;