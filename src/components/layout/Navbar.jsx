import { useState } from 'react'

function Navbar({ content, language, setLanguage }) {
  const [open, setOpen] = useState(false)

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

          <a
            href="/cv.pdf"
            className="inline-flex rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20"
          >
            {content.nav.downloadCv}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-sky-400/40 lg:hidden"
        >
          {open ? 'Close' : 'Menu'}
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

            <a
              href="/cv.pdf"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20 md:hidden"
            >
              {content.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar