
import Container from "@/components/container/Container";
import HeroSection from "@/components/modules/HeroSection";
import ProductsList from "@/components/modules/ProductsList";
import { ProductsType } from "@/types/products.type";

interface HomePageProps {
    products:ProductsType[]
}


const HomePage = ({products}:HomePageProps) => {
  return (
    <>
    <HeroSection/>
     <Container>
      <h1 className="text-bold capitalize text-3xl">all products</h1>
     </Container>
    <ProductsList products={products}/>

    </>
  )
}

export default HomePage