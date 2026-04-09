import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <p>About</p>

      {/* <a href="/">Go to Home Screen</a> */}

      <Link to="/">Go to Home Screen</Link>
    </>
  );
};

export default About;
