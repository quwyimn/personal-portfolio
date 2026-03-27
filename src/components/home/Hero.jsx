import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import profileImage from '../../assets/images/profile/if.jpg'

function Hero({ content }) {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 md:pb-32 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.16),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.3),rgba(2,6,23,0.8))]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.08)] sm:text-sm">
            {content.hero.badge}
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            <span className="premium-title">{content.hero.title}</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {content.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-2xl bg-sky-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-sky-400"
            >
              {content.hero.exploreProjects}
            </a>

            <div
              className="relative"
              onMouseEnter={() => setCvOpen(true)}
              onMouseLeave={() => setCvOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCvOpen((prev) => !prev)}
                className="w-full rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400 sm:w-auto"
              >
                {content.hero.downloadCv}
              </button>

              <div
                className={`absolute left-0 top-full z-20 w-48 overflow-hidden rounded-b-2xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
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
                  {content.hero.cvEnglish}
                </a>
                <a
                  href="/cv_vi.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-sky-300"
                >
                  {content.hero.cvVietnamese}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:paper250805@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <Mail size={16} />
              {content.hero.email}
            </a>

            <a
              href="https://github.com/quwyimn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <FaGithub size={16} />
              {content.hero.github}
            </a>

            <a
              href="https://www.linkedin.com/in/quoc-huy-tran-86892b3b9/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <FaLinkedin size={16} />
              {content.hero.linkedin}
            </a>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <MapPin size={16} />
              {content.hero.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-sm">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-sky-500/10 blur-2xl" />
            <div className="glass-card glow-border relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-sky-950/40">
              <img
                src={profileImage}
                alt="Huy Tran profile"
                className="h-[320px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero