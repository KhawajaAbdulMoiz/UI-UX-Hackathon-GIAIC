"use client"
import Image from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

export default function OurShop() {
  return (
    <>
     
      <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
       {/* Heading */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">Our Shop</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Our Shop</span>
            </p>
          </div>
        </div>
      </header>

  
      <div className="relative w-full bg-white py-12">
        <div className="flex flex-col md:flex-row gap-8">
       
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-[200px] transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={`/images/category${(index % 4) + 1}.jpeg`}
                  width={300}
                  height={200}
                  alt={`Sub Dish ${index + 1}`}
                  className="rounded w-full h-full object-cover animate-fade-in delay-[${index * 100}ms]"
                />
              </div>
            ))}
          </div>

       
          <div className="w-full md:w-[40%] px-4">
           
            <div className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Search Your Keyword"
                className="w-full px-4 py-3 bg-zinc-100 border border-gray-300 animate-slide-in-left"
              />
            </div>

          {/* Recent Post */}
            <div className="bg-gray-100 p-4 mb-8">
              <h2 className="font-bold text-lg mb-4 animate-fade-in">Recent Posts</h2>
              <div className="space-y-4">
                {['menu5', 'menu6'].map((item, idx) => (
                  <Image
                    key={idx}
                    src={`/images/${item}.jpeg`}
                    alt={`Recent Post ${idx + 1}`}
                    width={323}
                    height={107}
                    className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>

            
            <div className="bg-gray-100 p-4 space-y-4">
              {['menu3', 'menu10'].map((item, idx) => (
                <Image
                  key={idx}
                  src={`/images/${item}.jpeg`}
                  alt={`Filter Menu ${idx + 1}`}
                  width={323}
                  height={62}
                  className="cursor-pointer transform hover:translate-y-2 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
}
