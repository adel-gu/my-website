'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useState } from 'react';

type ProjectDetailsTypes = {
  title: string;
  subTitle: string;
  stack: string[];
  description: string;
  date: string;
  github: string;
  live: string;
  color: string;
  btnBg: string;
  btnBgHover: string;
  cardBg: string;
};

const ProjectDetails = ({
  title,
  subTitle,
  stack,
  description,
  date,
  github,
  live,
  color,
  btnBg,
  btnBgHover,
  cardBg,
}: ProjectDetailsTypes) => {
  const [hoveredId, setHoveredId] = useState('');

  return (
    <div className="relative -top-10 w-[70%] mx-auto">
      <Card
        style={{ background: cardBg, border: `1px solid ${color}` }}
        className="py-20 shadow-2xl transition-all"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-whiteice">{title}</CardTitle>
          <CardDescription className="text-gray">{subTitle}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-6">
          <div>
            {stack.map((s) => (
              <p
                key={s}
                className="font-Silkscreen text-[12px] font-normal uppercase text-whiteice text-right"
              >
                {s}
              </p>
            ))}
          </div>

          <div className="w-[600px] mx-auto text-center col-span-4">
            <p className="text-whiteice">{description}</p>
          </div>

          <p className="text-tundora flex items-end text-[12px]">{date}</p>
        </CardContent>

        <CardFooter className="w-fit mx-auto mt-12 gap-8 font-Silkscreen">
          <Button
            asChild
            style={{
              backgroundColor: `${hoveredId === '1' ? btnBgHover : btnBg}`,
            }}
            onMouseEnter={() => setHoveredId('1')}
            onMouseLeave={() => setHoveredId('')}
            className="transition-all"
          >
            <Link href={github}>Github »</Link>
          </Button>
          <Button
            asChild
            style={{
              backgroundColor: `${hoveredId === '2' ? btnBgHover : btnBg}`,
            }}
            onMouseEnter={() => setHoveredId('2')}
            onMouseLeave={() => setHoveredId('')}
            className="transition-all"
          >
            <Link href={live}>Live »</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ProjectDetails;
