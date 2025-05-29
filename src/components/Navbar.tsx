"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleNavBg);
    return () => window.removeEventListener("scroll", handleNavBg);
  });

  return (
    <nav
      className={`${
        navBg ? "bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 z-[1000] py-6 fixed w-full`}
    >
      <div className="flex items-center justify-between w-[85%] sm:w-[95%] xl:w-[80%] mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-yellow-400 flex items-center justify-center rounded-full size-6 lg:size-10 ">
            <FaPlaneDeparture className="text-white lg:size-6" />
          </div>
          <p className="text-sm ;g:text-lg font-semibold text-white">Travel</p>
        </Link>
        <div className="hidden md:flex items-center text-white md:gap-5 lg:gap-8 xl:gap-14 font-medium sm:text-sm lg:text-base">
          <Link
            href="/"
            className={`relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ${
              pathname === "/" ? "border-white" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/"
            className="relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300"
          >
            Destination
          </Link>
          <Link
            href="/"
            className="relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/"
            className="relative inline-block pb-1 hover:border-b-2 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "white",
              color: "black",
              ":hover": {
                bgcolor: "#D8D8D8",
                color: "#162556",
                transition: "all 0.3s ease",
              },
              fontSize: {
                sm: "12px",
                md: "14px",
                lg: "16px",
              },
              paddingX: {
                sm: "15px",
                md: "30px",
              },
            }}
          >
            Book Now
          </Button>
        </div>
        {/* Mobile menu toggle */}
        <div
          className="md:hidden text-white text-xl cursor-pointer z-50 select-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen && <TiThMenu fontSize={16} />}
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 transform transition-all duration-500 z-[1001] bg-black/70 w-full h-screen
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-[100%]"}
        `}
      >
        <div
          className={`flex flex-col items-start justify-center gap-5 fixed h-full transform transition-all duration-500 w-[70%] sm:w-[50%] text-end text-white font-medium z-[1002] bg-[#1038bbc2] px-10
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <Link
            href="/"
            className={`w-fit border-b-2 border-transparent ${
              pathname === "/" ? "border-white" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/models"
            className={`w-fit border-b-2 border-transparent ${
              pathname === "/models" ? "border-white" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Models
          </Link>
          <Link
            href="/pricing"
            className={`border-b-2 border-transparent ${
              pathname === "/pricing" ? "border-white" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/our-themes"
            className={`border-b-2 border-transparent ${
              pathname === "/our-style" ? "border-white" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Themes
          </Link>
          <Link
            href="/gallery"
            className={`border-b-2 border-transparent ${
              pathname === "/gallery" ? "border-white" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Book Now
          </Link>
          <div className="absolute top-4 right-4">
            <IoClose
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              fontSize={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
