import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSectionLayout } from '../hooks/useSectionLayout'

type PortfolioItem = {
  title: string
  description: string
  link: string
}

type PortfolioSectionProps = {
  variants: Variants
  custom: number
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ variants, custom }) => {
  const { t } = useTranslation()
  const { sectionCard } = useSectionLayout()
  const portfolio = useMemo(
    () => t('portfolio.items', { returnObjects: true }) as PortfolioItem[],
    [t],
  )
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -40])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="portfolio"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={custom}
      className={`${sectionCard} relative overflow-hidden`}
    >
      <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-3xl font-semibold text-primary dark:text-primary-dark">
          {t('portfolio.title')}
        </h2>
        <p className="text-sm uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
          Selected projects
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {portfolio.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-6 shadow-card transition-all hover:shadow-xl dark:border-white/5 dark:bg-white/10"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
                Case Study
                <ExternalLink className="h-4 w-4" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">
                {project.title}
              </h3>
              <p className="text-sm text-secondary dark:text-secondary-dark">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

export default PortfolioSection

