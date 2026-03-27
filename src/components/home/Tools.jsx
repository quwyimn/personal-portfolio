import SectionTitle from '../common/SectionTitle'

function Tools({ content }) {
  return (
    <section id="tools" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.tools.title} subtitle={content.tools.subtitle} />

        <div className="flex flex-wrap gap-4">
          {content.tools.items.map((tool) => (
            <div
              key={tool}
              className="glass-card glow-border rounded-2xl px-5 py-3 text-sm font-medium text-slate-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools