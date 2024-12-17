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
      className="cursor-pointer bg-background w-fit border-none flex items-center justify-center py-2 px-2.5"
      gradientColor={gradientColor}
      gradientOpacity={0.25}
    >
      <p className="text-whiteice text-sm font-Silkscreen">{title}</p>
    </MagicCard>
  );
};
export default TechTag;
