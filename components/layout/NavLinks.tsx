import Link from 'next/link';

const NavLinks = () => {
  return (
    <nav className="flex flex-col gap-8 mt-16 font-Silkscreen text-3xl md:flex-row md:mt-0 md:text-sm">
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Projects
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Blog
      </Link>
    </nav>
  );
};
export default NavLinks;
