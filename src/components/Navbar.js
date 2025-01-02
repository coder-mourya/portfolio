import React, { useEffect } from "react";
import "../assets/styles/style.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/nav pick/logoPic.png"
import pick1 from "../assets/nav pick/carousel-1.jpg"
import pick2 from "../assets/nav pick/carousel-2.jpg"
import { Link as ScrollLink } from "react-scroll";




const Nav = () => {
    // const Navigate = useNavigate();
    // const handleNavigate = () => {
    //     Navigate("/contact");
    // }


    const [isSticky, setIsSticky] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])


    return (

        <div className="container-fluid position-relative p-0">
            <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${isSticky ? "sticky-top" : ""}`}>
                {/* <Link className="navbar-brand p-0 d-flex justify-content-center align-items-center "  to="/">
                    <img src={logo} alt="logo" style={{ width: "50px" }} />
                    Dotevate
                </Link> */}

                <a href="/"
                    className="navbar-brand p-0 d-flex justify-content-center align-items-center "
                >
                    <img src={logo} alt="logo" style={{ width: "50px" }} />
                    <h1 className="m-0" style={{ fontSize: "25px" }}>Dotevate</h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">
                            Home
                        </a>

                        <ScrollLink to="about" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-item nav-link">
                            About
                        </ScrollLink>
                        <ScrollLink to="service" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-item nav-link">
                            Services
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-item nav-link">
                            Contact
                        </ScrollLink>
                    </div>
                   
                </div>
            </nav>

            <div
                id="header-carousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={pick1} alt="Image1" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h1 className="display-6 text-white mb-md-4 animate__animated animate__zoomIn">
                                    Elevate Your Online Presence with Professional Website
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={pick2} alt="Image2" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h1 className="display-3 text-white mb-md-4   animate__animated animate__zoomIn">
                                    Creative & Innovative Digital Solution
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Nav;