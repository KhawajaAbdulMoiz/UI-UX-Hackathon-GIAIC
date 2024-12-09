import { IoChevronForwardOutline } from "react-icons/io5";
import Image from 'next/image';

export default function OurChef() {

  const chefs = [
    { name: "D.Estwood", role: "Chief Chef", imgSrc: "/images/chef1.jpeg" },
    { name: "William Rumi", role: "Assistant Chef", imgSrc: "/images/chef2.jpeg" },
    { name: "Tahmina Rumi", role: "Advertising Chef", imgSrc: "/images/chefSection4.jpg" },
    { name: "James Berrick", role: "Advertising Chef", imgSrc: "/images/chefSection.jpg" },
    { name: "Jorina", role: "Advertising Chef", imgSrc: "/images/chefSection5.jpg" },
    { name: "Jimmy", role: "Advertising Chef", imgSrc: "/images/chef3.jpeg" },
    { name: "Oliver", role: "Advertising Chef", imgSrc: "/images/chefSection3.jpg" },
    { name: "D.William", role: "Advertising Chef", imgSrc: "/images/chefSection2.jpg" },
    { name: "Monalisa Holly", role: "Advertising Chef", imgSrc: "/images/chefSection1.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
        
      <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
       
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">Our Chef</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Our Chef</span>
            </p>
          </div>
        </div>
      </header>

      <main className="flex flex-wrap justify-center gap-6 p-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-black border-4 border-white shadow-lg w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-all duration-300 ease-in-out hover:scale-105 chef-card"
          >
            <div className="h-[256px] chef-img-container">
              <Image
                src={chef.imgSrc}
                alt={`Image of ${chef.name}`}
                width={400}
                height={256}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform chef-img"
              />
            </div>
            <div className="p-6 text-center">
              <h1 className="text-white text-lg font-semibold chef-name">{chef.name}</h1>
              <h3 className="text-[#FF9F0D] text-sm mt-2">{chef.role}</h3>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
