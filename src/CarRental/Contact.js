import React from "react";
import SendEnquiry from "./SendEnquiry";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h3
          className="d-flex align-items-center justify-content-center h-100 fs-2 fw-bold"
          style={{ color: "whitesmoke" }}
        >
          Contact us for fast support and smooth travel solutions.
        </h3>
      </div>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="card  p-4 w-100 h-100" style={{ border: "1px solid #3B0008" }}>
              <h1 className="text-center fs-2 fw-bold mb-3">Get in Touch with Rent4U</h1>
              <p className="text-center mb-3 ">
                We're here to assist you with all your travel needs. Reach out
                to us anytime!
              </p>
              <h2 className="my-3" style={{color:"maroon", fontSize:"28px",fontWeight:"900",textAlign:"center"}}>Contact Information:</h2>
             
              <div>
                <h4 className="fs-5 fw-bold"><span><i className="bi bi-telephone-fill"></i></span> Phone:</h4>
                <p>
                  Call us at +91-9856743678 for instant bookings or inquiries.
                  Our lines are open 24/7 to serve you better.{" "}
                </p>
              </div>
              <div>
                <h4 className="fs-5 fw-bold"><span><i className="bi bi-envelope-at-fill"></i></span> Email:</h4>
                <p>
                  Drop us an email at info@rent4u.com, and we'll get back to you
                  within 24 hours.
                </p>
              </div>
              <div>
                <h4 className="fs-5 fw-bold"><span><i className="bi bi-geo-alt-fill"></i></span> Address:</h4>
                <p>
                  Rent 4U, 2nd Floor, Orchid Plaza, MG Road, Indiranagar,
                  Bengaluru, Karnataka – 560038
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 contact">
            <div className="card   w-100 h-100" style={{ border: "1px solid #3B0008" }}>
              <SendEnquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
