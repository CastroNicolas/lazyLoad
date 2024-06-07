import { ProductButtoms, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtoms />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hola Mundo"} />
          <ProductCard.Buttoms />
        </ProductCard>
      </div>
    </div>
  );
};
