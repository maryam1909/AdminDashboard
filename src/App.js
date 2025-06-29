import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import RoutesComponent from "./RoutesComponent";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom"; // ✅ wrap everything
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Topbar />
            <RoutesComponent />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
