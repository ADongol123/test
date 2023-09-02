"use client";

import Image from 'next/image'
import HomePage from './pages/homepage/page'
import Header from './components/Header';
import { useGetProducts } from './hooks/api';
import Card from './components/Card';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data } = useGetProducts()
  const router = useRouter()
  return (
    <div>
      <Header />

      <div className='flex gap-4 flex-wrap items-center justify-center my-10'>
        {data?.map((details: any) =>
          <div key={details?.id} onClick={() => router.push(`/pages/detailPage/${details?.id}`)}>
            <Card image={details?.image} title={details?.title} price={details?.price} />
          </div>
        )}
      </div>
    </div >
  )
}
