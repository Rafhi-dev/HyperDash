import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import NotFound from "../pages/404";
import CardView from "../components/ui/card/CardView";
import AlertView from "../components/ui/alerts/AlertView";
import BtnView from "../components/ui/button/BtnView";

// Impor array rute
import { layoutRoutes } from "./layout.route";
import { chartRoutes } from "./chartUi.route";

const HyRoute = ({ getCollapased, getSetCollapsed }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      {/* Rute yang menggunakan MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout
            isSidebarCollapsed={getCollapased}
            setIsSidebarCollapsed={getSetCollapsed}
          />
        }
      >
        {/* Render rute dari file terpisah */}
        {layoutRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {chartRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Rute lainnya */}
        <Route path="/cards" element={<CardView />} />
        <Route path="/alerts" element={<AlertView />} />
        <Route path="/btn" element={<BtnView />} />
      </Route>

      {/* Rute Not Found harus di akhir */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default HyRoute;
