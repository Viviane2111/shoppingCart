// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { CartProvider } from "../components/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}
