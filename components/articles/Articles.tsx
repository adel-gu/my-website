import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <section className="py-40 relative border">
      <div className="container pl-44">
        <h2 className="h2-bold">Highlighted articles</h2>
        <p className="max-w-[835px] regular-paragraph mt-8">
          I share insights and knowledge through articles focused on modern
          technologies, with a special emphasis on front-end development. From
          best practices to deep dives into frameworks and tools, these writings
          aim to educate and inspire developers at all levels.
        </p>
      </div>

      <div className="container px-44 mt-16">
        <ArticleCard />
      </div>

      <div className="absolute z-[-10] inset-0 projects-grid-pattern opacity-50" />
    </section>
  );
};
export default Articles;
