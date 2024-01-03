import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import Hoc from "./Hoc";
import './users.css'

const Users = () => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("data"))
      ? JSON.parse(localStorage.getItem("data"))
      : []
  );

  const [isOpen, setIsOpen] = useState(false);
  const showForm = () => {
    setIsOpen(true);
  };

  const formSubmit = (formData) => {
    setTableData([...tableData, formData]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tableData));
  }, [tableData]);

  return (
    <div>
      {isOpen && <Form onSubmit={formSubmit} />}
      <button className="adduser" onClick={showForm}>Adduser</button>
      <Table data={tableData} />
    </div>
  );
};
export default Hoc(Users)