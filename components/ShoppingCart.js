// components/ShoppingCart.js
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  // Vider le panier
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="absolute top-16 right-0 bg-slate-500 shadow-md rounded-lg mt-6 -mr-44 p-4 w-65 z-50">
        <button
          className="bg-amber-600 text-white"
          onClick={handleClearCart}
        >
          Vider le panier
        </button>
        {cart.length === 0 ? (
          <p className="mt-4 text-center text-red-600 text-lg text-bold">Le panier est vide ❗</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mt-5 text-xl px-1 text-slate-100">
                  <span>{item.name}</span> - <span>{item.quantity}x</span> -{" "}
                  <span>{item.price.toFixed(2)} €</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-2xl border rounded-xl shadow p-2 bg-slate-100">
              <p className="text-center mb-1">
                Nombre total d'articles :{" "}
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </p>
              <p className="text-center mb-1">
                Total hors-taxe :{" "}
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                €
              </p>
              <p className="text-center mb-1">
                Taxes :{" "}
                {(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) * 0.2
                ).toFixed(2)}{" "}
                €
              </p>
              <p className="text-center mb-1">
                Total :{" "}
                {(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) * 1.2
                ).toFixed(2)}{" "}
                €
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
