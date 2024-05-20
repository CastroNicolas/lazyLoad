import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPage1 } from "../01-lazyLoad/components/LazyPage1";
import { LazyPage3 } from "../01-lazyLoad/components/LazyPage3";
import { LazyPage2 } from "../01-lazyLoad/components/LazyPage2";
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
                to="/LazyPage1"
              >
                LazyPage1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/LazyPage2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/LazyPage3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="LazyPage1" element={<LazyPage1 />} />
          <Route path="LazyPage2" element={<LazyPage2 />} />
          <Route path="LazyPage3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
