import React, { useContext } from "react";
import { myData, myData1 } from "./MyContext";

const Custom = () => {
  const abc = useContext(myData);
  const abc1 = useContext(myData1);

  return (
    <>
      <div>Custom Component</div>

      <p>{abc}</p>
      <p>{abc1}</p>
    </>
  );
};

export default Custom;
