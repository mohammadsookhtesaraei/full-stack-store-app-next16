
import Link from "next/link";

import { CartT } from "@/types/products.type"
import CartCount from "@/components/elements/CartCount";

interface CardCartProps {
    product:CartT
}

const CardCart = ({product}:CardCartProps) => {
 
    const {_id,category,description,image,price,quantity,title}=product;

  return (
   <div className="mb-6 w-full flex p-2 items-center gap-x-4 rounded-md shadow-md border border-gray-400/35">

      <div className="w-46 h-16  p-2  bg-green-300 overflow-hidden">
        image
      </div>

      <div className="p-2 flex items-start  flex-col gap-y-1.5 border border-gray-300/35">
        <h2 className="text-gray-400">name:<span className="text-gray-600 font-medium  text-base">{title}</span></h2>
        <p className="text-gray-400">price:<span className="text-gray-600 font-medium  text-base">{price}$</span></p>
        <p className="text-gray-400">category:
          <Link href={`/products?category=${category}`}>
          <span className="text-gray-600 font-medium  text-base">{category}</span>
          </Link>
        </p>
      </div>

      <CartCount product={product}/>
    </div>
  )
}

export default CardCart