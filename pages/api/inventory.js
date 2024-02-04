// pages/api/inventory.js

import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      return await handleGet(req, res);
    case "POST":
      return await handlePost(req, res);
    case "DELETE":
      return await handleDelete(req, res);
    case "PUT":
      return await handlePut(req, res);
    default:
      res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}

// Fetch all inventories
const handleGet = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "inventory"));
    const inventories = [];
    
    querySnapshot.forEach((doc) => {
      inventories.push({ ...doc.data(), id: doc.id });
    });

    res.status(200).json({ inventories });
  } catch (error) {
    console.error("An error occurred while fetching inventories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new inventory item
const handlePost = async (req, res) => {
  try {
    const { owner, content, itemName, quantity, price, completed, description, image } = req.body;

    const docRef = await addDoc(collection(db, "inventory"), {
      owner,
      content,
      itemName,
      quantity,
      price,
      completed,
      description,
      image,
    });

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("An error occurred while adding an inventory item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete an inventory item
const handleDelete = async (req, res) => {
  try {
    const { id } = req.body;
    await deleteDoc(doc(db, "inventory", id));
    res.status(204).end();
  } catch (error) {
    console.error("An error occurred while deleting an inventory item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an inventory item
const handlePut = async (req, res) => {
  try {
    const { id, completed } = req.body;
    await updateDoc(doc(db, "inventory", id), { completed });
    res.status(204).end();
  } catch (error) {
    console.error("An error occurred while updating an inventory item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
