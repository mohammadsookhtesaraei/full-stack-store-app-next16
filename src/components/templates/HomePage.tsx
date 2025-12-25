
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
    <ProductsList products={products}/>

    </>
  )
}

export default HomePage