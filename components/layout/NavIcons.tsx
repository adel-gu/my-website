import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const NavIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://github.com/adel-gu"
        className="flex items-center text-solitude gap-1"
      >
        <Github />
        <span className="text-solitude text-xs">Github</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/adelguitoun/"
        className="flex items-center text-solitude gap-1"
      >
        <Linkedin />
        <span className="text-solitude text-xs mt">Linkedin</span>
      </Link>
    </div>
  );
};
export default NavIcons;
