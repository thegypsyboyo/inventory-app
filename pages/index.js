import Header from "@/components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#f1f5f9]">
      <Header/>
      Add Inventories
    </main>
  );
}
