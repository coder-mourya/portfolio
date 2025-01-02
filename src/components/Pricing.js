import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useInView } from 'react-intersection-observer';



const Pricing = () => {

    const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
    const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
    const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });
  
   
   
    return (
        <div className="container">
           
            <h1 ref={firstRef} className={`h3 text-center mb-5  text-primary ${firstInView ? 'animate__animated animate__fadeInUp' : ''}`}>Pricing Options</h1>
            <div className="container">
                <div className="row g-4   ">
                    <div className="col-lg-3 col-md-6 mb-5 ">
                        <div ref={secondRef} className={`pricing-card p-4 rounded h-100 d-flex flex-column  ${secondInView ? 'animate__animated animate__fadeInUp' : ''}`}  style={{ animationDelay: "0.2s" }}>
                            {/* {secondInView && (
                                <Helmet>
                                    <title>Normal Informative website (landing page) - Dotvate Web Solutions</title>
                                    <meta name="description" content="Get a website that is informative and helps you attract more customers to your business." />
                                    <meta name="keywords" content="Normal Informative website (landing page), Web Development, Dotvate" />
                                </Helmet>
                            )} */}
                            <h2 className="">Normal Informative website (landing page)</h2>
                            <p className="font-weight-bold my-3 amount">
                            $499 <span className=" small">/ Starting at</span>
                            </p>
                            <p className="price-text flex-grow-1">
                            Turn your business online with a custom-designed informative website. Starting from $499, we'll create a high-quality landing page tailored to your business. Depending on your needs, additional features and services can be included, with packages ranging up to $999.
                            </p>
                            <div className="mt-auto d-flex justify-content-center">

                                <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-outline-light w-100 pricing-btn">
                                    Start your Journey
                                </ScrollLink>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                        <div ref={thirdRef} className={`pricing-card p-4 rounded h-100 d-flex flex-column  ${thirdInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.4s" }}>
                            {/* {thirdInView && (
                                <Helmet>
                                    <title>Dotvate - Product Development </title>
                                    <meta name="description" content="Get a website that is informative and helps you attract more customers to your business." />
                                    <meta name="keywords" content="Product Development, Web Development, Dotvate" />
                                </Helmet>
                            )} */}
                            <div className="most-populor py-1 px-5 rounded-pill mb-3 align-self-center">
                                <span>Most popular</span>
                            </div>
                            <h2 className="">Product Development</h2>
                            <p className=" my-3 amount">$999 <span className=" small">/ Starting at</span></p>
                            <p className="price-text flex-grow-1 mt-5">The price of the MVP depends on the complexity of your project. Prices range from $999 to $3,000, with guaranteed delivery within the timeline.</p>
                            <div className="mt-auto d-flex justify-content-center">
                                <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-outline-light w-100 pricing-btn">
                                    Start your Journey
                                </ScrollLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                        <div ref={fourthRef} className={`pricing-card p-4 rounded h-100 d-flex flex-column  ${fourthInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.6s" }}>
                           {/* {fourthInView && (
                               
                               <Helmet>
                                    <title>Dotvate - Website Recreation </title>
                                    <meta name="description" content="Get a website that is informative and helps you attract more customers to your business." />
                                    <meta name="keywords" content="Website Recreation, Web Development, Dotvate" />
                                </Helmet>
                                )} */}
                        
                            <h2 className="">Website Recreation</h2>
                            <p className="font-weight-bold my-3 amount">$999 <span className=" small">/ Starting at</span></p>
                            <p className="price-text flex-grow-1">Do you already have product and want to add more capabilities and scale
                                it? Let's have a call to discuss more</p>
                            <div className="mt-auto d-flex justify-content-center">
                                <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-outline-light w-100 pricing-btn">
                                    Start your Journey
                                </ScrollLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                        <div ref={fifthRef} className={`pricing-card p-4 rounded h-100 d-flex flex-column  ${fifthInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.8s" }}>
                            <h2 className="">SEO</h2>
                            <p className="my-3 " style={{ color: "rgb(107 114 128)" }}>Depends on project Complexity and time</p>
                            <p className="price-text flex-grow-1">The price of SEO depends on project complexity and time tacking</p>
                            <div className="mt-auto d-flex justify-content-center">
                                <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="btn btn-outline-light w-100 pricing-btn">
                                    Start your Journey
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing