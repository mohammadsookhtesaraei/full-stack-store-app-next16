import ProductsPage from "@/components/templates/ProductsPage";
import { ProductsType } from "@/types/products.type";

interface ProductsProps {
  searchParams: Promise<{ category?: string }>;
}

const Products = async ({ searchParams }: ProductsProps) => {
  const category = (await searchParams).category ?? "";

  const url = category
    ? `http://localhost:3000/api/products?category=${category}`
    : "http://localhost:3000/api/products";

  const response = await fetch(url, { cache: "no-store" });
  const products = (await response.json()) as ProductsType[];
  return (
    <div>
      <ProductsPage products={products} category={category} />
    </div>
  );
};

export default Products;
