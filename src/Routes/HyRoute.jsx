import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Dashboard1 from "../components/layout/contents/Dashboard1";
import MyPiePrev from "../components/charts/MyPiePrev";
import MyBarPrev from "../components/charts/MyBarPrev";
import MyLinePrev from "../components/charts/MyLinePrev";
import LoginForm from "../pages/LoginForm";
import NotFound from "../pages/404";


const HyRoute = ({getCollapased, getSetCollapsed}) => {
    return (
     <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          element={
            <MainLayout
              isSidebarCollapsed={getCollapased}
              setIsSidebarCollapsed={getSetCollapsed}
            />
          }
        >
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/line-chart" element={<MyLinePrev/>} />
          <Route path="/bar-chart" element={<MyBarPrev/>} />
          <Route path="/pie-chart" element={<MyPiePrev />} />
        </Route>
      </Routes>
    );
}

export default HyRoute;