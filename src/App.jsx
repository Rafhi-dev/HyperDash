import { useState, useEffect } from "react";
import HyRoute from "./Routes/HyRoute";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const storedSidebarState = localStorage.getItem("sidebarCollapsed");
    if (storedSidebarState !== null) {
      setIsSidebarCollapsed(JSON.parse(storedSidebarState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  return (
    <HyRoute
      getCollapased={isSidebarCollapsed}
      getSetCollapsed={setIsSidebarCollapsed}
    />
  );
}

export default App;
