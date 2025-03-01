"use client";

import Link from 'next/link';
import {usePathname } from "next/navigation";
import { useState } from 'react';
import { IoIosArrowDown} from 'react-icons/io';


export default function NavBar() {
    const pathname = usePathname();    
    const [isToggled, setIsToggled] = useState(false);

    return (
        <nav id="navBar" className="sticky top-0 z-50 flex flex-row h-[72px] bg-black/70 backdrop-blur-lg items-center">

        {/* Navbar Content */}
        <div className="flex justify-end md:justify-center items-center p-4 w-full md:max-w-md mx-auto">
          {/* Regular Menu */}
          <div className="hidden md:flex flex-row w-full justify-between">
            <Link href="/">
              <p className={pathname == "/" ? "text-blue-500" : "text-light-grey"}>Product</p>
            </Link>
            <Link href="/about">
              <p className={pathname == "/about" ? "text-blue-500" : "text-light-grey"}>About</p>
            </Link>
            <Link href="/contact">
              <p className={pathname == "/contact" ? "text-blue-500" : "text-light-grey"}>Contact</p>
            </Link>
          </div>
  
          {/* Mobile Toggle Button */}
          <button onClick={() => setIsToggled(!isToggled)} className="block md:hidden align-self-end px-4">
            <IoIosArrowDown
              color="white"
              size={24}
              className={`transition-transform duration-300 ${
                isToggled ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
  
        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-lg  overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-6 items-center justify-center  
            ${isToggled ? "max-h-screen opacity-100" : "max-h-0 opacity-0" } 
            ${isToggled ? "h-[220px]" : "h-[72px]"}` }
        >
          <Link href="/">
            <p className={pathname == "/" ? "text-blue-500" : "text-light-grey"} onClick={()=>setIsToggled(!isToggled)}>Product</p>
          </Link>
          <Link href="/about">
            <p className={pathname == "/about" ? "text-blue-500" : "text-light-grey"} onClick={()=>setIsToggled(!isToggled)}>About</p>
          </Link>
          <Link href="/contact">
            <p className={pathname == "/contact" ? "text-blue-500" : "text-light-grey"} onClick={()=>setIsToggled(!isToggled)}>Contact</p>
          </Link>
        </div>
      </nav>
        
    )
}