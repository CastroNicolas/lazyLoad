import { useProducts } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { Product, ProductContexProps } from "../interfaces/interfaces";

export const ProductContex = createContext({} as ProductContexProps);
const { Provider } = ProductContex;
export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}
export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, handleIncremnetby } = useProducts();
  return (
    <Provider
      value={{
        counter,
        handleIncremnetby,
        product,
      }}
    >
      <div>
        <div className={`${styles.productCard} ${className}`} style={style}>
          {children}
        </div>
      </div>
    </Provider>
  );
};
