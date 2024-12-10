import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text';
import AnimatedGridPattern from '../ui/animated-grid-pattern';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="pt-44">
        <h1 className="h1-bold flex flex-col items-center">
          <span>Crafting</span>
          <span>memorable user &</span>
          <span>developer experiences</span>
        </h1>
      </div>

      <div className="flex items-center gap-48 w-fit mx-auto mt-12 ">
        <div className="flex flex-col items-start gap-4 w-fit">
          <p className="font-Silkscreen text-gray text-[27px] font-normal uppercase">
            adel.g · software engineer
          </p>
          <div>
            <AnimatedGradientText className="hover:cursor-pointer px-5 py-2">
              🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray" />{' '}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Start collaboration
              </span>
            </AnimatedGradientText>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-Silkscreen text-gray text-[18px] font-normal uppercase">
            Building...
          </p>
          <p className="font-Silkscreen bg-celtic text-[18px] font-normal uppercase rounded-md px-2 w-fit">
            <span className="text-oceangreen">Well designed</span>
          </p>
          <p className="font-Silkscreen bg-downriver text-[18px] font-normal uppercase rounded-md px-2 w-fit">
            <span className="text-dodgerblue">well architected</span>
          </p>
          <p className="font-Silkscreen bg-antiquebronze text-[18px] font-normal uppercase rounded-md px-2 w-fit">
            <span className="text-foreground">and scalable</span>
          </p>
          <p className="font-Silkscreen bg-revolver text-[18px] font-normal uppercase rounded-md px-2 w-fit">
            <span className="text-amethyst">web apps</span>
          </p>
        </div>
      </div>

      <div className="absolute z-[-10] top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(900px_circle_at_top,white,transparent)] opacity-50">
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          colors={[
            'rgba(60, 177, 121, 1)',
            'rgba(157, 91, 210, 1)',
            'rgba(205, 43, 49, 1)',
            'rgba(189, 75, 0, 1)',
            'rgba(247, 206, 0, 1)',
            'rgba(250, 147, 78, 1)',
            'rgba(54, 158, 255, 1)',
          ]}
          className="h-[150%] inset-y-[-30%] inset-x-[4.5px]"
        />
      </div>

      <div className="absolute z-[-10] inset-0 grid-pattern opacity-50" />
    </section>
  );
};
export default Hero;
