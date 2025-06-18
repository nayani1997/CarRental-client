import axios from "axios";
import React, { useState } from "react";

const AddServices = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
 
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://carrental-server-2s67.onrender.com/services", { name, description})
      .then((res) => {
        alert("You Have Posted Car-Service Data ");
        setName("");
        setDescription("");
      } )
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-8 ">

        
      <h3 className="mb-5 text-center text-uppercase" style={{fontSize: "30px", color: "darkblue", fontWeight:"600"}}>AddServices</h3>
      <form onSubmit={submitHandler}  style={{boxShadow:" 1px 2px 20px  #3B0008", padding:"30px" }}>
        <input
          type="name"
          value={name}
          className="form-control mb-3"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="description"
          value={description}
          className="form-control mb-3"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <button type="submit" className=" form-control mb-3 " style={{
                color: "antiquewhite",
                background: "rgb(174, 35, 35) ",
                padding: "10px 20px",
                border: "1px solid transparent",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
              }}>
          Submit
        </button>
      </form>
    </div>
    </div>
      </div>
  );
};

export default AddServices;
