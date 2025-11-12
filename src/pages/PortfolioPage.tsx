import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BackgroundCanvas from '../components/BackgroundCanvas'
import SiteHeader from '../components/SiteHeader'
import SectionStack from '../components/SectionStack'
import PortfolioSection from '../sections/PortfolioSection'
import { useSectionLayout } from '../hooks/useSectionLayout'

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

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation()
  const { sectionCard } = useSectionLayout()

  return (
    <div className="relative min-h-screen text-primary transition-colors duration-500 dark:text-primary-dark">
      <BackgroundCanvas />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10 lg:px-16">
        <SiteHeader />
        <main className="relative flex flex-1 flex-col gap-12">
          <SectionStack>
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={sectionCard}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
                    {t('pages.portfolio.label')}
                  </p>
                  <h1 className="font-display text-4xl font-semibold text-primary dark:text-primary-dark md:text-5xl">
                    {t('pages.portfolio.heading')}
                  </h1>
                  <p className="mt-4 max-w-2xl text-secondary dark:text-secondary-dark">
                    {t('pages.portfolio.description')}
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
                  >
                    {t('pages.portfolio.backCta')}
                  </Link>
                </motion.div>
              </div>
            </motion.section>
            <PortfolioSection variants={sectionVariants} custom={1} />
          </SectionStack>
        </main>
        <footer className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-surface/80 px-6 py-6 text-sm text-secondary shadow-card backdrop-blur-md transition-colors duration-500 dark:border-white/5 dark:bg-surface-dark/80 dark:text-secondary-dark md:flex-row md:items-center">
          <p>{t('footer.rights')}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/#contact" className="hover:text-accent transition-colors">
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

export default PortfolioPage


