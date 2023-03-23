import React from "react";
import NotFound from "../pages/NotFound";
import ReplacementDashboard from "../pages/ReplacementDashboard";
import StoresDashboard from "../pages/StoresDashboard";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      <Route exact path="/stores" element={<StoresDashboard />} />
      <Route exact path="/replacement" element={<ReplacementDashboard />} />
    </Routes>
  );
};

export default Dashboard;
