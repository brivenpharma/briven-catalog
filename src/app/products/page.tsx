import { ProductsView } from "briven-ui";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  return <ProductsView products={products} categories={categories} />;
}
