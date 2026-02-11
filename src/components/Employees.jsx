import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {
  var title = "EMPLOYEE APP";

  var compnay = {
    name: "TCS",
    year: 2026,
  };

  var employees = [
    { id: 101, name: "sia", age: 20 },
    { id: 102, name: "julie", age: 21 },
    { id: 103, name: "krishna", age: 22 },
    { id: 104, name: "shenal", age: 23 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      {/* //title = {title}   key = {value}  */}
      <EmployeeList title={title} company={compnay} employees = {employees}></EmployeeList>
    </div>
  );
};