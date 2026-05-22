import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section id="work" className="section border-t border-line bg-bgAlt">
      <div className="container-px">
        <Title
          eyebrow="Selected work"
          title="Six products, live in production"
          description="Each of these is built, deployed and running today at vellmontservices.com."
        />

        <div className="mt-8 grid gap-5 sml:grid-cols-2 lgl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectsCard key={project.title} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
