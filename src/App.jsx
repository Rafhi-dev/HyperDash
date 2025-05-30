import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainContent from "./components/MainContent";

import MainLayout from "./layouts/MainLayout";
import LoginForm from "./components/LoginForm";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Load sidebar state from localStorage
  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
    setIsSidebarCollapsed(collapsed);
  }, []);

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          element={
            <MainLayout
              isSidebarCollapsed={isSidebarCollapsed}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
            />
          }
        >
          <Route path="/" element={<MainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
