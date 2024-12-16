import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Link
        href="https://github.com/adel-gu"
        className="flex items-center justify-center gap-x-1.5 group"
        target="_blank"
      >
        <Image src="/github.svg" alt="github" width={25} height={25} />
        <span className="hidden text-xs text-white opacity-50 group-hover:opacity-100 transition md:inline">
          Github
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/adelguitoun/"
        className="flex items-center justify-center gap-x-1.5 group"
        target="_blank"
      >
        <Image src="/linkedin.svg" alt="linkedin" width={28} height={28} />
        <span className="hidden text-xs text-white opacity-50 group-hover:opacity-100 transition md:inline">
          LinkedIn
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;
