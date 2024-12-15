import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { socialLinks } from '@/constants/contacts';
import { div, ul } from 'framer-motion/client';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <p className="mb-2 text-code">Built with ❤️</p>
        <Logo />
      </div>
      <ul className="flex items-center gap-16">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id}>
            <Link href={socialLink.path}>
              <Image
                src={socialLink.icon}
                alt={socialLink.id}
                width={30}
                height={30}
              />
              <span className="text-code">{socialLink.id}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
