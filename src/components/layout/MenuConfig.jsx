import {
  faGithub,
  faUikit,
  faWpforms,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGauge,
  faTable,
  faChartLine,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarSections = [
  {
    title: "Menu",
    items: [
      {
        icon: faGauge,
        label: "Dashboard",
        subItems: [
          { label: "Dashboard 1", loc: "/" },
          { label: "Ujicoba", loc: "/ujicoba" },
        ],
      },
      {
        icon: faFile,
        label: "Pages",
        subItems: [
          { label: "Login", loc: "/login" },
          { label: "Register", loc: "/register" },
          { label: "Forgot Password", loc: "/forgot-password" },
          { label: "Error 404", loc: "/404" },
          { label: "Blank", loc: "/blank" },
        ],
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        icon: faChartLine,
        label: "Chart",
        subItems: [
          { label: "Line Chart", loc: "/line" },
          { label: "Bar Chart", loc: "/bar-chart" },
          { label: "Pie Chart", loc: "/pie-chart" },
        ],
      },
      {
        icon: faWpforms,
        label: "Form",
        subItems: [
          {
            label: "Form Elements",
            subItems: [
              { label: "Input", loc: "/form-input" },
              { label: "Textarea", loc: "/form-textarea" },
              { label: "Select", loc: "/form-select" },
              { label: "Checkbox", loc: "/form-checkbox" },
              { label: "Radio", loc: "/form-radio" },
              { label: "Switch", loc: "/form-switch" },
            ],
          },
          { label: "Form Layout", loc: "/layout-form" },
        ],
      },
      {
        icon: faTable,
        label: "Tables",
        subItems: [
          { label: "Basic Tables", loc: "/basic-tables" },
          { label: "Data Tables", loc: "/data-tables" },
        ],
      },
      {
        icon: faUikit,
        label: "UI Elements",
        subItems: [
          { label: "Alerts", loc: "/alert" },
          { label: "Buttons", loc: "/btn" },
          { label: "Buttons Group", badge: "soon", loc: "#" },
          { label: "Cards", loc: "/cards" },
          { label: "Modals", loc: "#" },
          { label: "Dropdowns", loc: "#" },
          { label: "Notification", loc: "#" },
          { label: "Popovers", badge: "soon", loc: "#" },
          { label: "Tabs", loc: "#" },
        ],
      },
      // ... item lainnya
    ],
  },
];

export const sidebarFooter = {
  icon: faGithub,
  label: "Follow me on Github",
  loc: "https://github.com/rafhi-dev",
};
