'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const handleYScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      window.addEventListener('scroll', handleYScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleYScroll);
      };
    }, []);
  }

  return (
    <div className="fixed top-0 inset-x-0 z-50 pointer-events-none flex items-center justify-center transition-all ease-out duration-1000">
      <div className="pointer-events-auto w-full max-w-[1200px] relative md:rounded-full">
        <div
          className={`transition-all ease-out duration-300 py-5 md:py-[9px] overflow-hidden w-full bg-transparent mt-0 ${
            isScrolled && 'md:mt-[6px]'
          }`}
          style={{
            contain: 'paint',
          }}
        >
          <div
            className="absolute inset-0 transition-all ease-out duration-100 md:rounded-full"
            style={{
              ...(isScrolled && {
                backdropFilter: `blur(16px)`,
                WebkitBackdropFilter: `blur(16px)`,
              }),
            }}
          />
          <div
            className={`${
              isScrolled ? 'opacity-60' : 'opacity-0'
            } transition-all ease-out duration-300 bg-[#424242] absolute inset-0 md:rounded-full`}
          />

          <div className="mx-auto w-full px-6">
            <NavbarContent />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarContent = () => (
  <header className="relative flex items-center justify-between z-50">
    <NavIcons />
    <Logo />

    <div className="hidden md:block">
      <NavLinks />
    </div>

    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetClose />

        <NavLinks />
      </SheetContent>
    </Sheet>
  </header>
);

export default NavBar;
