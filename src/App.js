import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./CarRental/Header";

import Footer from "./CarRental/Footer";
import Routing from "./CarRental/Routing";
import "./CarRental/Style.css";
import "animate.css";

import { createContext, useState } from "react";

export const loginStatus = createContext();

function App() {
 // const [login, setLogin] = useState(false);
 const [token, setToken] = useState("");

  return (
    <div className="App container-fluid p-0">
      <loginStatus.Provider value={[token, setToken]}>
        <Header />
        <Routing />

        <Footer />
      </loginStatus.Provider>
    </div>
  );
}

export default App;
