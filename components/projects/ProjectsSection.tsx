import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="space-y-8 px-6 xl:px-56 mb-12 md:mb-0">
        <h2 className="h2-bold">Projects</h2>
        <p className="max-w-[835px] regular-paragraph">
          I've worked on a wide range of projects, from scalable web
          applications and reusable UI component libraries to backend APIs and
          microfrontend architectures.
        </p>
      </div>

      <Projects />

      <div className="absolute z-[-10] bottom-0 w-full h-48 projects-grid-pattern-bottom" />
    </section>
  );
};
export default ProjectsSection;
