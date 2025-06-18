import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import seat from "./assets/car-seat.png";
import manual from "./assets/manual-transmission.png";
import BookNowForm from "./BookNow";
const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState("");

  const featuresArray = car.features ? car.features.split(", ") : [];

  useEffect(() => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/cars/${id}`)
      .then((res) => setCar(res.data));
  });
  return (
    <>
      <div className="car-container">
        <h3
          className="d-flex align-items-center justify-content-center h-100 fs-2 fw-bold"
          style={{ color: "whitesmoke" }}
        >
          Your Drive, Defined in Detail.
        </h3>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-7">
            <h2
              style={{ color: "darkblue", fontSize: "30px", fontWeight: "600" }}
            >
              {car.name}
            </h2>
            <img src={car.image} className="w-100" alt="error" />

            <p style={{ textAlign: "justify", color: "black" }}>
              {car.description}
            </p>
            <p className="btn btn-danger me-3">Best In : {car.category}</p>
            <p className="btn btn-success me-3">{car.model}</p>
            <p className="btn btn-primary">
              {car.price_per_day}/- Only Per Day
            </p>
            <h3 className="fw-bold">Features : </h3>
            <ol className="mb-3">
              {featuresArray.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ol>
            <div className="d-flex mt-4 ">
              <img src={seat} className="seat me-2" alt="error" />
              <h5 className=" me-5 fw-bold" style={{ color: "darkblue" }}>
                {car.seats} Seats
              </h5>

              <img src={manual} className="seat me-2" alt="error" />
              <h5 className="fw-bold" style={{ color: "darkblue" }}>
                {car.transmission}
              </h5>
            </div>
            <div>
              <h4 className="fw-bold mb-4 mt-4">
                <i className="bi bi-clipboard-check-fill me-2"></i>
                Quick Car Rental Guidelines : 
              </h4>
              <ul className="list-unstyled" style={{ fontSize: "16px" }}>
                <li className="mb-2">
                  <i className="bi bi-person-badge-fill me-2 text-primary"></i>
                  Bring a valid driver’s license and government-issued ID at
                  pickup.
                </li>
                <li className="mb-2">
                  <i className="bi bi-clock-fill me-2 text-success"></i>
                  Arrive on time and inspect the car before signing the
                  agreement.
                </li>
                <li className="mb-2">
                  <i className="bi bi-fuel-pump-fill me-2 text-warning"></i>
                  Return the car on time, clean, and with the same fuel level.
                </li>
                <li className="mb-2">
                  <i className="bi bi-exclamation-triangle-fill me-2 text-danger"></i>
                  Damage or late returns may result in extra charges.
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2 text-info"></i>
                  Contact support at +91-9856743678 for help or emergencies.
                </li>
              </ul>
            </div>
          </div>
      
            <BookNowForm />
          
        </div>
      </div>
    </>
  );
};

export default CarDetails;
