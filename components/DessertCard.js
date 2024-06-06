// DesertCard.js
export default function DessertCard({ product, onAddToCart }) {
  return (
    <>
      <div
        className="bg-stone-100 p-4 text-center rounded-2xl mx-2.5 my-5 w-60"
        id="dessert-cart"
      >
        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-[1.2rem]">{product.price.toFixed(2)} €</p>
        <p className="my-2.5">Catégorie : {product.category}</p>
        <button
          onClick={onAddToCart}
          className="mt[30px] mb-[10px] mx-auto shadow-[3px_3px_0_rgba(34,34,34)]"
        >
          Ajouter au panier
        </button>
      </div>
    </>
  );
}
