import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import CareerObjective from '../components/home/CareerObjective'
import ProjectsPreview from '../components/home/ProjectsPreview'
import Skills from '../components/home/Skills'
import Tools from '../components/home/Tools'
import Achievements from '../components/home/Achievements'
import Contact from '../components/home/Contact'
import { homeContent } from '../data/homeContent'
import { getSavedLanguage, saveLanguage } from '../utils/language'

function Home() {
  const [language, setLanguage] = useState(getSavedLanguage())
  const content = homeContent[language]

  useEffect(() => {
    saveLanguage(language)
  }, [language])

  return (
    <div className="soft-grid relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="blur-orb left-[-120px] top-[120px] h-72 w-72 bg-sky-500" />
      <div className="blur-orb right-[-100px] top-[520px] h-80 w-80 bg-indigo-500" />
      <div className="blur-orb bottom-[120px] left-[20%] h-72 w-72 bg-cyan-500" />

      <Navbar content={content} language={language} setLanguage={setLanguage} />

      <main className="relative">
        <Hero content={content} />
        <About content={content} />
        <CareerObjective content={content} />
        <ProjectsPreview content={content} language={language} />
        <Skills content={content} />
        <Tools content={content} />
        <Achievements content={content} />
        <Contact content={content} />
      </main>

      <Footer />
    </div>
  )
}

export default Home