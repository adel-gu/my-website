'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 font-Silkscreen">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Projects
      </Link>

      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        Blog
      </Link>
    </nav>
  );
};
export default NavLinks;
