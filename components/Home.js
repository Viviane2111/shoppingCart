// Home.js
// import { useCart } from "./CartContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice.js";
import products from "../data/products";
import DessertCard from "./DessertCard";
import ShoppingCart from "./ShoppingCart.js";

export default function Home() {
  // const { addToCart } = useCart();
  const dispatch = useDispatch();
  const [isCartVisible, setisCartVisible] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);

  const toggleCatVisible = () => {
    setisCartVisible(!isCartVisible);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleCategoryFilter = (category) => {
    setSelectCategory(category);
  };

  const filterProducts = selectCategory
    ? products.filter((product) => product.category === selectCategory)
    : products;

  return (
    <div className="container">
      <header className="sticky top-0 z-50 bg-gray-800 h-20 flex items-center">
        <div className="">
          <h1 className="text-indigo-50 w-auto ml-10 my-[25px] text-3xl">
            Page des desserts
          </h1>
          <div className="absolute top-0 right-80 mt-6 mr-5 ">
            <select
              onChange={(e) => handleCategoryFilter(e.target.value)}
              value={selectCategory}
              className="border border-stone-300 rounded px-2 py-3 w-80 "
            >
              <option value="">Toutes les catégories</option>
              {Array.from(
                new Set(products.map((product) => product.category))
              ).map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={toggleCatVisible}
            className="absolute top-0 right-0 mt-6 mr-5"
          >
            {isCartVisible ? "Masquer le panier" : "Afficher le panier"}
          </button>
          {isCartVisible && <ShoppingCart />}
        </div>
      </header>
      <main className="custom-ubuntu-font flex flex-col justify-center items-center min-h-screen py-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
          {filterProducts.map((product) => (
            <DessertCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
