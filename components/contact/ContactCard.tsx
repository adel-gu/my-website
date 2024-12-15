'use client';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../ui/card';

import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {
  title: string;
  icon: string;
  description: string;
  path: string;
};

const ContactCard = ({ title, icon, description, path }: Props) => {
  const handleEmailCopy = (title: string) => {
    if (title === 'Email') {
    }
  };
  return (
    <Link href={path} target="_blank">
      <Card className="bg-background transition-all border-none shadow-2xl hover:-translate-y-1.5 hover:bg-[#1a1a1a4d] ">
        <CardHeader className="pb-2">
          <CardTitle>
            <Image src={icon} alt={title} width={60} height={60} />
            {/* <Github className="text-whiteice w-[60px] h-[60px]" /> */}
          </CardTitle>
          <CardDescription>
            <p className="text-code text-whiteice text-2xl tracking-[0.2em]">
              {title}
            </p>
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-dovegray30">{description}</CardFooter>
      </Card>
    </Link>
  );
};
export default ContactCard;
