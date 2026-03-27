function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-sm">
        {subtitle}
      </p>
      <h2 className="accent-line pt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        <span className="premium-title">{title}</span>
      </h2>
    </div>
  )
}

export default SectionTitle