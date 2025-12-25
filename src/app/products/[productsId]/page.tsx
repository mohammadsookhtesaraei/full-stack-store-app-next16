import Container from "@/components/container/Container";
import CardProducts from "@/components/elements/CardProducts";
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
            <div className="m-5 border p-4 grid place-content-center border-gray-400/35 rounded-md w-8/12 mx-auto">
               <CardProducts {...product}/>
            </div>
        </Container>
    </div>
  )
}

export default ProductsId