import axios from "axios";
import React, { useState } from "react";

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const messageError = document.getElementById("messageError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]+$/;
    const mssgExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/; 

    let isValid = true;

    // Name validation
    if (name === "") {
      nameError.textContent = "*Name is required";
      isValid = false;
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = "";
      } else {
        nameError.textContent = "*Name must contain only letters";
        isValid = false;
      }
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "*Please Enter Email Address";
      isValid = false;
    } else {
      if (email.match(mailExp)) {
        emailError.textContent = "";
      } else {
        emailError.textContent = "*Please Enter Valid Email ID";
        isValid = false;
      }
    }

    // Mobile number validation
    if (mobile === "") {
      mobileError.textContent = "*Please Enter Mobile Number";
      isValid = false;
    } else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10) {
          mobileError.textContent = "";
        } else {
          mobileError.textContent = "*Mobile Number should be 10 digits";
          isValid = false;
        }
      } else {
        mobileError.textContent = "*Mobile Number should be Only Numbers";
        isValid = false;
      }
    }

    // Message validation
    if (message === "") {
      messageError.textContent = "*Please Enter Message";
      isValid = false;
    } else {
      if (message.match(mssgExp)) {
        messageError.textContent = "";
      } else {
        messageError.textContent = "*Message contains invalid characters";
        isValid = false;
      }
    }

    if (isValid) {
      axios
        .post("https://carrental-server-2s67.onrender.com/enquiries", { name, mobile, email, message })
        .then(() => {
          alert("Your Enquiry Sent");
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.error(err);
          alert("There was an error sending your enquiry.");
        });
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div>
          <h3 className="text-center fs-3 fw-bold">Inquiry Form</h3>
          <p className="text-center mt-4">Use the form below to send us your queries or feedback.</p>
          <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
              <input
                type="text"
                value={name}
                className="form-control"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Your Name</label>
              <span id="nameError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                value={mobile}
                className="form-control"
                placeholder="Enter Your Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label>Enter Your Mobile Number</label>
              <span id="mobileError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-3">
              <input
                name="email"
                value={email}
                className="form-control"
                placeholder="Enter Your Email Id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Enter Your Email Id</label>
              <span id="emailError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-3">
              <textarea
                value={message}
                rows={5}
                className="form-control"
                placeholder="Enter Your Message Here...."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label>Enter Your Message Here....</label>
              <span id="messageError" style={{ color: "red" }}></span>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEnquiry;
