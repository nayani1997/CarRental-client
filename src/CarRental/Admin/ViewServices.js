import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewServices = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
  const deleteServices = (servicesId) => {
    axios
      .delete(`https://carrental-server-2s67.onrender.com/services/${servicesId}`)
      .then(() => alert("Your Selected Car-Service Was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (servicesId) => {
    axios
      .get(`https://carrental-server-2s67.onrender.com/services/${servicesId}`)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateServices = (e) => {
    e.preventDefault();
    axios
      .put(`https://carrental-server-2s67.onrender.com/services/${_id}`, { _id, name, description })
      .then((res) => alert("Service Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-1">
       
      <h2 className="my-5 text-uppercase text-center" style={{fontSize: "30px", color: "darkblue", fontWeight:"600"}}>ViewServices</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((services, index) => {
            return (
              <tr key={index}>
                <td>{services.name}</td>
                <td>{services.description}</td>

                <td>
                  <tr>
                  <button
                      onClick={() => getOneRecord(services._id)}
                      data-bs-target="#update"
                      data-bs-toggle="modal"
                      className="btn btn-primary me-3 mb-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteServices(services._id)}
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
              <h5>Update Services</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateServices}>
                <input
                  type="name"
                  className="form-control mb-3"
                  value={name}
                  placeholder="Enter Service Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="description"
                  className="form-control mb-3"
                  value={description}
                  placeholder="Enter Service Description"
                  onChange={(e) => setDescription(e.target.value)}
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

export default ViewServices;
