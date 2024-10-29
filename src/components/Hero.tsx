'use client'

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroBtn from './HeroBtn';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Plans', href: '#' },
  { name: 'Classes', href: '#' },
  { name: 'Facilities', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[url('./assets/gymfit2.jpg')] bg-cover bg-center border-accent border-b-8 " >
      <header className="absolute inset-x-0 top-0 z-50 shadow-md ">
        <nav aria-label="Global" className="flex items-center justify-between bg-primary opacity-95 p-6 lg:px-8 fixed w-full border-accent border-b-2 ">
          <div className="flex lg:flex-1">
            <a href="#" className="text-lg font-bold text-white">
              GymFit
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-accent"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-accent">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="text-lg font-bold text-primary">
                
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 border-2 border-accent">
              <div className="space-y-2 py-6 bg-primary opacity-100">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-accent hover:bg-gray-100 border-b-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 bg-primary">
                <a href="#" className="block  px-3 py-2.5 rounded-lg text-base font-semibold text-accent hover:bg-gray-100 ">
                  Log in
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative px-6 pt-20 lg:px-8  text-center">
        <div className="py-16 sm:py-24 lg:py-32">
          <h1 className="text-8xl  font-bold text-white tracking-tight leading-tight ">
            Unleash Your Inner Athlete
          </h1>
          <p className="mt-6 text-3xl text-gray-100 max-w-md mx-auto ">
            Achieve your fitness goals with personalized plans, tracking, and professional guidance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <HeroBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
