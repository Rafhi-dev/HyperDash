import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainContent from "./components/layout/contents/MainContent";

import MainLayout from "./components/layout/MainLayout";
import LoginForm from "./pages/LoginForm";
import NotFound from "./pages/404";
import MyLinePrev from "./components/charts/MyLinePrev";
import MyBarPrev from "./components/charts/MyBarPrev";
import MyPiePrev from "./components/charts/MyPiePrev";
import Dashboard1 from "./components/layout/contents/Dashboard1";

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
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/line-chart" element={<MyLinePrev/>} />
          <Route path="/bar-chart" element={<MyBarPrev/>} />
          <Route path="/pie-chart" element={<MyPiePrev />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
