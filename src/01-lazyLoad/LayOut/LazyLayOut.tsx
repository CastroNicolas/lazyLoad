import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import LazyPage1 from "../components/LazyPage1";
import LazyPage2 from "../components/LazyPage2";
import LazyPage3 from "../components/LazyPage3";

export const LazyLayOut = () => {
  return (
    <div>
      <h1>LazyLayOut</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy1"
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy2"
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy3"
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="/*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayOut;
