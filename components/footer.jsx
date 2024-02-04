import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <div className="w-full bg-[#161e2c] px-32 py-[26px] h-full">
      <div className='container'>
        <div className='row flex items-center justify-between'>
          <div className='text-[#cbcbcb]'>
            <span className="text-white text-bold pr-3">© Pyle</span>
             is proudly owned by 
            <Link href={"https://lewismeta.vercel.app"} target='_blank' className='text-white text-bold ml-3'>Lewis Meta</Link>
          </div>
          <div className='text-[#cbcbcb]'>
            <span className="text-white text-bold pr-3">Pyle</span>
             Ultimate Inventory With 
            <span className='text-white text-bold ml-3'>POS</span>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Footer