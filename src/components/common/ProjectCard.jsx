import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <Link
      to={project.path}
      className="glass-card glow-border lift-hover group block overflow-hidden rounded-3xl"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.coverAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-300 backdrop-blur-md">
          {project.year}
        </div>
      </div>

      <div className="p-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
          {project.category}
        </p>

        <h3 className="mb-3 text-2xl font-semibold text-white">
          <span className="premium-title">{project.title}</span>
        </h3>

        <p className="mb-5 leading-7 text-slate-300">{project.shortDescription}</p>

        <div className="mb-6 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-500/20 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="font-semibold text-sky-400 transition group-hover:text-cyan-300">
          View Details →
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard