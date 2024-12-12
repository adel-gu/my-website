import DotPattern from '../ui/dot-pattern';
import { reviews } from '@/constants/reviews';
import ReviewCard from './ReviewCard';

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3);

const Reviews = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center">
      <div className="z-10">
        <div className="text-center space-y-8">
          <h3 className="h3-bold">Heartfelt Words from Incredible People</h3>
        </div>

        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg pt-16 pb-20 gap-5">
          <div className="flex gap-5">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </div>

          <div className="flex gap-5">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </div>
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};
export default Reviews;
