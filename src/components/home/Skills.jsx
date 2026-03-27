import SectionTitle from '../common/SectionTitle'

function Skills({ content }) {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.skills.title} subtitle={content.skills.subtitle} />

        <div className="flex flex-wrap gap-4">
          {content.skills.items.map((skill) => (
            <div
              key={skill}
              className="glass-card glow-border rounded-2xl px-5 py-3 text-sm font-medium text-slate-200"
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