import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-8 px-8'>
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
              href={"/"}
              className={
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <div className="text-sm font-medium leading-none">Inventories</div>
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

      user
    </nav>
  )
}

export default Navbar