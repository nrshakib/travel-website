"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-blue-950 transition-all duration-200 z-[1000] py-6">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-yellow-400 flex items-center justify-center rounded-full size-6 sm:size-10 ">
            <FaPlaneDeparture className="text-white sm:size-6" />
          </div>
          <p className="text-sm sm:text-lg font-semibold text-white">Travel</p>
        </Link>
        <div className="hidden lg:flex items-center text-white lg:gap-14 font-medium">
          <Link
            href="/"
            className={`hover:border-b-2 pb-1 border-transparent hover:border-b-yellow-300 ${
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
        <div className="hidden lg:block">
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "white",
              color: "black",
              ":hover": {
                bgcolor: "gray",
                color: "white",
                transition: "all 0.3s ease",
              },
              paddingX: {
                md: "30px",
              },
            }}
          >
            Book Now
          </Button>
        </div>
        {/* Mobile menu toggle */}
        <div
          className="lg:hidden text-white text-xl cursor-pointer z-50 select-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoClose fontSize={16} />
          ) : (
            <TiThMenu fontSize={16} />
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed top-22 right-[5%] bg-gradient-to-r from-[#521791] to-[#C43EF9] bg-opacity-95 rounded-2xl p-5 space-y-2 text-white font-medium shadow-lg z-50
          w-[80vw] max-w-[300px] transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col gap-2 text-end text-white font-medium">
            <Link
              href="/"
              className={`border-b-2 border-transparent hover:border-b-fuchsia-400 ${
                pathname === "/" ? "border-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/models"
              className={`border-b-2 border-transparent hover:border-b-fuchsia-400 ${
                pathname === "/models" ? "border-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Models
            </Link>
            <Link
              href="/pricing"
              className={`border-b-2 border-transparent hover:border-b-fuchsia-400 ${
                pathname === "/pricing" ? "border-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/our-themes"
              className={`border-b-2 border-transparent hover:border-b-fuchsia-400 ${
                pathname === "/our-style" ? "border-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Themes
            </Link>
            <Link
              href="/gallery"
              className={`border-b-2 border-transparent hover:border-b-fuchsia-400 ${
                pathname === "/gallery" ? "border-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
