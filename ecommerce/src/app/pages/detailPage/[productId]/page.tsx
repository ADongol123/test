"use client";

import Header from '@/app/components/Header';
import { useGetProducts } from '@/app/hooks/api';
import Image from 'next/image';
import React from 'react'

const DetailPage = ({ params }: any) => {
  const { productId } = params
  const { data } = useGetProducts()
  const fileteredData = data?.find((details: any) => details?.id === Number(productId))
  console.log(fileteredData, typeof productId, "filter")
  console.log(productId)
  return (
    <div>
      <Header />
      <div className='flex flex-col sm:flex-row gap-10 items-center justify-center mt-10'>
        <Image className='h-[400px] w-[400px]' height={100} width={100} src={fileteredData?.image} alt="image" />
        <div className='flex flex-col gap-5'>
          <p className='text-[25px] font-bold'>{fileteredData?.title}</p>
          <p className='text-[20px] font-semibold'>${fileteredData?.price}</p>
          <p className='text-[20px] font-semibold'>{fileteredData?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage