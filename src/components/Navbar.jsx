import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBlur(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          navbarBlur ? 'backdrop-blur-3xl' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Global"
          className="flex h-20 items-center justify-between px-4 lg:px-8"
        >
          <div className="flex items-center">
            <a href="./" className="flex items-center">
              <img
                alt="Vitruvians Logo"
                src={Logo}
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-3 text-slate-100"
              aria-label="Open main menu"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="./"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              HOME
            </a>
            <a
              href="./Gallery"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              GALLERY
            </a>
            <a
              href="./Mess"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              MESS
            </a>
            <a
              href="./Sports"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              SPORTS
            </a>
            <a
              href="./Cultural"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              CULTURAL
            </a>
            <a
              href="./Tech"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              TECH
            </a>
            <a
              href="./About"
              className="text-sm font-semibold leading-6 text-slate-100 hover:text-blue-400"
            >
              ABOUT US
            </a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Background overlay */}
          <div
            className={`fixed inset-0 bg-gray-900/50 transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Sliding panel */}
          <div
            style={{
              transform: mobileMenuOpen
                ? 'translateX(0)'
                : 'translateX(100%)',
              transition: 'transform 0.5s ease-in-out',
            }}
            className="fixed inset-y-0 right-0 bg-black/5 backdrop-blur-xl shadow-xl p-5 text-slate-100 w-72 h-full"
          >
            <div className="flex items-center justify-end mb-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-3 text-slate-100"
                aria-label="Close menu"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-center">
              <a
                href="./"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                HOME
              </a>
              <a
                href="./Gallery"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                GALLERY
              </a>
              <a
                href="./Mess"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                MESS
              </a>
              <a
                href="./Sports"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                SPORTS
              </a>
              <a
                href="./Cultural"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                CULTURAL
              </a>
              <a
                href="./Tech"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                TECH
              </a>
              <a
                href="./About"
                className="block w-full rounded-lg px-3 py-4 text-lg font-semibold hover:bg-gray-700/30"
              >
                ABOUT US
              </a>
            </div>
          </div>
        </Dialog>
      </header>
    </>
  );
}
