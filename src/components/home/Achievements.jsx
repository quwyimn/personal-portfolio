import SectionTitle from '../common/SectionTitle'

function Achievements({ content }) {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.achievements.title} subtitle={content.achievements.subtitle} />

        <div className="grid gap-4">
          {content.achievements.items.map((item) => (
            <div
              key={item}
              className="glass-card glow-border lift-hover rounded-2xl p-6 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements