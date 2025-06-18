import axios from "axios";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://carrental-server-2s67.onrender.com/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="car-container">
        <h3
          className="d-flex align-items-center justify-content-center h-100 fs-2 fw-bold"
          style={{ color: "whitesmoke" }}
        >
          Drive Your Journey, Not Just a Car.
        </h3>
      </div>
      <div className="container p-5">
        <h3
          className="text-capitalize text-center fw-bold"
          style={{ color: "darkblue" }}
        >
          Choose from wide range of vehicles tailored to your needs
        </h3>
        <p className="mt-3" style={{color:"black", fontSize:"16px",fontWeight:"500"}}>
          At RENT4U, we take pride in offering a diverse fleet of
          well-maintained vehicles to suit every travel requirement. Whether
          you're looking for a compact car for a city ride, a spacious SUV for a
          family trip, or a luxury sedan for a special occasion, we have the
          perfect vehicle for you. Explore our options and book the car that
          fits your journey best.
        </p>
        <h3 className="text-center fw-bold mb-5">
          {cars.length} + Cars <i className="bi bi-car-front-fill"></i>
        </h3>

        <div className="row">
          {cars.map((car, index) => {
            return (
              <div key={index} className="col-md-4 mb-3">
                <div
                  className="card  h-100"
                  style={{ border: "1px solid #3B0008" }}
                >
                  <img src={car.image} className="w-100 h-100" alt="error" />
                  <div className="card-body">
                    <h5
                      className="card-title w-100 mb-3 p-2 fs-6 text-uppercase fw-bold "
                      style={{
                        background: "#C04040",
                        textAlign: "center",
                        color: "snow",
                      }}
                    >
                      Name: <span> {car.name}</span>{" "}
                    </h5>

                    <p className="card-text">
                      <span className="fw-bold">Model:</span> {car.model}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Category:</span> {car.category}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Price Per Day:</span>{" "}
                      {car.price_per_day}
                    </p>
                    <NavLink to={`/carDetails/${car._id}`}>
                      <button
                        className="   "
                        style={{
                          color: "antiquewhite",
                          background: "rgb(174, 35, 35) ",
                          padding: "10px 20px",
                          border: "1px solid transparent",
                          borderRadius: "20px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                         Book Now <i className="bi bi-car-front-fill"></i>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cars;
