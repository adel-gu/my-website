import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MagicCard } from '../ui/magic-card';

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <MagicCard className="cursor-pointer bg-transparent border-none p-0 shadow-2xl text-white">
      <figure
        className={cn(
          'relative w-64 cursor-pointer overflow-hidden rounded-xl p-4',
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
            <p className="text-xs font-medium text-gray">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
      </figure>
    </MagicCard>
  );
};
export default ReviewCard;
