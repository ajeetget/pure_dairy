import { useState, useEffect } from "react";
import slider1 from '../assets/images/dairy-slider1.jpg';
import slider2 from '../assets/images/dairy-slider2.jpg';
import slider3 from '../assets/images/dairy-slider3.jpg'

export default function Hero() {
  const slides = [
    {
      image:slider1,
      title: "Pure & Fresh Milk",
    },
    {
      image:slider2,
      title: "Farm Fresh Dairy Products",
    },
    {
      image:slider3,
      title: "Healthy & Natural Goodness",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
