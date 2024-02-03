import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='mt-[30px] py-[48px] md:px-[40px] px-[30px] lg:px-[80px] bg-[#8897e8] rounded-[10px]'>
        <div className='row flex items-center flex-nowrap '>
            <div className='lg:w-1/2 w-full'>
                <div className='w-full '>
                <h1 className="text-[42px] leading-[60px] font-semibold  text-white ">The Best Electronics Shop For Online Purchase</h1>
                <p className="py-6 text-[#e3e8ff] text-base font-normal"> With a commitment to excellence, this electronic shop has curated a diverse range of cutting-edge gadgets, devices, and accessories to cater to the diverse needs and preferences of tech enthusiasts.</p>

                <Link href="" className='bg-[#4f46e5] rounded-[3px] border-none font-semibold text-white py-[10.5px] px-[36px] mt-3'>Shop Now</Link>
                </div>

            </div>
            <div className='lg:w-1/2  w-0 lg:block hidden'>
                <div className='pl-[123px] w-full justify-end flex'>
                    <Image 
                    src={"/hero-img.webp"}
                    alt='hero-img'
                    width={350}
                    height={350}
                    className='object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header