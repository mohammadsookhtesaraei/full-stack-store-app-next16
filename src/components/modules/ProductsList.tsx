import Container from "@/components/container/Container";
import CardProducts from "@/components/elements/CardProducts";
import { ProductsType } from "@/types/products.type";

interface ProductsListProps {
    products:ProductsType[]
}

const ProductsList = ({products}:ProductsListProps) => {


  return (
    <div>
        <Container>
            <div className="p-4 flex gap-x-1.5 justify-center">
               {products.map((item)=>(
                <CardProducts key={item._id} {...item}/>
               ))}
            </div>
        </Container>
    </div>
  )
}

export default ProductsList