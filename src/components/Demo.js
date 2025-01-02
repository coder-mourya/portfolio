import React from "react";
import inhance from "../assets/img/inhance.png";
import clinic from "../assets/img/clinic.png";
import resto1 from "../assets/img/resto1.png";
import resto2 from "../assets/img/resto2.png";
import { useInView } from 'react-intersection-observer';

const Demo = () => {
  const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
  const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
  const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
  const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
  const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });


  return (
    <div className="container demo">
      <h1 ref={firstRef} className={` h3 fw-bold text-center mb-5 text-primary ${firstInView ? 'animate__animated animate__fadeInUp' : ''}`} >Demo's</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
          <div ref={secondRef} className={`col mb-5 ${secondInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.2s" }}>
            <div className="card h-100">
              <img src={inhance} alt="" className="card-img-top" />
              <div className="card-body ">
                <h2 className="card-title h4 fw-semibold">Services</h2>
                <a href="https://heroic-donut-452d16.netlify.app/" className="btn pricing button btn-outline-light mt-2"
                  target="_blank" rel="noopener noreferrer">Live
                  Preview</a>
              </div>
            </div>
          </div>

          <div ref={thirdRef} className={`col mb-5 ${thirdInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.4s" }}>
            <div className="card h-100">
              <img src={clinic} alt="" className="card-img-top" />
              <div className="card-body ">
                <h2 className="card-title h4 fw-semibold">Clinic</h2>
                <a href="https://ornate-fox-f87ac6.netlify.app/" className="btn pricing button btn-outline-light mt-2"
                  target="_blank" rel="noopener noreferrer">Live
                  Preview</a>
              </div>
            </div>
          </div>

          <div ref={fourthRef} className={`col mb-5 ${fourthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.6s" }} >
            <div className="card h-100">
              <img src={resto1} alt="" className="card-img-top" />
              <div className="card-body ">
                <h2 className="card-title h4 fw-semibold">Restaurant</h2>
                <a href="https://courageous-cascaron-ae35ab.netlify.app/"
                  className="btn pricing button btn-outline-light mt-2" target="_blank" rel="noopener noreferrer">Live Preview</a>
              </div>
            </div>
          </div>

          <div ref={fifthRef} className={`col mb-5 ${fifthInView ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: "0.8s" }}>
            <div className="card h-100">
              <img src={resto2} alt="" className="card-img-top" />
              <div className="card-body ">
                <h2 className="card-title h4 fw-semibold">Traditional Restaurant</h2>
                <a href="https://ornate-kashata-e4d3ca.netlify.app/" className="btn pricing button btn-outline-light mt-2"
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

export default Demo;