'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Add this component at the top of your file
const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/jollof.png",
      alt: "Delicious Pizza"
    },
    {
      src: "/mango.png",
      alt: "Fresh Juice"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] w-[300px] w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-xl shadow-x"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;