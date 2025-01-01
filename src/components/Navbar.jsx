'use client'

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Logo from "../assets/logo.png"

const items = [
    { name: 'Analytics', href: '#' },

]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [navbarBlur, setNavbarBlur] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavbarBlur(true);  // Apply blur when scrolling past 100px
            } else {
                setNavbarBlur(false); // Transparent when at top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBlur
                    ? 'backdrop-filter backdrop-blur-2xl'
                    : 'bg-transparent'
                    } `}
            >

                <nav aria-label="Global" className="flex h-20 items-center justify-between lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="./" className="">
                            <span className="sr-only">Vitruvians</span>
                            <img
                                alt="Vitruvians Logo"
                                src={Logo}
                                className=" h-16 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className=" inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <a href="./" className="text-sm font-semibold leading-6 text-slate-100">
                            HOME
                        </a>
                        <a href="./About" className="text-sm font-semibold leading-6 text-slate-100">
                            ABOUT US
                        </a>
                        <a href="./Gallery" className="text-sm font-semibold leading-6 text-slate-100">
                            GALLERY                    </a>
                        <a href="./Contact" className="text-sm font-semibold leading-6 text-slate-100">
                            SPORTS
                        </a>
                        <a href="./Contact" className="text-sm font-semibold leading-6 text-slate-100">
                            CULTURAL
                        </a>
                        <a href="./Contact" className="text-sm font-semibold leading-6 text-slate-100">
                            TECH
                        </a>
                        <a href="./Contact" className="text-sm font-semibold leading-6 text-slate-100">
                            MESS
                        </a>
                        <a href="./Contact" className="text-sm font-semibold leading-6 text-slate-100">
                            CONTACT
                        </a>
                        {/* <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-100 focus:outline-none" >
                            USEFUL LINKS
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-60 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-slate-100">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover> */}

                    </PopoverGroup>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center -mx-6 -my-6 justify-between">
                            <a href="#" className="">
                                <span className="sr-only">IRSCP</span>
                                <img
                                    alt=""
                                    src={Logo}
                                    className="h-20 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className=" rounded-md p-3 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                    >
                                        HOME
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                    >
                                        ABOUT US
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                    >
                                        CONTACT
                                    </a>
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50">
                                            USEFUL LINKS
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...items].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>

                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className={`${navbarBlur
                    ? 'fixed inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-[rgba(221,214,254,0.15)] to-transparent'
                    : ''
                    }`} ></div>
        </>
    )
}