import { useState } from "react";

import { CartT } from "@/types/products.type";

interface CartFormProps {
  cart: CartT[];
  totalP: number;
}

const CartForm = ({ cart, totalP }: CartFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    address: "",
    zipCode: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({ user: formData, cart: cart, totalPrice: totalP }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-6/12 border border-gray-400/35 p-4">
      <form
        onSubmit={formHandler}
        className="w-full border border-slate-600 rounded-md p-2"
      >
        {/* name */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="name">name</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="name"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="email">email</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="email"
          />
        </div>

        {/* city */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="city">city</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="city"
          />
        </div>
        {/* country */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="country">country</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            placeholder="country"
          />
        </div>

        {/* address */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="address">address</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={changeHandler}
            placeholder="address"
          />
        </div>
        {/* zipcode */}
        <div className="flex flex-col gap-y-0.5 mb-1">
          <label htmlFor="zipcode">zipcode</label>
          <input
            className="w-6/12 border border-gray-300 rounded-md px-1 py-0.5 focus:outline-none"
            type="text"
            id="zipcode"
            name="zipCode"
            value={formData.zipCode}
            onChange={changeHandler}
            placeholder="zipcode"
          />
        </div>

        {/* button */}
        <button
          className="bg-black text-white rounded-md px-4 py-1 m-2 w-6/12 cursor-pointer"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default CartForm;
