import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <section className="py-24 px-6 xl:px-56 relative">
      <div>
        <h2 className="h2-bold">Highlighted articles</h2>
        <p className="max-w-[835px] regular-paragraph mt-8">
          I share insights and knowledge through articles focused on modern
          technologies, with a special emphasis on front-end development. From
          best practices to deep dives into frameworks and tools, these writings
          aim to educate and inspire developers at all levels.
        </p>
      </div>

      <div className="mt-16">
        <ArticleCard />
      </div>

      <div className="absolute z-[-10] inset-0 projects-grid-pattern opacity-50" />
    </section>
  );
};
export default Articles;
