import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

function Contact({ content }) {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={content.contact.title} subtitle={content.contact.subtitle} />

        <div className="glass-card glow-border grid gap-4 rounded-3xl p-6 sm:p-8 md:grid-cols-2">
          <a
            href="mailto:paper250805@gmail.com"
            className="glass-card lift-hover rounded-2xl p-5 transition hover:border-sky-400/40"
          >
            <div className="mb-3 flex items-center gap-3 text-sky-400">
              <Mail size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">{content.contact.email}</p>
            </div>
            <p className="text-slate-200">paper250805@gmail.com</p>
          </a>

          <a
            href="tel:0384017934"
            className="glass-card lift-hover rounded-2xl p-5 transition hover:border-sky-400/40"
          >
            <div className="mb-3 flex items-center gap-3 text-sky-400">
              <Phone size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">{content.contact.phone}</p>
            </div>
            <p className="text-slate-200">0384017934</p>
          </a>

          <a
            href="https://github.com/quwyimn"
            target="_blank"
            rel="noreferrer"
            className="glass-card lift-hover rounded-2xl p-5 transition hover:border-sky-400/40"
          >
            <div className="mb-3 flex items-center gap-3 text-sky-400">
              <FaGithub size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">{content.contact.github}</p>
            </div>
            <p className="text-slate-200">github.com/quwyimn</p>
          </a>

          <a
            href="https://www.linkedin.com/in/quoc-huy-tran-86892b3b9/"
            target="_blank"
            rel="noreferrer"
            className="glass-card lift-hover rounded-2xl p-5 transition hover:border-sky-400/40"
          >
            <div className="mb-3 flex items-center gap-3 text-sky-400">
              <FaLinkedin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">{content.contact.linkedin}</p>
            </div>
            <p className="text-slate-200">{content.contact.linkedinText}</p>
          </a>

          <div className="glass-card rounded-2xl p-5 md:col-span-2">
            <div className="mb-3 flex items-center gap-3 text-sky-400">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">{content.contact.location}</p>
            </div>
            <p className="text-slate-200">{content.contact.locationText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact