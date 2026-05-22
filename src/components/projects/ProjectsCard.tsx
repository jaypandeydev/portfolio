import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../constants";

type ProjectsCardProps = Project & { index: number };

const ProjectsCard = ({ title, desc, tags, live, index }: ProjectsCardProps) => {
  return (
    <a
      href={live}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-xl border border-line bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ink"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted">
          {String(index).padStart(2, "0")}
        </span>
        <FiArrowUpRight className="text-lg text-muted transition-colors duration-200 group-hover:text-accent" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-inkSoft">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bgAlt px-2.5 py-1 text-xs text-inkSoft"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectsCard;
