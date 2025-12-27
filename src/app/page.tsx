import HomePage from "@/components/templates/HomePage";
import { ProductsType } from "@/types/products.type";

interface HomeProps {
  searchParams: Promise<{ category: string }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const category = (await searchParams).category ?? "";

  const url = category
    ? `http://localhost:3000/api/products?category=${category}`
    : "http://localhost:3000/api/products";

  const response = await fetch(url, { cache: "force-cache" });
  const products = (await response.json()) as ProductsType[];

  return <HomePage products={products} />;
};

export default Home;
