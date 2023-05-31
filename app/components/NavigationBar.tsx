"use client";

import { Navbar, TextInput } from "flowbite-react";
import Image from "next/image";

import { FaCartPlus, FaSearch } from "react-icons/fa"; 
import Logo from "../images/logo.webp";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const NavigationBar = () => {
  return (
    <Navbar fluid rounded className="border-none">
      <Navbar.Brand href="/">
        <Image src={Logo} alt="Logo" height={25} width={140} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>

      <div className="flex w-[50%] md:w-[30%] md:order-2 justify-end md:justify-around items-center">
        <TextInput
          icon={FaSearch}
          id="search"
          placeholder="Search"
          required
          type="text"
        />
        <div
          className="relative flex p-3 bg-[#f1f1f1] rounded-3xl items-center justify-center 
          transform hover:scale-125 transition-transform duration-400 ease-in-out hover:cursor-pointer ml-2 md:ml-0"
        >
          <FaCartPlus className="text-gray-500 text-2xl" />
          <span className="absolute top-0 right-5 text-xs text-white bg-red-500 w-18 h-18 rounded-full flex items-center justify-center font-semibold">
            0
          </span>
        </div>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className={`${sora.className} text-xl`}>
        <Navbar.Link active href="/navbars">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">Female</Navbar.Link>
        <Navbar.Link href="/navbars">Male</Navbar.Link>
        <Navbar.Link href="/navbars">Kids</Navbar.Link>
        <Navbar.Link href="/navbars">All Products</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
