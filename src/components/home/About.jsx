import SectionTitle from '../common/SectionTitle'

function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="About Me" subtitle="Introduction" />

        <div className="glass-card glow-border max-w-4xl rounded-3xl p-6 sm:p-8">
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>
              I am passionate about Artificial Intelligence, Machine Learning, and Deep Learning,
              with a strong interest in building intelligent systems that can solve real-world problems.
            </p>

            <p>
              My work so far has focused on practical AI projects such as <span className="text-white">Aptos Sybil Detector</span>
              {' '}and <span className="text-white">VYN Logistics</span>, where I explored how machine learning can be applied
              to real use cases in blockchain and logistics.
            </p>

            <p>
              I enjoy combining technical implementation with analytical problem-solving, especially when
              working with data, model development, evaluation, and deployment-oriented workflows.
            </p>

            <p>
              Pursuing a degree in Information Technology, expected to graduate in 2027.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About