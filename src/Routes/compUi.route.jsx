import FormView from "../components/form/FormView";
import AccV from "../components/ui/accordion/AccV";
import AlertView from "../components/ui/alerts/AlertView";
import BtnView from "../components/ui/button/BtnView";
import CardView from "../components/ui/card/CardView";
import Tabv from "../components/ui/tabs/tabv";

export const compUi = [
  { path: "alert", element: <AlertView /> },
  { path: "cards", element: <CardView /> },
  { path: "btn", element: <BtnView /> },
  { path: "layout-form", element: <FormView /> },
  { path: "tab", element: <Tabv /> },
  { path: "accordion", element: <AccV /> },
];
