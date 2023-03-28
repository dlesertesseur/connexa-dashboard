import React from "react";
import ActivityDashboard from "../pages/ActivityDashboard";
import StoresDashboard from "../pages/StoresDashboard";
import DetailTable from "../pages/DetailTable";
import { Navigate, Route, Routes } from "react-router-dom";
import NotExhibited from "../pages/NotExhibited";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/stores" replace />} />
      <Route exact path="/stores" element={<StoresDashboard />} />
      <Route exact path="/stores/detail" element={<DetailTable />} />
      <Route exact path="/activity" element={<ActivityDashboard />} />
      <Route exact path="/notExhibited" element={<NotExhibited />} />
    </Routes>
  );
};

export default Dashboard;
