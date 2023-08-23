import React from "react";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Error from "./component/Error";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restro/:resId" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
