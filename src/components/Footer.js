import React from "react";


const Footer = () => {




    return (
        <div>
            <div className="container-fluid  text-light mt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ backgroundColor: "#091E3E" }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>

                                    <div className="d-flex mb-2">
                                        <i className="fa-regular fa-envelope text-primary mt-2 me-2"></i>
                                        <p className="mb-0">dotvate@gmail.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa-solid fa-phone text-primary me-2 mt-1"></i>
                                        <p className="mb-0">+91 8979226642</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="https://x.com/AjayKum92794890?t=yRGAfkT00rNaKLoI5mvcPA&s=09" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="https://www.facebook.com/Dotvate/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="https://www.linkedin.com/in/ajay-kumar-shakya-2393bb218/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square" href="https://www.instagram.com/ajay_mouryavanshi14?igsh=MTduNTBnbnBlMWt5dw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{ backgroundColor: "#061429" }}>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                                <p className="mb-0">
                                    &copy;
                                    <a className="text-white border-bottom" href="https://dotvate.in/">dotvate.in</a> 
                                    All Rights Reserved. Designed by dotvate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </div>
    )
}

export default Footer