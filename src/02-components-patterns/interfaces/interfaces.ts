import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: number;
  title: string;
  img?: string;
}
export interface ProductContexProps {
  counter: number;
  handleIncremnetby: (value: number) => void;
  product: Product;
}

export interface ProductCardsHOCprops {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttoms: () => JSX.Element;
}
