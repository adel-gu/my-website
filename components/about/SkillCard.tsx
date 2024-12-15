import React from 'react';
import { MagicCard } from '../ui/magic-card';

type SkillCardProps = {
  gradientColor: string;
  assetBackground: string;
  titleBackground: string;
  titleLabel: string;
  content: string;
  children: React.ReactNode;
};

const SkillCard = ({
  gradientColor,
  assetBackground,
  titleBackground,
  titleLabel,
  content,
  children,
}: SkillCardProps) => {
  return (
    <MagicCard
      className={`cursor-pointer bg-[#1a1a1a4d] w-[300px] p-5 border-none shadow-xl`}
      gradientColor={gradientColor}
      gradientOpacity={0.25}
    >
      <div
        className={`p-2 rounded-full grid items-center w-fit`}
        style={{
          color: `${gradientColor}`,
          backgroundColor: `${assetBackground}`,
        }}
      >
        {children}
      </div>

      <div
        className={`p-2 rounded-lg text-code text-whiteice w-fit mt-3 mb-4`}
        style={{ backgroundColor: `${titleBackground}` }}
      >
        <h3>{titleLabel}</h3>
      </div>

      <p className="text-whiteice">{content}</p>
    </MagicCard>
  );
};
export default SkillCard;
