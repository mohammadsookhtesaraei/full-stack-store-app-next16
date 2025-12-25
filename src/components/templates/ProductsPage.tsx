
import { ProductsType } from "@/types/products.type"
import ProductsList from "@/components/modules/ProductsList"
import Container from "@/components/container/Container";

interface ProductsPageProps{
products:ProductsType[];
category:string;
}

const ProductsPage = ({products,category}:ProductsPageProps) => {
  return (
    <div>
        <Container>
           <div className="mt-5">
             <h1 className="capitalize text-3xl font-bold m-8">{category ? `category:${category}` : "allProducts"}</h1>
            <ProductsList products={products}/>
           </div>
        </Container>
    </div>
  )
}

export default ProductsPage