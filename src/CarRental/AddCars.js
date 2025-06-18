import axios from "axios";
import React, { useState } from "react";

const AddCars = () => {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [price_per_day, setPrice_Per_Day] = useState("");
  const[image,setImage]=useState("");
  const[transmission,setTransmission]=useState("");
  const[seats,setSeats]=useState("");
  const[features,setFeatures]=useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://carrental-server-2s67.onrender.com/cars", { name, description, model, category,price_per_day,image,transmission,seats,features})
      .then((res) => alert("You Have Posted Car Data"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 ">
    <div className="row justify-content-center">
      <div className="col-lg-8">
      <h3 className="mb-5 text-uppercase text-center" style={{fontSize: "30px", color: "darkblue", fontWeight:"600"}}>AddCars</h3>
      <form onSubmit={submitHandler} style={{boxShadow:" 1px 2px 20px  #3B0008", padding:"30px" }}>
        <input
          type="name"
          className="form-control mb-3"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="description"
          className="form-control mb-3"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="model"
          className="form-control mb-3"
          placeholder="Enter Model"
          onChange={(e) => setModel(e.target.value)}
        />
       <input
          type="category"
          className="form-control mb-3"
          placeholder="Enter Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="price_per_day"
          className="form-control mb-3"
          placeholder="Enter Price"
          onChange={(e) => setPrice_Per_Day(e.target.value)}
        />
        <input
          type="transmission"
          className="form-control mb-3"
          placeholder="Enter Transmission"
          onChange={(e) => setTransmission(e.target.value)}
        />
        <input
          type="seats"
          className="form-control mb-3"
          placeholder="Enter Seats"
          onChange={(e) => setSeats(e.target.value)}
        />
        <input
          type="features"
          className="form-control mb-3"
          placeholder="Enter Features"
          onChange={(e) => setFeatures(e.target.value)}
        />
        <input
          type="image_url"
          className="form-control mb-3"
          placeholder="Enter image Url"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className=" form-control mb-3  " style={{
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

export default AddCars;