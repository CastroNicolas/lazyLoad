import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContex } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtoms = ({ className, style }: Props) => {
  const { counter, handleIncremnetby } = useContext(ProductContex);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
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
