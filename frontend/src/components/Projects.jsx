import ProjectCard from './ProjectCard';
import { projects } from '../assets/data';
import SectionTitle from './SectionTitle';

function Projects() {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text={'projects'} />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
