import React from "react";
import "../assets/styles/style.css";
import about from "../assets/nav pick/about.jpg"
import { useInView } from 'react-intersection-observer';
import feature from "../assets/nav pick/feature.jpg"
// import { Helmet } from "react-helmet";

const About = () => {
    const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
    const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
    const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });
    const { ref: sixthRef, inView: sixthInView } = useInView({ triggerOnce: true });

    return (
        <div>

            {/* <Helmet>
                <title>Dotvate - About Us </title>
                <meta name="description" content="Learn more about Dotvate, the best IT solution provider. We offer top-notch web development services tailored to your business needs." />
                <meta name="keywords" content="Dotvate, web development, IT solutions, business growth" />
                <link rel="canonical" href="https://www.dotvate.com" />
            </Helmet> */}
            <div
                ref={firstRef}
                id="about"
                class={`container-fluid py-5   ${firstInView ? 'animate__animated animate__fadeInUp' : ''}`}
                style={{ animationDelay: "0.1s" }}

            >

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="section-title position-relative pb-3 mb-5">

                                <h5 className=" text-primary text-uppercase">about us</h5>
                                <h1 className="mb-0"> The Best IT Solution</h1>

                            </div>

                            <p className="mb-4">
                                we are dedicated to providing top-notch web development services to help businesses thrive online. With passion for innovation, we deliver solutions that meet your unique needs and exceed your expectations.
                            </p>

                            <p className="mb-4">Choosing us means partnering with a dedicated team that is committed to your success. We go above and beyond to deliver web development solutions that not only meet but exceed your expectations. Let us help you create a powerful online presence that drives growth and sets your business apart from the competition. Contact us today to get started!</p>


                            <div className="row g-0 mb-3">
                                <div ref={secondRef} className={`col-sm-6 ${secondInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.3s" }}>
                                    <h5 className="mb-3">
                                        <i className="fa fa-check text-primary me-3"></i>Attractive Layout
                                    </h5>
                                    <h5 className="mb-3">
                                        <i className="fa fa-check text-primary me-3"></i>Professional Staff
                                    </h5>
                                </div>
                                <div ref={thirdRef} className={`col-sm-6 ${thirdInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.4s" }}>
                                    <h5 className="mb-3">
                                        <i className="fa fa-check text-primary me-3"></i>24/7 Support
                                    </h5>
                                    <h5 className="mb-3">
                                        <i className="fa fa-check text-primary me-3"></i>Fair Prices
                                    </h5>
                                </div>
                            </div>
                            <div ref={fourthRef} className={`d-flex align-items-center mb-4 ${fourthInView ? 'animate__animated animate__fadeIn' : ''}`} style={{ animationDelay: "0.5s" }}>
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded"

                                    style={{ width: "60px", height: "60px" }}
                                >
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+91 8979226642</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="position-relative h-100">
                                <img src={about}
                                    alt="about"
                                    className="position-absolute w-100 h-100 rounded animate__animated animate__zoomIn"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div ref={firstRef} className={`container-fluid py-5   ${firstInView ? 'animate__animated animate__fadeUp' : ''}`} style={{ animationDelay: "0.1s" }}>
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="row g-5">
                                    <div ref={secondRef} className={`col-12   ${secondInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.2s" }}>
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                                            <i className="fa fa-cubes text-white"></i>
                                        </div>
                                        <h4>Comprehensive Services</h4>
                                        <p className="mb-0">
                                            We offer a wide range of web development services, from initial design and development to ongoing maintenance and updates. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to handle it all.
                                        </p>
                                    </div>
                                    <div ref={thirdRef} className={`col-12   ${thirdInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.6s" }}>
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                                            <i className="fa fa-award text-white"></i>
                                        </div>
                                        <h4>Innovative Solutions</h4>
                                        <p className="mb-0">
                                            We leverage the latest technologies and industry best practices to create innovative solutions that help your business stand out. Our focus on creativity and functionality ensures that your website is not only visually appealing but also highly effective.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div ref={fourthRef} className={`col-lg-4 ${fourthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ minHeight: "350px", animationDelay: "0.9s" }}>
                                <div className="position-relative h-100">


                                    <img src={feature} className="position-absolute w-100 h-100 rounded  " alt="feature" style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row g-5">
                                    <div ref={fifthRef} className={`col-12   ${fifthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.4s" }}>
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                                            <i className="fa fa-users-cog text-white"></i>
                                        </div>
                                        <h4>Proven Track Record</h4>
                                        <p className="mb-0">
                                            With a portfolio of successful projects and satisfied clients, we have a proven track record of delivering exceptional results. Our clients' testimonials and repeat business speak volumes about our commitment to quality and client satisfaction.
                                        </p>
                                    </div>
                                    <div ref={sixthRef} className={`col-12   ${sixthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.8s" }}>
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                                            <i className="fa fa-phone-alt text-white"></i>
                                        </div>
                                        <h4>Post-Launch Support</h4>
                                        <p className="mb-0">
                                            Our commitment to your success doesn’t end with the launch of your website. We provide ongoing support and maintenance to ensure your site remains up-to-date, secure, and performing optimally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About