import { slugs, techs } from '@/constants/skills';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import TechTag from './TechTag';

const Techs = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center px-6 py-24">
      <div className="relative">
        <div className="flex flex-col items-center justify-center rounded-lg bg-none gap-8 ">
          <p className="z-10 max-w-[850px] regular-paragraph md:text-center">
            Building effective and innovative solutions requires the right
            technologies. I leverage a carefully selected set of modern tools
            and frameworks to bring these solutions to life, including:
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2 md:justify-center md:items-center md:max-w-[600px] ">
            {techs.map((tech) => (
              <TechTag
                key={tech.label}
                title={tech.label}
                gradientColor={tech.bgColor}
              />
            ))}
          </div>

          <div>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern bottom-0 opacity-50  border"
      />
    </section>
  );
};
export default Techs;
