import axios from "axios";
import React, { useEffect, useState } from "react";

const APIDevelopment = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  //   console.log("Outside the UseEffect");

  const fetchProducts = async () => {
    const api_base = "https://dummyjson.com/products";
    try {
      const response = await axios.get(api_base);
      console.log(response.data.products);
      setData(response.data.products);
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

      <p>Products API Data</p>

      <div className="grid grid-cols-3 place-items-center">
        {data.map((d) => (
          <div className="border border-gray-300 shadow-2xl w-[300px]">
            <div className="banner">
              <img src={d.images} alt="" />
            </div>

            <div className="content">
              <p>{d.title}</p>
              <p>{d.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default APIDevelopment;
