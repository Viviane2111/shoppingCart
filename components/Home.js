// Home.js
import { useState } from "react";
import { useCart } from "./CartContext";
import products from "../data/products";
import DessertCard from "./DessertCard";
import ShoppingCart from "./ShoppingCart.js";

export default function Home() {
  const { addToCart } = useCart();
  const [isCartVisible, setisCartVisible] = useState(false);

  const toggleCatVisible = () => {
    setisCartVisible(!isCartVisible);
  }

  return (
    <div>
      <header>
        <h1 className="text-indigo-50 text-center my-[25px] text-3xl">
          Page des desserts
        </h1>
      </header>
      <main className="custom-ubuntu-font flex  justify-center items-center min-h-screen py-16">
        <button
          onClick={toggleCatVisible}
          className="absolute top-0 right-0 mt-6 mr-5"
        >
          {isCartVisible ? "Masquer le panier" : "Afficher le panier"}
        </button>
          {isCartVisible && <ShoppingCart />}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
          {products.map((product) => (
            <DessertCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
