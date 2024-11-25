// Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.

import React, { useMemo, useState } from "react";

function EmployeeSalary() {
  const [data, setData] = useState([
    { name: "ABC", salary: 1000 },
    { name: "XYZ", salary: 1000 },
    { name: "DEF", salary: 1000 },
  ]);

  const averageSalary = useMemo(() => {
    const totalSalary = data.reduce((acc, item) => acc + item.salary, 0);

    return totalSalary / data.length;
  }, [data]);

  const handleUpdate = (index, newsalary) => {
    const updatedData = [...data];
    updatedData[index].salary = newsalary;
    setData(updatedData);
  };

  return (
    <>
      <p>Average Salary: {averageSalary}</p>
      {data.map((employee, index) => (
        <input
          type="number"
          placeholder="New Salary"
          onChange={(e) => handleUpdate(index, parseFloat(e.target.value))}
        />
      ))}
    </>
  );
}
export default EmployeeSalary;
