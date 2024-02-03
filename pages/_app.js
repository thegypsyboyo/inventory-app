import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
 
  return (

    <>
      <Head>
        <title>Inventory manager | Home</title>
      </Head>
      <Navbar/>
      <main>
      <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  );
}
