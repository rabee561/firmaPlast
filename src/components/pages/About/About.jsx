import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/db';
export default function About() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    supabase
      .from('about')
      .select()
      .then((res) => {
        setAbout(res.data);
      });
  }, []);
  return (
    <>
      <div>
        <h4 className="text-center  mt-6 p-4 text-3xl font-bold">About</h4>
        <div className="relative flex justify-center items-center mt-2 mb-8">
          <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
        </div>
        <div className="mb-16">
          {about.map((prev) => (
            <div
              key={prev.textAbout}
              className="max-w-screen-lg text-center m-auto px-4"
            >
              <h1>{prev.textAbout}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
