"use client";

import { Navbar, TextInput } from "flowbite-react";

import Image from "next/image";

import { FaCartPlus, FaSearch } from "react-icons/fa";

import Logo from "../images/logo.webp";

import { Sora } from "next/font/google";

import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const sora = Sora({ subsets: ["latin"] });

const NavigationBar = () => {
  const count = useSelector((state: RootState) => state?.basket?.items);

  return (
    <Navbar fluid rounded className="border-none max-w-6xl mx-auto">
      <Navbar.Brand href="/" as={Link}>
        <Image src={Logo} alt="Logo" height={25} width={140} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>

      <div className="flex w-[50%] md:w-[30%] md:order-3 justify-end md:justify-around items-center">
        <TextInput
          icon={FaSearch}
          id="search"
          placeholder="Search"
          required
          type="text"
          className="hidden lg:block" 
        />

        <div
          className="relative flex p-3 bg-[#f1f1f1] rounded-3xl items-center justify-center  
          transform hover:scale-125 transition-transform duration-400 ease-in-out hover:cursor-pointer ml-2 md:ml-0"
        >
          <Link href="/cart">
            <FaCartPlus className="text-gray-500 text-2xl" />
            <span className="absolute -top-1 right-2 text-xs text-white bg-red-500 p-0.5 px-1 rounded-full flex items-center justify-center font-semibold">
              {count?.length}
            </span>
          </Link>
        </div>

        {/* Clerk User Management Button */}
        <UserButton afterSignOutUrl="/" />

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className={`${sora.className} text-xl`}>
        <Navbar.Link active href="/" as={Link}>
          Home
        </Navbar.Link>

        <Navbar.Link as={Link} href="/category/female">
          Female
        </Navbar.Link>

        <Navbar.Link href="/category/male" as={Link}>
          Male
        </Navbar.Link>
        <Navbar.Link href="/category/kids" as={Link}>
          Kids
        </Navbar.Link>
        <Navbar.Link href="/category/allproducts" as={Link}>
          All Products
        </Navbar.Link>

        <TextInput
          className="mt-4 flex lg:hidden"
          icon={FaSearch}
          id="search"
          placeholder="Search"
          required
          type="text"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;