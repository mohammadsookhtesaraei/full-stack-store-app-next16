
import HeroSection from "@/components/modules/HeroSection";
import { ProductsType } from "@/types/products.type";

interface HomePageProps {
    products:ProductsType[]
}


const HomePage = ({products}:HomePageProps) => {
  return (
    <>
    <HeroSection/>

    </>
  )
}

export default HomePage