'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-8 mt-16 font-Silkscreen text-3xl md:flex-row md:mt-0 md:text-sm">
      <Link
        className={`link ${
          pathname === '/' ? 'active' : ''
        } py-4 md:py-0 md:hover:opacity-70`}
        href="/"
      >
        Projects
      </Link>

      <Link
        className={`link ${
          pathname === '/' ? 'active' : ''
        } py-4 md:py-0 md:hover:opacity-70`}
        href="/about"
      >
        Blog
      </Link>
    </nav>
  );
};
export default NavLinks;
