import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtoms } from "./ProductButtoms";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardsHOCprops } from "../interfaces/interfaces";

export { ProductButtoms } from "./ProductButtoms";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardsHOCprops = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttoms: ProductButtoms,
});

export default ProductCard;
