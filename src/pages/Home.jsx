import React from "react";
import { Link } from "react-router-dom";
import Custom from "../features/Custom";
import MyContext from "../features/MyContext";

const Home = () => {
  return (
    <>
      <p className="bg-red-600">Home</p>

      {/* <a href="/about">Go to About Screen</a> */}

      <Link to="/about">Go to About Screen</Link>

      <MyContext />
    </>
  );
};

export default Home;
