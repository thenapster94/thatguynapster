import { classNames } from "@/libs";

export const ProjectNavigationItem = ({
  name,
  currentProject,
  index,
  setCurrentProject,
}: {
  name: string;
  currentProject: number;
  index: number;
  setCurrentProject: (index: number) => void;
}) => (
  <div
    className="flex flex-col w-full justify-end min-h-[30px] cursor-pointer"
    onClick={() => setCurrentProject(index)}
  >
    <p className="text-black font-semibold truncate">
      {currentProject === index && name}
    </p>
    <div
      className={classNames(
        "h-1.5 w-full",
        currentProject === index ? "bg-black" : "bg-[#C4C4C4]"
      )}
    ></div>
  </div>
);
