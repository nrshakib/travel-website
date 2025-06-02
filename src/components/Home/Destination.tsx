"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type DestinationItem = {
  [x: string]: string | StaticImport;
  imageUrl: string | StaticImport;
  country: string;
};

// Fix arrows to accept onClick from react-slick props
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className={`
      absolute top-1/2 z-10 -translate-y-1/2 bg-[#162456]
      text-white p-2 rounded-full shadow-lg cursor-pointer transition
      hover:scale-110 hover:bg-[#7180d1]
      left-[-10px] sm:left-[-15px] md:left-[-20px]
      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
      flex items-center justify-center
      focus:outline-none
    `}
    style={{ userSelect: "none" }}
  >
    <FiChevronLeft size={20} className="sm:text-xl md:text-2xl" />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className={`
      absolute top-1/2 z-10 -translate-y-1/2 bg-[#162456]
      text-white p-2 rounded-full shadow-lg cursor-pointer transition
      hover:scale-110 hover:bg-[#7180d1]
      right-[-10px] sm:right-[-15px] md:right-[-20px]
      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
      flex items-center justify-center
      focus:outline-none
    `}
    style={{ userSelect: "none" }}
  >
    <FiChevronRight size={20} className="sm:text-xl md:text-2xl" />
  </button>
);

export default function Destination() {
  const [destinationData, setDestinationData] = useState<DestinationItem[]>([]);

  useEffect(() => {
    fetch("/data/destinationData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDestinationData(data);
      })
      .catch((e) => console.error(e));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  if (!destinationData.length) {
    return <p className="text-center py-20">Loading destinations...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Destinations</h2>
        <p className="text-gray-500 mt-2">Explore Popular Destinations</p>
      </div>
      <Slider {...settings}>
        {destinationData.map((item, index: number) => (
          <div key={index} className="p-2 relative overflow-auto">
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.country || `Destination ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={index < 3}
              />
            </div>
            <p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 bg-opacity-50
                         text-white text-lg font-semibold px-4 py-1 rounded-md w-full max-w-[90%]
                         text-center"
            >
              {item.country}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
