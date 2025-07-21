import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import NotFound from "../pages/404";

import { layoutRoutes } from "./layout.route";
import { chartRoutes } from "./chartUi.route";
import { compUi } from "./compUi.route";
import TableView from "../components/table/TableView";
import ModalsV from "../components/ui/modals/ModalsV";
import BlankPage from "../pages/Blank";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="blank" element={<BlankPage />} />

        {/* Route layout*/}
        {layoutRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Route Chart*/}
        {chartRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Route Component*/}
        {compUi.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="basic-tables" element={<TableView />} />
        <Route path="modals" element={<ModalsV />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
