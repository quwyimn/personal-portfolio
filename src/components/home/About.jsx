import SectionTitle from '../common/SectionTitle'

function About({ content }) {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.about.title} subtitle={content.about.subtitle} />

        <div className="glass-card glow-border max-w-4xl rounded-3xl p-6 sm:p-8">
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About