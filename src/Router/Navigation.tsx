import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../assets/react.svg";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo React" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/Shopping"
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="Shopping" element={<ShoppingPage />} />
          <Route path="Users" element={<h1>Users</h1>} />
          <Route path="About" element={<h1>About</h1>} />
          <Route path="/*" element={<Navigate to="/Shopping" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
