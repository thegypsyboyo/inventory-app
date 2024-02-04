import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { AuthUserProvider } from "@/firebase/auth"


export default function App({ Component, pageProps }) {
 
  return (

    <>
      <Head>
        <title>Inventory manager | Home</title>
      </Head>
      <AuthUserProvider>
      <Navbar/>
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Footer/>
      </AuthUserProvider>
    </>
  );
}
