import { MagicCard } from '../ui/magic-card';

const TechTag = ({
  gradientColor,
  title,
}: {
  gradientColor: string;
  title: string;
}) => {
  return (
    <MagicCard
      className="flex w-fit cursor-pointer items-center justify-center border-none bg-background px-2.5 py-2"
      gradientColor={gradientColor}
      gradientOpacity={0.25}
    >
      <p className="font-Silkscreen text-sm text-whiteice">{title}</p>
    </MagicCard>
  );
};
export default TechTag;
