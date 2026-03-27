import SectionTitle from '../common/SectionTitle'

function CareerObjective() {
  return (
    <section id="career" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Career Objective" subtitle="Future Direction" />

        <div className="glass-card glow-border max-w-4xl rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            I am seeking opportunities to grow as an AI Engineer while continuously strengthening
            my skills in Python, model development, and AI deployment. My goal is to build
            real-world intelligent systems that deliver practical value, gain hands-on experience
            through meaningful projects, and steadily develop into a professional AI Engineer with
            strong technical depth and problem-solving ability.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareerObjective