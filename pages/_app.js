// pages/_app.js
// import { CartProvider } from "../components/CartContext";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    //* UTILISATION DE REDUX */
    <Provider store={store}>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Component {...pageProps} />
    </Provider>

    //* UTILISATION DE useContex & createContex DE REACT */
    // <CartProvider>
    //   <Head>
    //     <title>Shopping Cart</title>
    //   </Head>
    //   <Component {...pageProps} />
    // </CartProvider>
  );
}
