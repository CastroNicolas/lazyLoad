// import { LazyPage1 } from "../01-lazyLoad/components/LazyPage1";
// import { LazyPage2 } from "../01-lazyLoad/components/LazyPage2";
// import { LazyPage3 } from "../01-lazyLoad/components/LazyPage3";

import { LazyExoticComponent, lazy } from "react";

const Lazy1 = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPage1" */ "../01-lazyLoad/components/LazyPage1"
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPage2" */ "../01-lazyLoad/components/LazyPage2"
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPage3" */ "../01-lazyLoad/components/LazyPage3"
    )
);

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/LazyPage1",
    path: "LazyPage1",
    Component: Lazy1,
    name: "LazyPage1",
  },
  {
    to: "/LazyPage2",
    path: "LazyPage2",
    Component: Lazy2,
    name: "LazyPage2",
  },
  {
    to: "/LazyPage3",
    path: "LazyPage3",
    Component: Lazy3,
    name: "LazyPage3",
  },
];
