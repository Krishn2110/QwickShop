"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <h1 onClick={()=>router.push('/')} className="font-bold text-2xl text-teal-800 cursor-pointer">QwikShop</h1>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="py-2 px-4 rounded-sm transition hover:bg-teal-600 hover:text-white">
          Home
        </Link>
        <Link href="/all-products" className="py-2 px-4 rounded-sm transition hover:bg-teal-600 hover:text-white">
          Shop
        </Link>
        <Link href="/" className="py-2 px-4 rounded-sm transition hover:bg-teal-600 hover:text-white">
          About Us
        </Link>
        <Link href="/" className="py-2 px-4 rounded-sm transition hover:bg-teal-600 hover:text-white">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;