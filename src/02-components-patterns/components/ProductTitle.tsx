import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContex } from "./ProductCard";
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContex);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
