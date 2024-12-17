import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { socialLinks } from '@/constants/contacts';
import { div, ul } from 'framer-motion/client';

const Footer = () => {
  return (
    <footer className="flex flex-col xl:flex-row xl:justify-evenly gap-12 py-24 px-6">
      <Logo isLogoFooter />

      <ul className="flex flex-wrap gap-12">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id}>
            <Link href={socialLink.path}>
              <Image
                src={socialLink.icon}
                alt={socialLink.id}
                width={25}
                height={25}
              />
              <span className="text-code text-silverchalice text-base">
                {socialLink.id}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
