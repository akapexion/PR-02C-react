import React from "react";

const Custom = ({empInfo}) => {
  return (
    <>
      <div>Custom Component</div>
      <p>This is a component created by myself</p>
      <p>Employee Name is {empInfo.EmpName}</p>
      <p>Employee Designation is {empInfo.EmpDesignation}</p>
    </>
  );
};

export default Custom;
