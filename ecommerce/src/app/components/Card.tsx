"use client";

import Image from 'next/image';
import React from 'react'

const Card = ({ image, title, price }: any) => {
  return (
    <div className='w-[300px] h-[350px] rounded-[10px] bg-[lightgray] cursor-pointer shadow-md'>
      <Image className='h-[200px] w-full overflow-hidden' height={100} width={100} src={image} alt="image" />
      <div className='p-3 flex flex-col gap-4'>
        <p className='w-full'>{title}</p>
        <p className='text-[15px] font-bold'>${price}</p>
      </div>
    </div>
  )
}

export default Card