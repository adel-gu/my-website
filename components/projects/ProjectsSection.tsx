import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="py-40">
      <div className="container pl-44">
        <h2 className="h2-bold">Projects</h2>
        <p className="max-w-[835px] regular-paragraph mt-8">
          With a strong foundation in the React ecosystem and a passion for
          crafting seamless user experiences, I've been building web
          applications that balance functionality and performance.
        </p>
      </div>

      <Projects />
    </section>
  );
};
export default ProjectsSection;
