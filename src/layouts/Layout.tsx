import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
