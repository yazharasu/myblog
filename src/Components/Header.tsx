import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../Services';


const Header = () => {
    const [categories, setCategories] = useState([]);

  useEffect( () => {
    getCategories()
      .then( (newCat) => setCategories(newCat))
  })

  return (  
    <div className='    px-10 mb-8 bg-white sticky top-0 w-full drop-shadow z-10'>
        <div className='w-full inline-block py-4'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-2xl text-gray-600 hover:text-black transition ease-in-out duration-500'>
                        WebDev Hacks
                    </span>
                </Link>
            </div>
            <div className='hidden md:contents md:float-left'>
                {
                <>
                <Link href='https://yazharasu.netlify.app/'>
                    <span className='md:float-right font-semibold align-middle text-gray-600 hover:text-black ml-5 mt-2 cursor-pointer'>
                        About me
                    </span>
                </Link>
                <Link href={`categories`}>
                    <span className='md:float-right font-semibold align-middle text-gray-600 hover:text-black ml-5 mt-2 cursor-pointer'>
                        All Categories
                    </span>
                </Link>
                </>
                }

                {/* {
                categories.map( (cat, index) => (
                    <Link key={index} href={`category/${cat.slug}`}>
                        <span className='md:float-right font-semibold align-middle text-white ml-4 mt-2 cursor-pointer'>
                            {cat.name}
                        </span>
                    </Link>
                ))
                } */}
            </div>
        </div>
    </div>
  )
}

export default Header