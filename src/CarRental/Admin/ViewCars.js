import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [price_per_day, setPrice_Per_Day] = useState("");
  const [image, setImage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [seats, setSeats] = useState("");
  const [features, setFeatures] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  });
  const deleteCars = (carsId) => {
    axios
      .delete(`https://carrental-server-2s67.onrender.com/cars/${carsId}`)
      .then(() => alert("Your Selected Car Was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (carsId) => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/cars/${carsId}`)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setModel(res.data.model);
        setCategory(res.data.category);
        setPrice_Per_Day(res.data.price_per_day);
        setImage(res.data.image);
        setTransmission(res.data.transmission);
        setSeats(res.data.seats);
        setFeatures(res.data.features);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateCar = (e) => {
    e.preventDefault();
    axios
      .put(`https://carrental-server-2s67.onrender.com/cars/${_id}`, {
        _id,
        name,
        description,
        model,
        category,
        price_per_day,
        image,
        transmission,
        seats,
        features,
      })
      .then((res) => alert("Car Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-1">
      <h2 className="my-5 text-uppercase text-center" style={{fontSize: "30px", color: "darkblue", fontWeight:"600"}}>ViewCars</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Model</th>
            <th>Category</th>
            <th>Price_per_day</th>
            <th>Image</th>
            <th>Transmission</th>
            <th>Seats</th>
            <th>Features</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((cars, index) => {
            return (
              <tr key={index}>
                <td>{cars.name}</td>
                <td>{cars.description}</td>
                <td>{cars.model}</td>
                <td>{cars.category}</td>
                <td>{cars.price_per_day}</td>
                <td><img src={cars.image} alt="car" width="100" height="60" /></td>
                
                <td>{cars.transmission}</td>
                <td>{cars.seats}</td>
                <td>{cars.features}</td>
                <td>
                  <tr>
                    <button
                      onClick={() => getOneRecord(cars._id)}
                      data-bs-target="#update"
                      data-bs-toggle="modal"
                      className="btn btn-primary me-3 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCars(cars._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </tr>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Cars</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateCar}>
                <input
                  type="name"
                  className="form-control mb-3"
                  value={name}
                  placeholder="Enter Car Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="description"
                  className="form-control mb-3"
                  value={description}
                  placeholder="Enter Car Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="model"
                  className="form-control mb-3"
                  placeholder="Enter Car Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
                <input
                  type="category"
                  className="form-control mb-3"
                  placeholder="Enter Car Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="price_per_day"
                  className="form-control mb-3"
                  placeholder="Enter Car Price_per_day"
                  value={price_per_day}
                  onChange={(e) => setPrice_Per_Day(e.target.value)}
                />
                <input
                  type="image_url"
                  className="form-control mb-3"
                  placeholder="Enter Car Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                  type="transmission"
                  className="form-control mb-3"
                  placeholder="Enter Transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                />
                <input
                  type="seats"
                  className="form-control mb-3"
                  placeholder="Enter Seats"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                />
                <input
                  type="features"
                  className="form-control mb-3"
                  placeholder="Enter Features"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                />
                <button
                  type="submit"
                  className=" form-control mb-3 btn btn-primary "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCars;
