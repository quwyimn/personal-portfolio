import { Link } from 'react-router-dom'

function ProjectDetailLayout({ project }) {
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p>Project not found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Link to="/" className="text-sm font-medium text-sky-400 hover:text-sky-300">
            ← Back to Home
          </Link>
        </div>
      </div>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                {project.category}
              </p>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                {project.title}
              </h1>

              <p className="mb-6 text-lg leading-8 text-slate-300">
                {project.heroDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-500/20 bg-slate-900 px-3 py-1 text-sm text-sky-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/40">
              <img
                src={project.coverImage}
                alt={project.coverAlt}
                className="h-[340px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Project Overview</h2>
              <p className="leading-8 text-slate-300">{project.overview}</p>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">Problem Background</h2>
                <ul className="space-y-3 text-slate-300">
                  {project.problem.map((item, index) => (
                    <li key={index} className="leading-7">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">Approach</h2>
                <ul className="space-y-3 text-slate-300">
                  {project.approach.map((item, index) => (
                    <li key={index} className="leading-7">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-500/20 bg-slate-900 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">Results & Impact</h2>
                <ul className="space-y-3 text-slate-300">
                  {project.results.map((item, index) => (
                    <li key={index} className="leading-7">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Key Learnings</h2>
              <ul className="space-y-3 text-slate-300">
                {project.learnings.map((item, index) => (
                  <li key={index} className="leading-7">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetailLayout