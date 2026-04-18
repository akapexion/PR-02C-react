import axios from "axios";
import React, { useEffect, useState } from "react";

const APIDevelopment = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  //   console.log("Outside the UseEffect");

  const fetchProducts = async () => {
    const api_base = "https://dummyjson.com/products";
    try {
      const response = await axios.get(api_base);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log("My useEffect Block...");
    fetchProducts();
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
};

export default APIDevelopment;
