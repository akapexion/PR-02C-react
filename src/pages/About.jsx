import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../features/Slideshow";

const About = () => {
  return (
    <>

      <Slideshow />

      <p>About</p>

      {/* <a href="/">Go to Home Screen</a> */}

      <Link to="/">Go to Home Screen</Link>
    </>
  );
};

export default About;
