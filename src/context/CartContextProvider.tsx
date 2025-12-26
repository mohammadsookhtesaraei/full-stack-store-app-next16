"use client";
// react hooks
import { createContext, useContext, useState, useEffect } from "react";


// my type
import { CartT } from "@/types/products.type";
import { ProductsType } from "@/types/products.type";


// props type
interface CartContextProviderProps {
  children: React.ReactNode;
}


// context type
interface CartContextT {
  cart: CartT[];
  increaseToCart: (product: ProductsType) => void;
  decreaseToCart: (product: ProductsType) => void;
  removeFromCart: (productId: string) => void;
  getAllProducts: number;
  getProductQty: (productId: string) => number;
}

// create context
const CartContext = createContext({} as CartContextT);


// custom hook for get context value from useContext
export const useCart = () => {
  return useContext(CartContext);
};



const CartContextProvider = ({ children }: CartContextProviderProps) => {

    // state cart
  const [cart, setCart] = useState<CartT[]>([]);

// get local storage mounting render
  useEffect(()=>{
  const sorted=localStorage.getItem("cart");
  if(sorted){
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(JSON.parse(sorted));
  }
  },[]);

//   set to local storage when updating cycle
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart )) 
  },[cart])


//   add to cart and plus
  const increaseToCart = (product: ProductsType) => {
    setCart((prev:CartT[]) => {
      const selectedProduct = prev.find((item) => item._id == product._id);
      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };


//  decrease cart  
  const decreaseToCart = (product: ProductsType) => {
    setCart((prev:CartT[]) => {
      const isLastOne =
        prev.find((item) => item._id == product._id)?.quantity == 1;

      if (isLastOne) {
        return prev.filter((item) => item._id != product._id);
      } else {
        return prev.map((item) => {
          if (item._id == product._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

//   remove from cart

  const removeFromCart = (productId: string) => {
    setCart((prev:CartT[]) => {
      return prev.filter((product) => product._id !== productId);
    });
  };

//   get all product qty
  const getAllProducts = cart.reduce(
    (total, current) => total + current.quantity,
    0
  );


//   get one product qty
  const getProductQty = (productId: string) => {
    return cart.find((item) => item._id == productId)?.quantity ?? 0;
  };

  return (
    <CartContext
      value={{
        cart,
        increaseToCart,
        decreaseToCart,
        removeFromCart,
        getProductQty,
        getAllProducts,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContextProvider;
