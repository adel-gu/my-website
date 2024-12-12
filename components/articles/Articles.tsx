import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <section className="py-40 relative">
      <div className="container pl-44">
        <h2 className="h2-bold">Highlighted articles</h2>
        <p className="max-w-[835px] regular-paragraph mt-8">
          With a strong foundation in the React ecosystem and a passion for
          crafting seamless user experiences, I've been building web
          applications that balance functionality and performance.
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
