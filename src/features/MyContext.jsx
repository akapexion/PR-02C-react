import React, { createContext } from "react";
import Custom from "./Custom";

export const myData = createContext();
export const myData1 = createContext();

const MyContext = () => {
  const name = "Ali";
  const age = 22;
  return (
    <>
      <myData.Provider value={name}>
        <myData1.Provider value={age}>
          <Custom />
        </myData1.Provider>
      </myData.Provider>
    </>
  );
};

export default MyContext;
