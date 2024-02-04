// pages/index.js

import Header from "@/components/header";
import Inventory from "@/components/inventory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";


export default function Home() {
  const [inventories, setInventories] = useState([]);
  const { authUser, isLoading } = useAuth();
  const router = useRouter();
 
  useEffect(() => {
    if (!isLoading && !authUser) {
        router.push("/login");
    }
    if (!!authUser) {
      fetchInventory(authUser.uid);
    }
  }, [authUser, isLoading, router]);

  const fetchInventory = async (uid) => {
    try {
        // Create a Firestore query to fetch all the inventories for the user with the given ID.
        const q = query(collection(db, "inventory"), where("owner", "==", uid));

        // Execute the query and get a snapshot of the results.
        const querySnapshot = await getDocs(q);

        // Extract the data from each invt document and add it to the data array.
        let data = [];
        querySnapshot.forEach((invt) => {
            console.log(invt);
            data.push({ ...invt.data(), id: invt.id });
        });

        // Set the inventories state with the data array.
        setInventories(data);
    } catch (error) {
        console.error("An error occured", error);
    }
  };

 const deleteInventory = async (docId) => {
        try {
            // Delete the todo document with the given ID from the "inventories" collection in Firestore.
            await deleteDoc(doc(db, "inventory", docId));

            // After deleting the inventory, fetch all inventories for the current user and update the state with the new data.
            fetchInventory(authUser.uid);
        } catch (error) {
            console.error("An error occured", error);
        }
  };


  return (
    <main className="w-full min-h-screen bg-[#f1f5f9]">
      <Header />
      <Inventory inventories={inventories} deleteInventory={deleteInventory} />
    </main>
  );
}
