import { type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import PortfolioSection from './sections/PortfolioSection'
import ContactSection from './sections/ContactSection'
import SiteHeader from './components/SiteHeader'
import BackgroundCanvas from './components/BackgroundCanvas'
import SectionStack from './components/SectionStack'
import HeroSection from './sections/HeroSection'

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function App() {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen text-primary transition-colors duration-500 dark:text-primary-dark">
      <BackgroundCanvas />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10 lg:px-16">
        <SiteHeader />
        <main className="relative flex flex-1 flex-col gap-20">
          <SectionStack>
            <HeroSection />
            <AboutSection variants={sectionVariants} custom={1} />
            <ServicesSection variants={sectionVariants} custom={2} />
            <PortfolioSection variants={sectionVariants} custom={3} />
            <ContactSection variants={sectionVariants} custom={5} />
          </SectionStack>
        </main>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-surface/80 px-6 py-6 text-sm text-secondary shadow-card backdrop-blur-md transition-colors duration-500 dark:border-white/5 dark:bg-surface-dark/80 dark:text-secondary-dark md:flex-row md:items-center">
          <p>{t('footer.rights')}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="hover:text-accent transition-colors">
              {t('common.contactMe')}
            </a>
            <a href="/" className="hover:text-accent transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App