import { useState } from 'react'

function Navbar({ content, language, setLanguage }) {
  const [open, setOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)

  const navItems = [
    { label: content.nav.home, href: '#home' },
    { label: content.nav.about, href: '#about' },
    { label: content.nav.career, href: '#career' },
    { label: content.nav.projects, href: '#projects' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.tools, href: '#tools' },
    { label: content.nav.achievements, href: '#achievements' },
    { label: content.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-base font-bold tracking-wide text-white sm:text-lg">
          Huy Tran
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'en'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('vi')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'vi'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              VI
            </button>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCvOpen(true)}
            onMouseLeave={() => setCvOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCvOpen((prev) => !prev)}
              className="inline-flex rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20"
            >
              {content.nav.downloadCv}
            </button>

            <div
              className={`absolute right-0 top-full z-30 w-44 overflow-hidden rounded-b-2xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                cvOpen
                  ? 'pointer-events-auto opacity-100 translate-y-0'
                  : 'pointer-events-none opacity-0 -translate-y-1'
              }`}
            >
              <a
                href="/cv_en.pdf"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-sky-300"
              >
                {content.nav.cvEnglish}
              </a>
              <a
                href="/cv_vi.pdf"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-sky-300"
              >
                {content.nav.cvVietnamese}
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-sky-400/40 lg:hidden"
        >
          {open ? content.nav.close : content.nav.menu}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <div className="mb-4 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex-1 px-3 py-2 text-sm font-semibold transition ${
                  language === 'en'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-300 hover:text-sky-300'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('vi')}
                className={`flex-1 px-3 py-2 text-sm font-semibold transition ${
                  language === 'vi'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-300 hover:text-sky-300'
                }`}
              >
                VI
              </button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 md:hidden">
              <button
                type="button"
                onClick={() => setCvOpen((prev) => !prev)}
                className="inline-flex w-full justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20"
              >
                {content.nav.downloadCv}
              </button>

              {cvOpen && (
                <div className="mt-2 grid gap-2">
                  <a
                    href="/cv-en.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                  >
                    {content.nav.cvEnglish}
                  </a>

                  <a
                    href="/cv-vi.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                  >
                    {content.nav.cvVietnamese}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar