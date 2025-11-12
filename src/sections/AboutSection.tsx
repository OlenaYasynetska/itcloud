import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSectionLayout } from '../hooks/useSectionLayout'

type AboutSectionProps = {
  variants: Variants
  custom: number
}

const AboutSection: React.FC<AboutSectionProps> = ({ variants, custom }) => {
  const { t } = useTranslation()
  const { sectionCard } = useSectionLayout()
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
      id="about"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
      className={`${sectionCard} relative overflow-hidden`}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-primary dark:text-primary-dark">
            {t('about.title')}
          </h2>
          <p className="text-base leading-relaxed text-secondary dark:text-secondary-dark">
            {t('about.description')}
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
            {t('about.certification')}
          </p>
        </div>
    <div className="rounded-2xl border border-dashed border-accent/30 bg-accent/5 p-6 text-sm text-secondary dark:text-secondary-dark">
          <p>
            {t('common.name')} • {t('common.role')}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-primary dark:text-primary-dark">
              Tech Stack:
            </span>{' '}
            React, TypeScript, Node.js, Express, Tailwind CSS, Framer Motion, Cloud
            Infrastructure.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection

