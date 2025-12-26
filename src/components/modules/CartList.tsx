import CardCart from "@/components/elements/CardCart";
import { CartT } from "@/types/products.type"

interface CartListProps {
    cart:CartT[];
}

const CartList = ({cart}:CartListProps) => {
  return (
    <div className="w-6/12 border border-gray-400/35 p-2">
     {cart.map((item)=>(
        <CardCart key={item._id} product={item}/>
     ))}
    </div>
  )
}

export default CartList