import SectionTitle from '../common/SectionTitle'

const achievements = [
  'Top 5 Student – Aptos Hackathon',
  'Praised for an innovative and practical solution – Lotus Hackathon',
]

function Achievements() {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Achievements" subtitle="Recognition" />

        <div className="grid gap-4">
          {achievements.map((item) => (
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