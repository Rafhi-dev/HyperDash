import BarChartV from "../components/charts/Bar/BarChartV";
import PieChartV from "../components/charts/Pie/PieChartV";
import LineChartV from "../components/charts/Line/LineChartV";

export const chartRoutes = [
  { path: "/line", element: <LineChartV /> },
  { path: "/bar-chart", element: <BarChartV /> },
  { path: "/pie-chart", element: <PieChartV /> },
];
