import AddtoCart from "@/components/elements/AddtoCart";
import { ProductsType } from "@/types/products.type"
import Link from "next/link";

interface CardProductsProps {
  products:ProductsType
}

const CardProducts = ({products}:CardProductsProps) => {

  const {_id,title,price,category,description,image}=products;

   
  return (
    <div className="w-80 flex flex-col items-start justify-between rounded-md shadow-md border border-gray-400/35">

      <div className="w-full h-56 grid place-content-center  bg-green-300 overflow-hidden">
        image
      </div>

      <div className="p-2 flex flex-col gap-y-1.5">
        <h2 className="text-gray-400">name:<span className="text-gray-600 font-medium  text-base">{title}</span></h2>
        <p className="text-gray-400">price:<span className="text-gray-600 font-medium  text-base">{price}$</span></p>
        <p className="text-gray-400">category:
          <Link href={`/products?category=${category}`}>
          <span className="text-gray-600 font-medium  text-base">{category}</span>
          </Link>
        </p>
      </div>

       <div className="flex justify-between  w-full p-2">
           <Link className="bg-blue-400 text-sm text-white px-1.5 py-1 inline-block rounded-md hover:bg-blue-500" href={`/products/${_id}`}>more details</Link>
          <AddtoCart  product={products}/>
      </div>
    </div>
  )
}

export default CardProducts