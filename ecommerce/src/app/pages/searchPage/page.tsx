"use client"
import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import { useGetProducts } from '@/app/hooks/api';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchPage = () => {
  const { data } = useGetProducts();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState<any>();
  const [filteredData, setFilteredData] = React.useState<any>([]);
  const [buttonTrigger, setButtonTrigger] = React.useState(false)
  console.log(filteredData, data, "filter")
  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    const filtered = data?.filter((details: any) =>
      details?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setButtonTrigger(true)
  };

  return (
    <div className=''>
      <Header />
      <div className='flex flex-col items-center justify-center mt-5'>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            placeholder='Search For Product'
            className='border border-black rounded-md p-3'
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            className={`border p-3 rounded-md ${searchQuery ? 'border-black' : 'border-gray-400 text-gray-400 cursor-not-allowed'
              }`}
            onClick={handleSearchClick}
            disabled={!searchQuery}
          >
            Go
          </button>

        </div>
        <div className='flex gap-4 flex-wrap items-center justify-center my-10'>
          {buttonTrigger ?
            filteredData?.map((details: any) => (
              <div
                key={details?.id}
                onClick={() => router.push(`/pages/detailPage/${details?.id}`)}
              >
                <Card
                  image={details?.image}
                  title={details?.title}
                  price={details?.price}
                />
              </div>
            )) : data?.map((details: any) => (
              <div
                key={details?.id}
                onClick={() => router.push(`/pages/detailPage/${details?.id}`)}
              >
                <Card
                  image={details?.image}
                  title={details?.title}
                  price={details?.price}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
