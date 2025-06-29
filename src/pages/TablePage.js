import React from "react";

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

function TablePage() {
  return (
    <div className="page">
      <h2>User Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Name</th><th>Age</th></tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}><td>{item.name}</td><td>{item.age}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
