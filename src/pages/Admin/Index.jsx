import React from "react";
import { Route, Routes } from "react-router-dom";
import NavAdmin from "../../components/NavAdmin";
import Home from "./Home";
import UsersMap from "./UsersMap";
import Jobs from "./Jobs";
import Applications from "./Applications";

const Index = () => {
  return (
    <div>
      <NavAdmin />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<UsersMap />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default Index;
