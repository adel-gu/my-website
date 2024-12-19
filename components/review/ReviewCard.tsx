import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MagicCard } from '../ui/magic-card';

const ReviewCard = ({
  img,
  name,
  username,
  body,
  bgGradientColor,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  bgGradientColor: string;
}) => {
  return (
    <MagicCard
      className="cursor-pointer border-none bg-background text-white"
      gradientColor={bgGradientColor}
      gradientOpacity={0.2}
    >
      <figure
        className={cn(
          'relative w-[650px] cursor-pointer overflow-hidden rounded-xl p-6',
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 line-clamp-3 text-base text-silverchalice">
          {body}
        </blockquote>
      </figure>
    </MagicCard>
  );
};
export default ReviewCard;
