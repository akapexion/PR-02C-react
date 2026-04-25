import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Custom from "../features/Custom";
import MyContext from "../features/MyContext";
import ThemeSwitcher from "../context/ThemeSwitcher";
import { themeContext } from "../context/ThemeContext";

const Home = () => {

  const { theme } = useContext(themeContext);

  return (
    <>
      <div className={`${theme == "light" ? "bg-white" : "bg-black"}`}>
        <p className="bg-red-600">Home</p>

        {/* <a href="/about">Go to About Screen</a> */}

        <Link to="/about">Go to About Screen</Link>

        <MyContext />


        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Home;
