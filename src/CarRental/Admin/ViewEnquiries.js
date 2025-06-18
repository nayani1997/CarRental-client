import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewEnquiries = () => {
  const [enquiries, setEnq] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/enquiries`)
      .then((res) => setEnq(res.data))
      .catch((err) => console.log(err));
  });
  const deleteEnq = (enqId) => {
    axios
      .delete(`https://carrental-server-2s67.onrender.com/enquiries/${enqId}`)
      .then(() => alert("Enq Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (enqId) => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/enquiries/${enqId}`)
      .then((res) => {
        setName(res.data.name);
        setMobile(res.data.mobile);
        setEmail(res.data.email);
        setMessage(res.data.message);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://carrental-server-2s67.onrender.com/enquiries/${_id}`, { _id, name, mobile, email, message })
      .then((res) => alert("Enq Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5">
      <h2 className="mb-5 text-uppercase text-center" style={{fontSize: "30px", color: "darkblue", fontWeight:"600"}}>ViewEnquiries</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Message</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq, index) => {
            return (
              <tr key={index}>
                <td>{enq.name}</td>
                <td>{enq.mobile}</td>
                <td>{enq.email}</td>
                <td>{enq.message}</td>
                <td>
                  <tr>
                    <button
                      onClick={() => getOneRecord(enq._id)}
                      data-bs-target="#update"
                      data-bs-toggle="modal"
                      className="btn btn-primary me-3 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEnq(enq._id)}
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
              <h5>Update Enquiries</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={updateEnq}>
            <input
              type="name"
              className="form-control mb-3"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="mobile"
              className="form-control mb-3"
              value={mobile}
              placeholder="Enter Your Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="message"
              className="form-control mb-3"
              placeholder="Enter Your Message Here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

export default ViewEnquiries;
