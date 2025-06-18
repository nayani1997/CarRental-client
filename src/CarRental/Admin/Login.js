import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";
import axios from "axios";

const Login = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  //const[login,setLogin] = useContext(loginStatus)
  const [token, setToken] = useContext(loginStatus);
  const changeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);

    axios
      .post(`https://carrental-server-2s67.onrender.com/login`, details)

      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
      })
      .catch((err) =>console.log(err))
  }
  if (token) {
    navigate("/dashboard")
  }
  // const { username, password } = details;
  // if (username === "admin" && password === "admin")
  // {
  //  setLogin(true)
  /*alert("Login Successful");*/
  //   navigate("/dashboard")
  // }
  // else{
  //   alert("Invalid Credentials");
  // }

  return (
    <div className="container p-5">
      <div
        className="col-lg-6  p-5 mx-auto"
        style={{ boxShadow: " 1px 2px 20px  #3B0008" }}
      >
        <h3
          className="text-center fs-3 text-uppercase fw-bold mb-3"
          style={{ color: "darkblue" }}
        >
          Admin Login
        </h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3"
            onChange={changeData}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={changeData}
          />
          <input
            type="Submit"
            className="form-control mb-3"
            style={{
              color: "antiquewhite",
              background: "rgb(174, 35, 35) ",
              padding: "10px 20px",
              border: "1px solid transparent",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
