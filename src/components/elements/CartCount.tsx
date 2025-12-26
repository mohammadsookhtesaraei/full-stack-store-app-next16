import { useCart } from "@/context/CartContextProvider";

import { ProductsType } from "@/types/products.type";

interface CartCountProps {
  product: ProductsType;
}

const CartCount = ({ product }: CartCountProps) => {
  const { increaseToCart, decreaseToCart, getProductQty, removeFromCart } =
    useCart();
  const qty = getProductQty(product._id);
  return (
    <div className="flex items-center p-4 flex-1 justify-between">
      <button
        className="px-4 py-1 rounded-md bg-orange-400 text-white"
        onClick={() => increaseToCart(product)}
      >
        +
      </button>
      <span className="border border-gray-400 text-center size-6 px-1 rounded-xs text-gray-600">
        {qty}
      </span>
      {qty > 1 ? (
        <button
          className="px-4 py-1 rounded-md bg-orange-400 text-white"
          onClick={() => decreaseToCart(product)}
        >
          -
        </button>
      ) : (
        <button
          className="px-4 py-1 rounded-md bg-orange-400 text-white"
          onClick={() => removeFromCart(product._id)}
        >
          d
        </button>
      )}
    </div>
  );
};

export default CartCount;
