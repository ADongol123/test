import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const data = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Products",
    link: "/pages/searchPage"
  }
];

const Header = (props: any) => {
  // const [selectedTitle, setSelectedTitle] = React.useState<string | null>(null);
  const router = useRouter();

  const handleClick = (title: string, link: string) => {
    // setSelectedTitle(title === selectedTitle ? null : title); 
    router.push(link);
  };

  return (
    <div className='flex gap-5 items-center justify-center py-5 shadow-xl'>
      {data?.map((details: any) => {
        const className = `text-lg font-semibold `;

        return (
          <div className='cursor-pointer' key={details.id}>
            <p className={className} onClick={() => handleClick(details.title, details.link)}>
              {details.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
