import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="relative py-24">
      <div className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56">
        <h2 className="h2-bold">Projects</h2>
        <p className="regular-paragraph max-w-[835px]">
          I&apos;ve worked on a wide range of projects, from scalable web
          applications and reusable UI component libraries to backend APIs and
          microfrontend architectures. Here are some examples of my latest work:
        </p>
      </div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
