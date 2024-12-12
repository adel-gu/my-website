import About from '@/components/about/About';
import Articles from '@/components/articles/Articles';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Reviews from '@/components/review/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Articles />
      <Reviews />
    </>
  );
}
