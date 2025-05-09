import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/db';
import { Pagination } from '@heroui/pagination';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { FaStar } from 'react-icons/fa';

export default function Customer_reviews() {
  // بيانات الكروت
  const [reviews, setReviews] = useState([]);
  // الحالة لتتبع الصفحة الحالية
  const [currentPage, setCurrentPage] = useState(1); // هنا سيبدأ من الصفحة ١

  // عدد الكروت لكل صفحة
  const cardsPerPage = 1;

  // حساب بداية ونهاية الكروت في الصفحة
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = reviews.slice(startIndex, endIndex);

  useEffect(() => {
    supabase
      .from('customer-reviews')
      .select()
      .then((res) => {
        setReviews(res.data);
      });
  }, []);

  return (
    <>
      <h4 className="text-center  mt-6 p-4 text-3xl font-bold">
        Customer Reviews
      </h4>
      <div className="relative flex justify-center items-center mt-2 ">
        <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
        <div className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
      </div>
      <div className="flex items-center justify-center mt-[-25px] min-h-96 ">
        <div className="w-auto h-auto text-center ">
          {currentCards.map((card) => (
            <Card key={card.id} className="p-6 w-[90%] sm:w-[600px] mx-auto">
              <CardHeader className="pb-0 pt-2 px-4 flex-col text-center">
                <div className="flex justify-center  gap-2 mb-2 text-yellow-500 text-xl">
                  <FaStar />
                  <p className="text-black font-bold mb-2 text-2xl">
                    {card.customerName}
                  </p>
                  <FaStar />
                </div>
                <p className=" font-bold mb-3 text-small">{card.Profession}</p>
                <p className="text-default-500">{card.Description}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
          ))}

          {/* التحكم في التنقل بين الكروت */}
          {reviews.length >= cardsPerPage && (
            <div className="flex items-center justify-center mt-6">
              <Pagination
                loop
                showControls
                color="primary"
                total={Math.ceil(reviews.length / cardsPerPage)}
                initialPage={1}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
