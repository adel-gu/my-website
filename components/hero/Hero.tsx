import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative px-6 pb-32" style={{ contain: 'layout' }}>
      <div className="pt-44">
        <h1 className="h1-bold flex flex-col items-start md:items-center">
          <span>Crafting</span>
          <span>memorable user &</span>
          <span>developer experiences</span>
        </h1>
      </div>

      <div className="flex flex-col-reverse gap-8 mt-12 md:flex-row md:justify-center md:gap-20 lg:gap-32">
        <div className="flex flex-col items-start gap-4 w-fit">
          <p className="font-Silkscreen text-gray-400 text-xl md:text-2xl font-normal uppercase md:mt-8">
            adel.g · software engineer
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/adelguitoun/"
              target="_blank"
            >
              <AnimatedGradientText className="hover:cursor-pointer px-5 py-2 text-lg rounded-full">
                🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-400" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Start a collaboration
                </span>
              </AnimatedGradientText>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:flex-col">
          <p className="font-Silkscreen text-gray-400 text-xl font-normal uppercase">
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

      <div className="absolute -z-20 top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(900px_circle_at_top,#000,transparent)] opacity-50 pointer-events-none">
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

      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(#000_50%,transparent)] pointer-events-none">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
      </div>
    </section>
  );
};
export default Hero;
