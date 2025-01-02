import React from "react";
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
    const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
    const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });
    

    return (
        <div ref={firstRef} id="contact" className={`container-fluid py-5 ${firstInView ? 'animate__animated animate__fadeInUp' : ''}`} >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">
                                Request A Quote
                            </h5>
                            <h1 className="mb-0">
                                Need A Free Quote? Please Feel Free to Contact Us
                            </h1>
                        </div>
                        <div className="row gx-3">
                            <div ref={secondRef} className={`col-sm-6 ${secondInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.2s" }}>
                                <h5 className="mb-4">
                                    <i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours
                                </h5>
                            </div>
                            <div ref={thirdRef} className={`col-sm-6 ${thirdInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.4s" }}>
                                <h5 className="mb-4">
                                    <i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support
                                </h5>
                            </div>
                        </div>
                        <p className="mb-4">
                            Ready to take your business to the next level with a stunning website or mobile app? We’re here to help! Whether you have a detailed project in mind or just a rough idea, we’d love to hear from you. Contact us today to get a free, no-obligation quote.
                        </p>

                        <p className="mb-4">
                            Don’t wait to transform your online presence. Contact us now to get started on your project and receive your free quote. We’re excited to work with you and help your business succeed.
                        </p>
                        <div ref={fourthRef} className={`d-flex align-items-center mt-2 ${fourthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.6s" }}>
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+91 8979226642</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div ref={fifthRef} className={`contact-form rounded h-100 d-flex align-items-center p-5 ${fifthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.9s" }}>
                            <form action="https://formspree.io/f/mrbzygjj" method="POST">
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="Your Name"
                                            style={{ height: "55px" }}
                                            name="name"
                                            required

                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            className="form-control bg-light border-0"
                                            placeholder="Your Email"
                                            style={{ height: "55px" }}
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="number"
                                            className="form-control bg-light border-0"
                                            placeholder="Your mobile number with country code"
                                            style={{ height: "55px" }}
                                            name="number"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <select name="service" className="form-select bg-light border-0" style={{ height: "55px" }}>
                                            <option value="" disabled selected>Select A Service</option>
                                            <option value="Website">Website</option>
                                            <option value="Portfolio Website">Portfolio Website</option>
                                            <option value="E-Commerce">E-Commerce</option>
                                            <option value="Business Website">Business Website</option>
                                            <option value="Blog Website">Blog Website</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control bg-light border-0" rows="3" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">
                                            Request A Quote
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;