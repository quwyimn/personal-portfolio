function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Huy Tran. Personal Portfolio.</p>

        <div className="flex gap-5">
          <a href="mailto:paper250805@gmail.com" className="transition hover:text-sky-400">
            Email
          </a>
          <a
            href="https://github.com/quwyimn"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/quoc-huy-tran-86892b3b9/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer