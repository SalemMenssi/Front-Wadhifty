import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Contact from "./Contact";

const Index = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
