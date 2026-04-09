import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Home</p>

      {/* <a href="/about">Go to About Screen</a> */}

      <Link to="/about">Go to About Screen</Link>
    </>
  );
};

export default Home;
