"use client"

import Container from "@/components/container/Container";
import CartForm from "@/components/modules/CartForm";
import CartList from "@/components/modules/CartList";
import { useCart } from "@/context/CartContextProvider"

const Cart = () => {
    const {cart}=useCart();

  const totalPrice=cart.reduce((total,current)=>total + current.price,0);

  return (
    <div>
        <Container>
            <div className="m-5">
              {cart.length === 0 ? (<p>cart empty</p>) : (
                <div className="flex items-start gap-x-1.5 mx-auto">
                 <CartList cart={cart}/>
                 <CartForm/>
                </div>
              )}
                 <p className="mt-5 text-gray-400">totalPrice:{totalPrice}$</p>
              
            </div>
        </Container>
    </div>
  )
}

export default Cart