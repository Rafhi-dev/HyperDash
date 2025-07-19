import FormView from "../components/form/FormView";
import AccV from "../components/ui/accordion/AccV";
import AlertView from "../components/ui/alerts/AlertView";
import BreadcrumbV from "../components/ui/breadcrumb/BreadcrumbV";
import BtnView from "../components/ui/button/BtnView";
import CardView from "../components/ui/card/CardView";
import DropdownView from "../components/ui/dropdown/Dropdown.view";
import Tabv from "../components/ui/tabs/tabv";

export const compUi = [
  { path: "alert", element: <AlertView /> },
  { path: "cards", element: <CardView /> },
  { path: "btn", element: <BtnView /> },
  { path: "layout-form", element: <FormView /> },
  { path: "tab", element: <Tabv /> },
  { path: "accordion", element: <AccV /> },
  { path: "dropdown", element: <DropdownView /> },
  { path: "breadcrumb", element: <BreadcrumbV /> },
];
