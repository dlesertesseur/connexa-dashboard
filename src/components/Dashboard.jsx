import React from "react";
import ActivityDashboard from "../pages/ActivityDashboard";
import StoresDashboard from "../pages/StoresDashboard";
import DetailTable from "../pages/DetailTable";
import NotExhibited from "../pages/NotExhibited";
import QuadrantDetail from "../pages/QuadrantDetail";
import WorkOrderDetail from "../pages/WorkOrderDetail";
import { Navigate, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/stores" replace />} />
      <Route exact path="/stores" element={<StoresDashboard />} />
      <Route exact path="/stores/detail" element={<DetailTable />} />
      <Route exact path="/notExhibited" element={<NotExhibited />} />
      <Route exact path="/activity" element={<ActivityDashboard />} />
      <Route exact path="/activity/quadrantDetail" element={<QuadrantDetail />} />
      <Route exact path="/activity/quadrantDetail/workOrderDetail" element={<WorkOrderDetail />} />
    </Routes>
  );
};

export default Dashboard;
