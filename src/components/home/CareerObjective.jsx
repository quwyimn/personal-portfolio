import SectionTitle from '../common/SectionTitle'

function CareerObjective({ content }) {
  return (
    <section id="career" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.career.title} subtitle={content.career.subtitle} />

        <div className="glass-card glow-border max-w-4xl rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            {content.career.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareerObjective