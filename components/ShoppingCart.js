// ShoppingCart.js
import { useCart } from "./CartContext";

export default function ShoppingCart() {
  const {cart, clearCart, cartTotal, cartTax, cartGrandTotal } = useCart();

  return (
    <>
      <div className="cart-container">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        >
          Vider le panier
        </button>
        <div className="text-center">
          {cart.map((product) => (
            <div key={product.id} className="flex flex-col mb-5">
              <span>
                {product.quantity} x {product.name}
              </span>
              <span className="ml-2">
                {(product.price * product.quantity).toFixed(2)} €
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <p className="text-center">
            Nombre total d'articles :{" "}
            {cart.reduce((total, product) => total + product.quantity, 0)}
          </p>
          <p className="text-center">Total hors-taxe : {cartTotal.toFixed(2)} €</p>
          <p className="text-center">Taxes : {cartTax.toFixed(2)} €</p>
          <p className="text-center">Total : {cartGrandTotal.toFixed(2)} €</p>
        </div>
      </div>
    </>
  );
}
