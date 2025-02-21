"use client";

import Link from 'next/link';
import {usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();    
    return (
        <nav id="navBar" className="sticky top-0 z-50 flex flex-row h-[72px] bg-black/70 backdrop-blur-lg items-center">
            <div className="w-full max-w-md flex justify-between p-8 mx-auto">
                <Link href='/'><p className={pathname == "/" ? "text-blue-500" : "text-light-grey"}>Product</p></Link>
                <Link href='/'><p className={pathname == "/about" ? "text-blue-500" : "text-light-grey"}>About</p></Link>
                <Link href='/'><p className={pathname == "/contact" ? "text-blue-500" : "text-light-grey"}>Contact</p></Link>
            </div>
        </nav>
    )
}