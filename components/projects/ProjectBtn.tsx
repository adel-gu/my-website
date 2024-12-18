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
    <div className="flex flex-col items-center justify-center">
      <button
        style={{ backgroundColor: `${active ? color : ''}` }}
        className="bg-mineshaft px-3 py-2 rounded-full transition-all"
        onClick={() => switchActiveProject(id)}
      >
        {id}
      </button>
      <div
        style={{ backgroundColor: `${active ? color : ''}` }}
        className={'bg-tundora w-0.5 h-[4.5rem] -50 transition-all'}
      />
    </div>
  );
};
export default ProjectBtn;
