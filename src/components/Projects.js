import React from "react";
import "../assets/styles/style.css";
import sports from "../assets/img/sports.png";
import veggi from "../assets/img/veggies.png";
import { useInView } from 'react-intersection-observer';
import niotek from "../assets/img/niotek.png";
import cbt from "../assets/img/cbt.png";


const Projects = () => {
    const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
    const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
    const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });

    return (
        <div className="container projects  ">
            <h1 ref={firstRef} className={` h3 fw-bold text-center mb-5 text-primary ${firstInView ? 'animate__animated animate__fadeInUp' : ''}`}>Our Previous work "Projects" </h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col mb-5">
                        <div ref={secondRef} className={`card rounded bg-light ${secondInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.3s" }}>
                            <img src={niotek} alt="" />
                            <div className="card-body ">
                                <h2 className="card-title h4 fw-semibold  mb-3">Niotek</h2>
                                <a href="https://niotek.in" className="btn pricing button btn-outline-light"
                                    target="_blank" rel="noopener noreferrer">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div ref={thirdRef} className={`card rounded bg-light ${thirdInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.3s" }}>
                            <img src={cbt} alt="" />
                            <div className="card-body ">
                                <h2 className="card-title h4 fw-semibold  mb-3">CBT</h2>
                                <a href="https://creativitybeyondthoughts.com" className="btn pricing button btn-outline-light"
                                    target="_blank" rel="noopener noreferrer">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div ref={fourthRef} className={`card rounded bg-light ${fourthInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.3s" }}>
                            <img src={sports} alt="" />
                            <div className="card-body ">
                                <h2 className="card-title h4 fw-semibold  mb-3">Sportnerve</h2>
                                <a href="https://dainty-gelato-b56a78.netlify.app" className="btn pricing button btn-outline-light"
                                    target="_blank" rel="noopener noreferrer">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div ref={fifthRef} className={`card rounded bg-light ${fifthInView ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: "0.6s" }}>
                            <img src={veggi} alt="" />
                            <div className="card-body ">
                                <h2 className="card-title h4 fw-semibold  mb-3">Veggie express</h2>
                                <a href="https://cerulean-chebakia-0d436c.netlify.app/" className="btn pricing button btn-outline-light"
                                    target="_blank" rel="noopener noreferrer">Live
                                    Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;