import Project from "./Project";
import { projectsData } from "../projectsData";

const Projects = () => {

  return (
    <section>
      <div className="flex flex-col gap-y-24 pb-16">
        {/* Devolver array de projectos*/}
        {projectsData.map((item) => {
          return <Project key={item.id} object={item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
