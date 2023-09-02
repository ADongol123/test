"use client";

import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import { useGetProducts } from '@/app/hooks/api';
import React from 'react'

const HomePage = () => {
  const { data } = useGetProducts()
  console.log(data, "data")
  return (
    <div>
      <Header />
      <div className='flex gap-4 flex-wrap items-center justify-center my-10'>
        {data?.map((details: any) => <Card image={details?.image} title={details?.title} price={details?.price} />)}
      </div>
    </div>
  )
}

export default HomePage