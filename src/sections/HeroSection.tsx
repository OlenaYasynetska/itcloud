import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ExternalLink, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSectionLayout } from '../hooks/useSectionLayout'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

const HeroSection: React.FC = () => {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const { sectionCard } = useSectionLayout()
  const taglines = useMemo(
    () => t('common.taglineOptions', { returnObjects: true }) as string[],
    [t],
  )
  const [taglineIndex, setTaglineIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start 75%', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [60, -40])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (taglines.length === 0) {
      return
    }
    const interval = window.setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [taglines])

  return (
    <motion.section
      ref={heroRef}
      style={{ y: heroY }}
      id="hero"
      className={`relative overflow-hidden ${sectionCard}`}
    >
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-6 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col gap-6"
      >
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
          <span className="rounded-full border border-white/20 px-3 py-1 dark:border-white/10">
            {t('common.role')}
          </span>
          <AnimatePresence mode="wait">
            {mounted && taglines[taglineIndex] && (
              <motion.span
                key={taglines[taglineIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="rounded-full border border-white/20 px-3 py-1 text-xs tracking-[0.2em] text-secondary dark:border-white/10 dark:text-secondary-dark"
              >
                {taglines[taglineIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <h1 className="font-display text-4xl font-semibold tracking-tight text-primary dark:text-primary-dark md:text-5xl">
          {t('common.name')}
        </h1>
        <p className="text-lg leading-relaxed text-secondary dark:text-secondary-dark md:text-xl">
          {t('hero.greeting')}
        </p>

        <div className="flex flex-wrap gap-4">
          <MotionLink
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            to="/portfolio"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            {t('hero.ctaPortfolio')}
          </MotionLink>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
          >
            <Send className="h-4 w-4" aria-hidden />
            {t('hero.ctaContact')}
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection

