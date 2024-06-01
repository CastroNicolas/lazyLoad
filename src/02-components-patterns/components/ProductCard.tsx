import { useProducts } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
}
interface Product {
  id: number;
  title: string;
  img?: string;
}
export const ProductCard = ({ product }: Props) => {
  const { counter, handleIncremnetby } = useProducts();
  return (
    <div>
      <div className={styles.productCard}>
        <img
          className={styles.productImg}
          src={product.img ? product.img : noImage}
          alt="noImage"
        />
        <span className={styles.productDescription}> {product.title} </span>
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
      </div>
    </div>
  );
};
