"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";

function MenuSection() {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.95", image: "/images/menu19.jpeg" },
    { name: "Fresh Breakfast", price: "14.95", image: "/images/about1.jpg" },
    { name: "Mild Butter", price: "12.95", image: "/images/about1.jpg" },
    { name: "Fresh Bread", price: "12.95", image: "/images/about1.jpg" },
    { name: "Glow Cheese", price: "12.95", image: "/images/about1.jpg" },
    { name: "Italian Pizza", price: "14.95", image: "/images/about1.jpg" },
    { name: "Silico Beef", price: "12.95", image: "/images/about1.jpg" },
    { name: "Mushroom Pizza", price: "12.95", image: "/images/about1.jpg" },
  ];


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Choose & Pick
        </h1>
        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 text-yellow-500 font-bold mb-12">
        <button className="hover:text-white">Breakfast</button>
        <button className="hover:text-white">Lunch</button>
        <button className="hover:text-white">Dinner</button>
        <button className="hover:text-white">Dessert</button>
        <button className="hover:text-white">Drink</button>
        <button className="hover:text-white">Snack</button>
        <button className="hover:text-white">Soups</button>
      </div>

      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ${isVisible ? "fade-in" : ""}`}>
     
        <div className="flex justify-center items-center">
          <Image
            src="/images/menu6.jpeg"
            alt="Featured Dish"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded object-cover"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="text-yellow-500 font-bold mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <h3 className="font-greatVibes text-yellow-500 text-xl italic">Chef&apos;s Pick</h3>
      </div>
    </section>
  );
}

export default MenuSection;
