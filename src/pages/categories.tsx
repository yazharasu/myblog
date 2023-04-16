import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getCategories } from '../../Services';
import { Loader, Widget } from '../Components';

const Categories = ({ categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-6 lg:col-start-2">
        <div className='mb-8 font-bold text-xl'>All Categories</div>

          {categories.map((cat, index) => (
            <Link key={index} href={`/category/${cat.slug}`}>
              <span className='cursor-pointer text-[18px] block border py-3 pl-3 mb-3 rounded-lg drop-shadow-md bg-white hover:bg-[#019875] hover:text-white'>{cat.name}</span>
            </Link>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 lg:col-start-9">
          <div className="relative lg:sticky top-8">
            <Widget categories={categories} slug={""}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;

// Fetch data at build time
export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}