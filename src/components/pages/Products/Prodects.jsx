import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/db';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Image } from '@heroui/image';
//import { Input } from '@heroui/input';

export default function Products() {
  const [products, setProducts] = useState([]);

  // const [searchProducts, setSearchProducts] = useState('');
  useEffect(() => {
    supabase
      .from('productsitems')
      .select('')
      .then((prev) => {
        setProducts(prev.data);
      });
  }, []);
  /*  const handleSearchProducts = (e) => {
    setSearchProducts(e.target.value);
  }; */
  /* const searchProductsItems = products.filter((prev) => {
    return prev.productsName
      .toLowerCase()
      .includes(searchProducts.toLowerCase());
  }); */
  return (
    <>
      <h4 className="text-center  mt-6 p-4 text-3xl font-bold">Products</h4>
      <div className="relative flex justify-center items-center mt-2">
        <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
        <div className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
      </div>
      {/*   <div className=" flex items-center justify-around mt-6">
        <Input
          // isClearable
          value={searchProducts}
          onChange={handleSearchProducts}
          className="max-w-xs"
          defaultValue=""
          label="Search"
          placeholder="Search Products"
          type="text"
          variant="bordered"
          // eslint-disable-next-line
          no-console
          onClear={() => setSearchProducts('')}
        />
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4 mt-4">
        {products.map((prod) => {
          return (
            <Card
              key={prod.id}
              className="py-4 flex items-center justify-center"
            >
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={290}
              />
              <CardHeader className="pb-0 pt-2 px-4 flex-col ">
                <h4 className="font-bold text-2xl mt-4">{prod.productsName}</h4>
                <p className=" uppercase font-bold text-md mt-2">
                  {prod.productsTitle}
                </p>
                <small className="text-default-500 text-lg mt-2">
                  {prod.productsPrice}$
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2 mt-6"></CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}
