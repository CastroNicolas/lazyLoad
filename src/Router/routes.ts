import { LazyPage1 } from "../01-lazyLoad/components/LazyPage1";
interface Route {
  to: string;
  path: string;
  element: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/LazyPage1",
    path: "/LazyPage1",
    element: LazyPage1,
    name: "LazyPage1",
  },
  {
    to: "/LazyPage2",
    path: "/LazyPage2",
    element: LazyPage1,
    name: "LazyPage2",
  },
  {
    to: "/LazyPage3",
    path: "/LazyPage3",
    element: LazyPage1,
    name: "LazyPage3",
  },
];
