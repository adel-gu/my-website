import DotPattern from '../ui/dot-pattern';
import { skills } from '@/constants/skills';
import SkillCard from './SkillCard';

const About = () => {
  return (
    <section className="relative flex justify-center items-center px-6 py-24">
      <div className="z-10">
        <div className="space-y-8 md:text-center">
          <h2 className="h2-bold">About me</h2>
          <p className="max-w-[835px] regular-paragraph mx-auto">
            Hi 👋, I'm{' '}
            <span className="text-code text-yellow-600">Adel Guitoun</span>, a
            passionate software engineer with a knack for creating scalable,
            high-performance applications and reusable systems. With a strong
            foundation in <span className="text-green-700">frontend</span> and
            <span className="text-blue-600"> backend technologies</span>, I
            specialize in crafting solutions that are as impactful for{' '}
            <span className="text-orange-500">users</span> as they are efficient
            for <span className="text-purple-600">developers.</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-16 md:mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;
            return (
              <SkillCard
                key={skill.id}
                gradientColor={skill.gradientColor}
                assetBackground={skill.asset.background}
                titleBackground={skill.title.background}
                titleLabel={skill.title.label}
                content={skill.content}
              >
                <Icon className="w-4 h-4" />
              </SkillCard>
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
        className="dot-pattern opacity-50"
      />
    </section>
  );
};

export default About;
