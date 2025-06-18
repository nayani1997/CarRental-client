import axios from "axios";
import React, { useState } from "react";

const BookNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [carModel, setCarModel] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const carError = document.getElementById("carError");
    const pickupError = document.getElementById("pickupError");
    const dropoffError = document.getElementById("dropoffError");
    const locationError = document.getElementById("locationError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]+$/;

    let isValid = true;

    if (name === "") {
      nameError.textContent = "*Name is required";
      isValid = false;
    } else if (!name.match(alphaExp)) {
      nameError.textContent = "*Only letters allowed";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    if (email === "") {
      emailError.textContent = "*Email is required";
      isValid = false;
    } else if (!email.match(mailExp)) {
      emailError.textContent = "*Invalid email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (mobile === "") {
      mobileError.textContent = "*Mobile number is required";
      isValid = false;
    } else if (!mobile.match(numExp) || mobile.length !== 10) {
      mobileError.textContent = "*Enter a valid 10-digit number";
      isValid = false;
    } else {
      mobileError.textContent = "";
    }

    if (carModel === "") {
      carError.textContent = "*Car model is required";
      isValid = false;
    } else {
      carError.textContent = "";
    }

    if (pickupDate === "") {
      pickupError.textContent = "*Pickup date is required";
      isValid = false;
    } else {
      pickupError.textContent = "";
    }

    if (dropoffDate === "") {
      dropoffError.textContent = "*Drop-off date is required";
      isValid = false;
    } else {
      dropoffError.textContent = "";
    }

    if (location === "") {
      locationError.textContent = "*Location is required";
      isValid = false;
    } else {
      locationError.textContent = "";
    }

    if (isValid) {
      axios
        .post("https://carrental-server-2s67.onrender.com/bookings", {
          name,
          email,
          mobile,
          carModel,
          pickupDate,
          dropoffDate,
          location,
        })
        .then(() => {
          alert("Your booking has been submitted!");
          setName("");
          setEmail("");
          setMobile("");
          setCarModel("");
          setPickupDate("");
          setDropoffDate("");
          setLocation("");
        })
        .catch((err) => {
          console.error(err);
          alert("Error submitting your booking.");
        });
    }
  };

  return (
    <div className="container car-background  col-lg-5 mt-5 my-auto mx-auto p-4">
      <h3 className="text-center fs-3 fw-bold" style={{color:"white"}}>Book Now</h3>
      <p className="text-center fw-bold fs-5 mt-4" style={{color:"brown"}}>Fill out the form to book your rental car.</p>
      <form onSubmit={submitHandler}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
          <span id="nameError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
          <span id="emailError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <label>Mobile Number</label>
          <span id="mobileError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Car Model"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />
          <label>Car Model</label>
          <span id="carError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="datetime-local"
            className="form-control"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <label>Pickup Date & Time</label>
          <span id="pickupError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="datetime-local"
            className="form-control"
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
          />
          <label>Drop-off Date & Time</label>
          <span id="dropoffError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pickup Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label>Pickup Location</label>
          <span id="locationError" style={{ color: "red" }}></span>
        </div>

        <button
              type="submit"
              className="form-control"
              style={{
                color: "antiquewhite",
                background: "rgb(174, 35, 35)",
                padding: "10px 20px",
                border: "1px solid transparent",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Book Now
            </button>
      </form>
    </div>
  );
};

export default BookNow;
