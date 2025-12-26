"use client"

import { useCart } from "@/context/CartContextProvider"

import { ProductsType } from "@/types/products.type"

interface AddtoCartProps {
product:ProductsType 
}


const AddtoCart = ({product}:AddtoCartProps) => {

const {increaseToCart}=useCart()
  return (
    <button className="bg-blue-400 text-sm text-white px-1.5 py-1 inline-block rounded-md hover:bg-blue-500" onClick={()=>increaseToCart(product)}>AddtoCart</button>
  )
}

export default AddtoCart