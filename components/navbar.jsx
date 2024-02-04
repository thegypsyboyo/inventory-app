import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAuth } from "@/firebase/auth";
import { GoSignOut } from 'react-icons/go';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Navbar = () => {
  const { signOut, authUser } = useAuth();

  console.log("User Info:", authUser)
  return (
    <nav className='w-full flex items-center justify-between py-8 px-8 overflow-hidden'>
      <Link className='w-auto flex items-center justify-center' href={"/"}>
        <span className='deüp'>
          <Image 
            src='/logo.webp'
            width={70}
            height={70}
            alt='logo'
          />
        </span>
      </Link>
      <div className='flex items-center justify-center gap-8'>
        <div className=''>
          <Link
              href={"/"}
              className={
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <div className="text-sm font-medium leading-none">Home</div>
            </Link>
        </div>
        <div className=''>
          <Link
              href={"/create-inventory"}
              className={
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <div className="text-sm font-medium leading-none">Create Inventories</div>
            </Link>
        </div>
        <div className=''>
          <Link
              href={"/"}
              className={
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <div className="text-sm font-medium leading-none">Documentation</div>
            </Link>
        </div>
      </div>

      {authUser ? (
        <div className='text-sm font-medium leading-none flex items-center gap-5'>
          {authUser.profileImage ? (
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src={authUser.profileImage}  alt="profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          ): (
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          )}

          <span className='text-base font-bold flex flex-col'>
          {`Hi, ${authUser.username}`}
          <span className=' font-semibold'>Welcome back!</span>
          </span>
          <div>
          <div
                className="bg-black text-white w-44 py-4 mt-10 rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer"
                onClick={signOut}
            >
                <GoSignOut size={18} />
                <span>Logout</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-sm font-medium leading-none'>Anonymouse User</div>
      )}
    </nav>
  )
}

export default Navbar;
