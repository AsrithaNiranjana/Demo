import React from "react";
import Hoc from "./Hoc";

const Dashboard = () => {
  const data = [
    { url: "https://source.unsplash.com/user/c_v_r/1900x800", id: 1, designation: "Doctor",name:"Riya" },
    { url: "https://picsum.photos/200/300", id: 2, designation: "Engineer" ,name:"Riya"},
    { url: "https://picsum.photos/200/300", id: 3, designation: "Pilot",name:"Riya" },
    { url: "https://images.unsplash.com/photo-1597429554033-86c7f86d0cbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDI4NTQ5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900 ", id: 4, designation: "Software Developer" ,name:"Riya"},
    { url: "https://via.placeholder.com/350x150", id: 5, designation: "Teacher",name:"Riya" },
    { url: "https://picsum.photos/200/300", id: 6, designation: "Plumber" ,name:"Riya"},
    { url: "https://via.placeholder.com/350x150", id: 7, designation: "CA" ,name:"Riya"},
    { url: "https://picsum.photos/200/300", id: 8, designation: "Doctor" ,name:"Riya"},
    { url: "https://via.placeholder.com/350x150", id: 9, designation: "Teacher" ,name:"Riya"},
    { url: "https://picsum.photos/200/300", id: 10, designation: "Housewife",name:"Riya" },
    { url: "https://via.placeholder.com/350x150", id: 12, designation: "Engineer" ,name:"Riya"},
    { url: "https://picsum.photos/200/300", id: 11, designation: "Politican",name:"Riya" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
      {data.map((item) => {
        return (
          <div>
            <img
              className="w-full sm:w-64 h-64 rounded mx-auto"
              src={item.url}
              alt={item.name}
              key={item.id}
            />
            <div><h6 className="felx ">Name:{item.name}</h6>
            <h6>Designation:{item.designation}</h6></div>
          </div>
        );
      })}
    </div>
  );
};
export default Hoc(Dashboard);
