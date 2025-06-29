import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import CalendarPage from "./pages/CalendarPage";
import Kanban from "./pages/Kanban";
import TablePage from "./pages/TablePage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/table" element={<TablePage />} />
    </Routes>
  );
}

export default RoutesComponent;
