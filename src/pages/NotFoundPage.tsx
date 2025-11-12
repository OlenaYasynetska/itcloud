import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BackgroundCanvas from '../components/BackgroundCanvas'
import SectionStack from '../components/SectionStack'
import SiteHeader from '../components/SiteHeader'
import { useSectionLayout } from '../hooks/useSectionLayout'

const NotFoundPage: React.FC = () => {
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
              className={`${sectionCard} text-center`}
            >
              <h1 className="font-display text-5xl font-semibold text-primary dark:text-primary-dark md:text-6xl">
                404
              </h1>
              <p className="mt-4 text-lg text-secondary dark:text-secondary-dark">
                {t('pages.notFound.title')}
              </p>
              <p className="mt-2 text-secondary dark:text-secondary-dark">
                {t('pages.notFound.description')}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex"
              >
                <Link
                  to="/"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {t('pages.notFound.cta')}
                </Link>
              </motion.div>
            </motion.section>
          </SectionStack>
        </main>
      </div>
    </div>
  )
}

export default NotFoundPage


