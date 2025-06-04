import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainContent from "./components/layout/contents/MainContent";

import MainLayout from "./components/layout/MainLayout";
import LoginForm from "./pages/LoginForm";
import NotFound from "./pages/404";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
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
