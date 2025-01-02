import React from "react";
import "../assets/styles/style.css";
import NextJs from "../assets/img/nextjs.png";
import ReactJs from "../assets/img/react.png";
import NodeJs from "../assets/img/node.png";
import Tailwind from "../assets/img/screenshot_361.png";
import python from "../assets/img/python.jpg";
import java from "../assets/img/java.png";
import aws from "../assets/img/aws.jpg";
import versal from "../assets/img/vercel1868.jpg";
// import { Helmet } from "react-helmet";

const Tech = () => {
  return (
    <div className="container ">
      {/* <Helmet>
        <title>Dotvate - Tech Stack</title>
        <meta name="description" content="Tech Stack - Dotvate Web Solutions" />
        <meta name="keywords" content="Tech Stack, Web Development, Dotvate , We are flexible in choosing tech stack, but our favorite tech stacks are below" />
      </Helmet> */}
      <div className="text-center mb-5 container" style={{ maxWidth: "650px" }}>
        <h1 className="h3 font-bold  text-primary">Our TechStack</h1>
        <h2 className=" mt-2">
          We are flexible in choosing tech stack, but our favorite tech stacks are below
        </h2>
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">

        <div className="tech-card text-center  p-3 rounded">

          <img src={NextJs} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Next.js</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={ReactJs} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">React</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">
          <img src={Tailwind} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Tailwind</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={python} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Python</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={NodeJs} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Node.js</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={java} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Java</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={aws} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">AWS</p>
        </div>


        <div className="tech-card text-center  p-3 rounded">

          <img src={versal} alt="" className="img-fluid mx-auto" />
          <p className="mt-2  ">Vercel</p>
        </div>

      </div>
    </div>
  )
}

export default Tech;