import Image from 'next/image';

const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="shadow-2xl z-10 w-[350px] h-[400px] rounded-xl overflow-hidden md:mt-32">
      <Image
        src={src}
        alt={title}
        width={350}
        height={400}
        className="bg-center bg-cover size-full"
      />
    </div>
  );
};
export default ProjectCard;
