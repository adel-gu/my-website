'use client';

const ProjectBtn = ({
  id,
  color,
  active,
  switchActiveProject,
}: {
  id: string;
  color: string;
  active: boolean;
  switchActiveProject: (id: string) => void;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        active ? 'font-bold text-background' : 'text-foreground'
      }`}
    >
      <button
        style={{ backgroundColor: `${active ? color : ''}` }}
        className="flex size-11 items-center justify-center rounded-full bg-mineshaft transition-all"
        onClick={() => switchActiveProject(id)}
      >
        {id}
      </button>
      <div
        style={{ backgroundColor: `${active ? color : ''}` }}
        className={'h-[4.5rem] w-0.5 bg-tundora transition-all'}
      />
    </div>
  );
};
export default ProjectBtn;
