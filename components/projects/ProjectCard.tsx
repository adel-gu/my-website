import Image from 'next/image';

const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="shadow-2xl mt-32 z-10 w-[350px] h-[400px] rounded-xl overflow-hidden">
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
