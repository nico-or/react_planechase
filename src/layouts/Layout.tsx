import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
