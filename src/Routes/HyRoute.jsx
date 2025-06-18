import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import NotFound from "../pages/404";
import { layoutRoutes } from "./layout.route";
import { chartRoutes } from "./chartUi.route";
import { compUi } from "./compUi.route";
import TableView from "../components/table/TableView";

const HyRoute = ({ getCollapased, getSetCollapsed }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route
        path="/"
        element={
          <MainLayout
            isSidebarCollapsed={getCollapased}
            setIsSidebarCollapsed={getSetCollapsed}
          />
        }
      >
        {layoutRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {chartRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {compUi.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="/basic-tables" element={<TableView />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default HyRoute;
