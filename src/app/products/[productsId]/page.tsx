import Container from "@/components/container/Container";
import { ProductsType } from "@/types/products.type";

interface ProductsIdProps {
    params:Promise<{productsId:string}>
}

const ProductsId = async({params}:ProductsIdProps) => {

    const {productsId}=await params;

    const response=await fetch(`http://localhost:3000/api/products/${productsId}`);
    const product=await response.json() as ProductsType;
   
   
    

  return (
    <div>
        <Container>
            <div className="m-5">
               
            </div>
        </Container>
    </div>
  )
}

export default ProductsId