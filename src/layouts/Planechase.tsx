import { createContext } from "react";
import { Outlet } from "react-router-dom";

function PlanechaseLayout() {
  const PlanechaseContext = createContext(null);
  return (
    <PlanechaseContext.Provider value={null}>
      <Outlet />
    </PlanechaseContext.Provider>
  );
}

export default PlanechaseLayout;
