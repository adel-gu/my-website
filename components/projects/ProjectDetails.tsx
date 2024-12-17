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
import { useMemo, useState } from 'react';

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

  const listStacks = useMemo(() => {
    return stack.length > 6 ? [...stack.slice(0, 6), 'and more...'] : stack;
  }, [stack]);

  return (
    <div className="relative -top-10 md:w-[95%] mx-auto 2xl:w-[75%]">
      <Card
        style={{ background: cardBg, border: `1px solid ${color}` }}
        className="py-20 shadow-2xl transition-all"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-whiteice">{title}</CardTitle>
          <CardDescription className="text-tundora">{subTitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 xl:grid xl:grid-cols-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 xl:flex-col xl:items-end xl:justify-center xl:self-start">
            {listStacks.map((s) => (
              <p
                key={s}
                className="font-Silkscreen text-[12px] font-normal uppercase text-whiteice text-right"
              >
                {s}
              </p>
            ))}
          </div>

          <div className="text-center md:col-span-4 xl:justify-self-start xl:self-start	">
            <p className="text-whiteice">{description}</p>
          </div>

          <p className="text-tundora text-[14px] xl:justify-self-start	xl:self-end">
            {date}
          </p>
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
