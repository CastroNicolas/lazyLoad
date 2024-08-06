import { Props as productCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtoms";

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
  ({ children, product }: productCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttoms: (Props: ProductButtonsProps) => JSX.Element;
}
