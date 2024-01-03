import React from "react";
import './Table.css'
const Table =({data})=>{
	return (
        <table className="table">
		<thead>
		  <tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>User Name</th>
			<th>PhoneNumber</th>
			<th>UserType</th>
			<th>Active</th>
			<th>StartDate</th>
			<th>EndDate</th>
		  </tr>
		</thead>
		<tbody>
		  {data.map((item, index) => (
			<tr key={index}>
			  <td>{item.firstName}</td>
			  <td>{item.lastName}</td>
			  <td>{item.userName}</td>
			  <td>{item.phonenumber}</td>
			  <td>{item.selectUser}</td>
			  <td>{item.selected}</td>
			  <td>{item.startdate}</td>
			  <td>{item.enddate}</td>
			</tr>
		  ))}
		</tbody>
	  </table>
	);
};


export default Table;