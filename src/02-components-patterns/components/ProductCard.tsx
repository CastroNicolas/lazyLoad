import { useProducts } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContexProps, Props } from "../interfaces/interfaces";

export const ProductContex = createContext({} as ProductContexProps);
const { Provider } = ProductContex;

export const ProductCard = ({ children, product }: Props) => {
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
        <div className={styles.productCard}>{children}</div>
      </div>
    </Provider>
  );
};
