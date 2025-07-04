import {
  faGithub,
  faUikit,
  faUnity,
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
    items: [
      {
        icon: faGauge,
        label: "Dashboard",
        subItems: [{ label: "Dashboard 1", loc: "/" }],
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
          {
            label: "Chart.js",
            subItems: [
              { label: "Line Chart", loc: "line" },
              { label: "Bar Chart", loc: "bar-chart" },
              { label: "Pie Chart", loc: "pie-chart" },
            ],
          },
          { label: "ApexChart", badge: "soon" },
        ],
      },
      {
        icon: faWpforms,
        label: "Form",
        subItems: [{ label: "Form Element", loc: "layout-form" }],
      },
      {
        icon: faTable,
        label: "Tables",
        subItems: [
          { label: "Basic Tables", loc: "basic-tables" },
          { label: "Data Tables", loc: "data-tables" },
        ],
      },
      {
        icon: faUikit,
        label: "UI Elements",
        subItems: [
          { label: "Alerts", loc: "alert" },
          { label: "Buttons", loc: "btn" },
          { label: "Cards", loc: "cards" },
          { label: "Modals", loc: "modals" },
          { label: "Accordion", loc: "accordion" },
          { label: "Dropdowns", loc: "#" },
          { label: "Tabs", loc: "tab" },
          { label: "Switch", loc: "#" },
        ],
      },
      {
        icon: faUnity,
        label: "Animation",
        subItems: [{ label: "Particle", loc: "#" }],
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
