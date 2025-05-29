import React from "react";
import SearchBox from "../utilities/SearchBox";

export default function HeroSection() {
  return (
    <div className="relative h-[120vh] sm:[100vh] w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <video
        src="/images/hero.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute z-50 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center justify-center  w-full h-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-2 text-center text-white tracking-[0.7rem] font-bold uppercase">
              Plan & Enjoy The Trip
            </h1>
            <p className="md:text-base text-center text-white">
              Plan Your Trip Here with 1K+ users
            </p>
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}
