import { cn } from '@/lib/utils';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import { MagicCard } from '../ui/magic-card';
import { skills, slugs } from '@/constants/skills';

const About = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center">
      <div className="z-10">
        <div className="text-center space-y-8">
          <h2 className="h2-bold">About me</h2>
          <p className="max-w-[835px] regular-paragraph mx-auto">
            With a strong foundation in the React ecosystem and a passion for
            crafting seamless user experiences, I've been building web
            applications that balance functionality and performance.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;
            return (
              <MagicCard
                key={skill.id}
                className={`cursor-pointer bg-[#1a1a1a4d] w-[300px] p-5 border-none shadow-xl`}
                gradientColor={skill.gradientColor}
                gradientOpacity={0.25}
              >
                <div
                  className={`p-2 rounded-full grid items-center w-fit`}
                  style={{
                    color: `${skill.gradientColor}`,
                    backgroundColor: `${skill.asset.background}`,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div
                  className={`p-2 rounded-lg text-code text-whiteice w-fit mt-3 mb-4`}
                  style={{ backgroundColor: `${skill.title.background}` }}
                >
                  <h3>{skill.title.label}</h3>
                </div>

                <p className="text-whiteice">{skill.content}</p>
              </MagicCard>
            );
          })}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50 h-[900px]"
      />

      <div className="relative h-[600px] mt-24">
        <p className="z-10 max-w-[835px] regular-paragraph text-center mx-auto">
          I am flexible when it comes to technologies I love exploring and based
          on the project needs I pick the necessary stack
        </p>
        <div className="flex z-[-10] items-center justify-center rounded-lg bg-none mt-12">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default About;
