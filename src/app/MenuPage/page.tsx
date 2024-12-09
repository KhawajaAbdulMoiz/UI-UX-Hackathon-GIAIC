import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";


const MenuPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
          
          <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
       
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">Menu</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Our Menu</span>
            </p>
          </div>
        </div>
      </header>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 animate-slide-up">Appetizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex animate-slide-left">
              <img src="/images/menu4.jpeg" alt="Appetizer" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Sandwich</h3>
                <p className="text-sm text-gray-600">Crispy Sandwitches stuffed with spiced potatoes</p>
              </div>
              <span className="ml-auto text-lg font-medium">$6.00</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 animate-slide-up">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex animate-slide-left">
              <img src="/images/menu6.jpeg" alt="Main Course" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Pizza</h3>
                <p className="text-sm text-gray-600">Served with extra cheese</p>
              </div>
              <span className="ml-auto text-lg font-medium">$12.00</span>
            </div>
          </div>
        </section>

        {/* Dessert Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 animate-slide-up">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex animate-slide-left">
              <img src="/images/menu9.jpeg" alt="Dessert" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Chocolate Donut</h3>
                <p className="text-sm text-gray-600">Rich chocolate donut with a molten center</p>
              </div>
              <span className="ml-auto text-lg font-medium">$5.00</span>
            </div>
          </div>
        </section>

        {/* Dinner Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 animate-slide-up">Dinner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex animate-slide-left">
              <img src="/images/menu5.jpeg" alt="Drink" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Lasania</h3>
                <p className="text-sm text-gray-600">Fresh Lasania with a juice</p>
              </div>
              <span className="ml-auto text-lg font-medium">$3.50</span>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
              <h3 className="text-4xl font-bold">420+</h3>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">250+</h3>
              <p className="text-sm text-gray-600">Dishes Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">36+</h3>
              <p className="text-sm text-gray-600">Chefs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">Five Star Ratings</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            <img src="/images/chef1.jpeg" alt="Partner 1" className="h-16 mx-auto" />
            <img src="/images/chef3.jpeg" alt="Partner 2" className="h-16 mx-auto" />
            <img src="/images/chef2.jpeg" alt="Partner 3" className="h-16 mx-auto" />
            <img src="/images/sis2.png" alt="Partner 4" className="h-16 mx-auto" />
            <img src="/images/lady.png" alt="Partner 5" className="h-16 mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;
