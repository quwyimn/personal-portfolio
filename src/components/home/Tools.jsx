import SectionTitle from '../common/SectionTitle'

const tools = [
  'Python',
  'NumPy',
  'Pandas',
  'Scikit-learn',
  'LightGBM',
  'XGBoost',
  'FastAPI',
  'Jupyter Notebook',
  'Git',
  'GitHub',
  'Render',
]

function Tools() {
  return (
    <section id="tools" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Tools & Frameworks" subtitle="Technical Stack" />

        <div className="flex flex-wrap gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-sky-500/20 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200"
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