import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";

const LazyLayOut = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyLayOut" */ "../01-lazyLoad/LayOut/LazyLayOut"
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
    to: "/LazyLayOut/",
    path: "/LazyLayOut/*",
    Component: LazyLayOut,
    name: "LazyLayOut",
  },
  {
    to: "/No-Lazy",
    path: "No-Lazy",
    Component: NoLazy,
    name: "LazyPage2",
  },
];
