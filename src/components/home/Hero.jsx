import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImage from '../../../../personal-portfolio/src/assets/images/profile/if.jpg'

function Hero() {
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
            AI Engineer
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              <span className="premium-title">Hi, I&apos;m Huy.</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Highly motivated to grow in Artificial Intelligence, Machine Learning,
            and Deep Learning while building intelligent systems that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-2xl bg-sky-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-sky-400"
            >
              Explore Projects
            </a>

            <a
              href="/cv.pdf"
              className="rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:paper250805@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://github.com/quwyimn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/quoc-huy-tran-86892b3b9/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <MapPin size={16} />
              Ho Chi Minh City
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