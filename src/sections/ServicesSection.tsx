import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSectionLayout } from '../hooks/useSectionLayout'

type ServicesSectionProps = {
  variants: Variants
  custom: number
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ variants, custom }) => {
  const { t } = useTranslation()
  const { sectionCard } = useSectionLayout()
  const services = useMemo(
    () => t('services.items', { returnObjects: true }) as string[],
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
      id="services"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
      className={`${sectionCard} relative overflow-hidden`}
    >
      <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-3xl font-semibold text-primary dark:text-primary-dark">
          {t('services.title')}
        </h2>
        <p className="text-sm uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
          Full-cycle digital services
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <motion.div
            key={service}
            whileHover={{ translateY: -4 }}
            className="rounded-2xl border border-white/10 bg-white/60 p-6 text-secondary shadow-inner transition-colors dark:border-white/5 dark:bg-white/5 dark:text-secondary-dark"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Service
            </span>
            <p className="mt-3 text-lg font-medium text-primary dark:text-primary-dark">
              {service}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ServicesSection

