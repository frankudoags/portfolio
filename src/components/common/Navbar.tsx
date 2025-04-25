"use client";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, XIcon } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
    return (
        <div className='fixed z-10 w-full p-6 flex items-end'>
            <Sheet>
                <SheetTrigger
                    className="hidden lg:block focus:ring-0 rounded-full bg-black text-white w-fit ml-auto px-8 py-4 font-medium lg:text-lg cursor-pointer">
                    Menu
                </SheetTrigger>
                <SheetTrigger
                    className="block lg:hidden focus:ring-0 rounded-full bg-black text-white w-fit ml-auto p-4 font-medium lg:text-lg cursor-pointer">
                    <MenuIcon className='w-4 h-4' />
                </SheetTrigger>
                <Menu />
            </Sheet>
        </div>

    )
}

export default Navbar

const Menu = () => (
    <SheetContent side="top">
        <div
            className='absolute top-0 right-0 h-screen w-full z-20 bg-black text-white'
        >
            <div className="w-full flex items-end">
                <SheetTrigger className='cursor-pointer bg-white text-black w-fit p-4 m-4 ml-auto rounded-full'>
                    <XIcon className='w-4 h-4' />
                </SheetTrigger>
            </div>
            <ul className='flex flex-col items-center justify-center lg:mt-0 space-y-6 text-center'>
                {links.map((link, index) => (
                    <li key={index} className="mt-0">
                        <MenuItem name={link.name} href={link.href} />
                    </li>
                ))}
            </ul>
        </div>
    </SheetContent>
)


const links = [
    { name: "home", href: "/" },
    { name: "work", href: "/" },
    { name: "about", href: "/" },
    { name: "blog", href: "/" },
    { name: "contact", href: "/" },
]

const MenuItem = ({ name, href }: { name: string; href: string }) => (
    <Link
        href={href}
        className="text-white uppercase font-bold text-[40px] md:text-[60px] lg:text-[80px] hover:underline hover:decoration-2 hover:decoration-white/50 transition-all duration-300"
    >

        {name}
    </Link>
);