import SectionTitle from '../common/SectionTitle'

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Certificates" subtitle="Credentials" />

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
          Add your certificates here later. You can show certificate names,
          issuing organizations, dates, and links if available.
        </div>
      </div>
    </section>
  )
}

export default Certificates