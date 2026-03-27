import SectionTitle from '../common/SectionTitle'
import ProjectCard from '../common/ProjectCard'
import { projects } from '../../data/projects'

function ProjectsPreview() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Featured Projects" subtitle="Selected Work" />

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          These two projects represent my strongest practical work in applying machine learning
          to real-world problems, from blockchain wallet analysis to logistics bottleneck detection.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview