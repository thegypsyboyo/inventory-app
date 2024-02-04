import Link from 'next/link'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import NoResults from './NoResults'


const Inventory = ({ inventories, deleteInventory}) => {
  
  return (
    <div className='mt-8 py-9 container'>
        <div className='flex items-center justify-between'>
        <h2 className="text-[42px] font-bold leading-[60px] text-center text-dark"> All Inventories </h2>
        <div className='flex items-end'>
            <Link href="create-inventory" className='bg-[#4f46e5] rounded-[3px] border-none font-semibold text-white py-[10.5px] px-[36px] mt-3 flex justify-end'>Create Inventory</Link>
        </div>
        </div>

        <div className='w-full mt-[60px] flex flex-wrap '>

          {inventories.length > 0 ? (
            <div className='w-full flex flex-wrap'>
              {inventories.map((item, index) => (
                <div key={index} className='flex flex-col lg:w-1/2 w-full lg:even:pl-4 lg:odd:pr-4 lg:odd:pt-0 lg:even:pb-4'>
                  <img 
                    src={item.image}
                    alt='image-data'
                    width={400}
                    height={400}
                    className='object-cover rounded-[8px] w-full h-[350px] '
                  />
                  <div className='flex  gap-6  items-center justify-between w-full'>
                    <div>
                    <h2 className='text-lg font-extrabold mb-[13px] mt-[10px]'>{item.itemName}</h2>
                    <p>{item.description}</p>
                    <p className='text-[#5855eb] font-medium'>kes {item.price}</p>
                    </div>
  
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="bg-red-500 text-white py-3.5" >Delete Inventory</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            inventory and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteInventory(item.id)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
  
                  </div>
                </div>
              ))}
            </div>
          ): (
            <div className='w-full items-center justify-center'>
              <NoResults 
              link={"/create-inventory"}
              linkTitle={"Create Inventory"}
              title={"You have no inventories, create inventories today. It is very easy!😀"}

              />
            </div>
          )}
        </div>
    </div>
  )
}

export default Inventory