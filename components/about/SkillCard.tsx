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
      className={`w-[350px] cursor-pointer border-none bg-[#1a1a1a6c] p-5 shadow-xl`}
      gradientColor={gradientColor}
      gradientOpacity={0.25}
    >
      <div
        className={`grid w-fit items-center rounded-full p-2`}
        style={{
          color: `${gradientColor}`,
          backgroundColor: `${assetBackground}`,
        }}
      >
        {children}
      </div>

      <div
        className={`text-code mb-4 mt-3 w-fit rounded-lg p-2 text-whiteice`}
        style={{ backgroundColor: `${titleBackground}` }}
      >
        <h3>{titleLabel}</h3>
      </div>

      <p className="text-silverchalice">{content}</p>
    </MagicCard>
  );
};
export default SkillCard;
