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

  useEffect(() => {
    const handleYScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleYScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleYScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-center transition-all duration-1000 ease-out">
      <div className="pointer-events-auto relative w-full max-w-[1200px] md:rounded-full">
        <div
          className={`mt-0 w-full overflow-hidden bg-transparent py-5 transition-all duration-300 ease-out md:py-[9px] ${
            isScrolled && 'md:mt-[6px]'
          }`}
          style={{
            contain: 'paint',
          }}
        >
          <div
            className="absolute inset-0 transition-all duration-100 ease-out md:rounded-full"
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
            } absolute inset-0 bg-[#424242] transition-all duration-300 ease-out md:rounded-full`}
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
  <header className="relative z-50 flex items-center justify-between">
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
