"use client";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { Fragment, useState } from 'react'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            {showMenu &&
                <Menu
                close={() => setShowMenu(false)}
                show={showMenu}
                />}
            <div className='fixed z-10 w-full p-6'>
                <div
                    onClick={() => setShowMenu(!showMenu)}
                    className="rounded-full bg-black text-white w-fit ml-auto px-8 py-4 font-medium lg:text-lg cursor-pointer">
                    Menu
                </div>
            </div>
        </>
    )
}

export default Navbar

interface MenuProps {
    close: () => void;
    show: boolean
}

const Menu = ({ close, show }: MenuProps) => (
    // <Popover className="relative">
    <Transition
        as={Fragment}
        show
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
    >
        {/* <Popover.Panel
            focus
            className="absolute top-0 right-0 w-[85%] h-screen transition overflow-x-hidden lg:hidden z-20 md:hidden"
        > */}
    <div
            className='absolute top-0 right-0 h-screen z-20 bg-black text-white'
    >
        <div onClick={close} className='cursor-pointer bg-white text-black w-fit p-4 rounded-full'>Close</div>
        <ul className='capitalize flex flex-col gap4 md:gap-16 text-center font-bold text-lg md:text-6xl'>
            <li>HOME</li>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
            </div>
        {/* </Popover.Panel> */}
        </Transition>
)
{/* </Popover> */}