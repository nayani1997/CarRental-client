import React, { useContext, useEffect, useMemo, useState } from "react";
import Welcome from "./Welcome";

import ViewCars from "./ViewCars";
import AddServices from "../AddServices";
import ViewServices from "./ViewServices";
import ViewEnquiries from "./ViewEnquiries";
import AddCars from "../AddCars";
import { loginStatus } from "../../App";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [view, setView] = useState("");

 const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://carrental-server-2s67.onrender.com/dashboard",{
      headers : {
        "x-token" : token
      }
    })
    .then((res) => {
      setUser(res.data)
    })
    .catch((err) => {
console.log(err);
    })
  })
  const dashboardView =  useMemo(()=>{
   
      if (view === "") {
        return <Welcome />;
      } else if (view === "addCar") {
        return <AddCars />;
      } else if (view === "viewCar") {
        return <ViewCars />;
      } else if (view === "addService") {
        return <AddServices />;
      } else if (view === "viewService") {
        return <ViewServices />;
      } else if (view === "viewEnquiries") {
        return <ViewEnquiries />;
      } else {
        return <h1>Invalid View</h1>;
      }
   
  },[view])
  if (token === "") {
    navigate("/admin")
  }
  else{
    return (
      <div className="container-fluid">
        <div className="row page-container ">
          <aside className="col-lg-3 ">
            <h1 style={{color:"black",fontSize:"25px",fontWeight:"600"}}>Welcome {user.name}</h1>
            <h3 className="mb-4 " style={{color:"darkblue", cursor:"pointer", fontSize:"30px", fontWeight:"600"}} onClick={() => setView("")}>Admin Dashboard</h3>
            <button onClick={() => setView("addCar")}>Add Car</button>
            <button onClick={() => setView("viewCar")}>View Car</button>
            <button onClick={() => setView("addService")}>Add Service</button>
            <button onClick={() => setView("viewService")}>View Service</button>
            <button onClick={() => setView("viewEnquiries")}>
              View Enquiries
            </button>
            <button onClick={() => setToken("")}>Logout</button>
          </aside>
          <div className="col-lg-9  overflow-x-auto">{dashboardView}</div>
        </div>
      </div>
    );
  } 
  }

export default Dashboard;
