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

type Props = {
  title: string;
  icon: string;
  description: string;
  path: string;
};

const ContactCard = ({ title, icon, description, path }: Props) => {
  return (
    <Link href={path} target="_blank">
      <Card className="border-none bg-background shadow-2xl transition-all hover:-translate-y-1.5 hover:bg-[#1a1a1a4d] ">
        <CardHeader className="pb-2">
          <CardTitle>
            <Image src={icon} alt={title} width={60} height={60} />
          </CardTitle>
          <CardDescription>
            <p className="text-code text-2xl tracking-[0.2em] text-white">
              {title}
            </p>
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-gray-400">{description}</CardFooter>
      </Card>
    </Link>
  );
};
export default ContactCard;
