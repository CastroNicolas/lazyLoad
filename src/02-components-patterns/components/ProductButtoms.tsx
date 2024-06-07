import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContex } from "./ProductCard";

export const ProductButtoms = () => {
  const { counter, handleIncremnetby } = useContext(ProductContex);
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncremnetby(-1)}
      >
        -
      </button>
      <span className={styles.countLabel}>{counter}</span>
      <button
        className={styles.buttonAdd}
        onClick={() => handleIncremnetby(+1)}
      >
        +
      </button>
    </div>
  );
};
