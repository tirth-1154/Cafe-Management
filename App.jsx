import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./style.css"
import Contact from "./Pages/Contact";
import ProductPage from "./Pages/Product";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProdDetails from "./Pages/ProdDetails";
import Orders from "./Pages/Orders";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/prodDetail/:id" element={<ProdDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
