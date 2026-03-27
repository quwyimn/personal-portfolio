import SectionTitle from '../common/SectionTitle'

const skills = [
  'Artificial Intelligence (AI)',
  'Machine Learning',
  'Problem Solving',
  'Algorithms',
]

function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Skills" subtitle="Core Strengths" />

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-sky-500/20 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills