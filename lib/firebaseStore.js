// firebaseUtils.js
import { addDoc, collection, getDocs, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const fetchInventories = async (uid) => {
    try {
        const q = query(collection(db, 'inventory'), where('owner', '==', uid));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((inventory) => {
            data.push({ ...inventory.data(), id: inventory.id });
        });
        return data;
    } catch (error) {
        console.error('An error occurred while fetching inventories:', error);
        throw error;
    }
};

export const addToInventory = async (authUser, itemName, itemQuantity, itemPrice, itemDescription, itemImage) => {
    try {
        const docRef = await addDoc(collection(db, 'inventory'), {
            owner: authUser.uid,
            itemName: itemName,
            quantity: itemQuantity,
            price: itemPrice,
            completed: false, // Assuming 'completed' is a boolean field in your Firestore schema
            description: itemDescription,
            image: itemImage,
            // Add more properties as needed
        });

        const inventories = await fetchInventories(authUser.uid);
        return inventories;

    } catch (error) {
        console.error('An error occurred while adding inventory:', error);
        throw error;
    }
};

export const deleteInventory = async (docId) => {
    try {
        await deleteDoc(doc(db, 'inventory', docId));
    } catch (error) {
        console.error('An error occurred while deleting inventory:', error);
        throw error;
    }
};

export const updateInventoryCompletion = async (docId, completed) => {
    try {
        const inventoryRef = doc(db, 'inventory', docId);
        await updateDoc(inventoryRef, {
            completed: completed,
        });
    } catch (error) {
        console.error('An error occurred while updating inventory completion:', error);
        throw error;
    }
};
