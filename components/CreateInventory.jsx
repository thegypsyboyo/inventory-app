import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InventorySchema } from "@/lib/validations";
import { addToInventory } from "@/lib/firebaseStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/auth";
import { db } from "@/firebase/firebase";


export function ProfileForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inventories, setInventories] = useState([]);

    const { signOut, authUser, isLoading } = useAuth();
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


    const onKeyUp = (event) => {
        if (event?.key === "Enter" && todoInput?.length > 0) {
            addToDo();
        }
    };


    const form = useForm({
        resolver: zodResolver(InventorySchema),
        defaultValues: { itemName: '', quantity: 0, price: 0, description: '', image: '' },
      });
    
      const onSubmit = async (values) => {
        setIsSubmitting(true);
      
        try {
          const docRef = await addDoc(collection(db, "inventory"), {
            owner: authUser.uid,
            itemName: values.itemName,
            quantity: values.quantity,
            price: values.price,
            description: values.description,
            image: values.image,
          });
      
          // Log the ID to the console
          console.log("Document ID:", docRef.id);
      
          // Fetch updated data
          fetchInventory(authUser.uid);
      
          // Reset form values
          form.reset();
          router.push(`/`);
        } catch (error) {
          console.error("An error occurred", error);
        } finally {
          setIsSubmitting(false);
        }
      };  
    
    
  return (
    <Form {...form} className="">
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-[50%] mx-auto flex-col gap-10">
        <FormField
          control={form.control}
          name="itemName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Item name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Quantity</FormLabel>
              <FormControl>
                <Input placeholder="Quantity" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Url</FormLabel>
              <FormControl>
                <Input placeholder="image url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<Button  disabled={isSubmitting}>
        {isSubmitting ? 'Creating Inventory...' : 'Create Inventory'}
      </Button>
      </form>
    </Form>
  );
}
