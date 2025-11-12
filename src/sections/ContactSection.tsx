import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSectionLayout } from '../hooks/useSectionLayout'

type ContactSectionProps = {
  variants: Variants
  custom: number
}

const ContactSection: React.FC<ContactSectionProps> = ({ variants, custom }) => {
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
      id="contact"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
      className={`${sectionCard} relative overflow-hidden`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-primary dark:text-primary-dark">
            {t('contact.title')}
          </h2>
          <p className="text-base text-secondary dark:text-secondary-dark">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col gap-4 text-sm text-secondary dark:text-secondary-dark">
            <a
              href="mailto:olena@example.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/60 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/5 dark:bg-white/5"
            >
              <Mail className="h-5 w-5 text-accent" aria-hidden />
              {t('contact.email')}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/60 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/5 dark:bg-white/5"
            >
              <Linkedin className="h-5 w-5 text-accent" aria-hidden />
              {t('contact.linkedIn')}
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/60 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/5 dark:bg-white/5"
            >
              <Github className="h-5 w-5 text-accent" aria-hidden />
              {t('contact.github')}
            </a>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-secondary dark:text-secondary-dark">
                <Send className="h-4 w-4 text-accent" aria-hidden />
                {t('contact.telegram')}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-secondary dark:text-secondary-dark">
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                {t('contact.whatsapp')}
              </span>
            </div>
          </div>
        </div>

        <form
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/70 p-6 shadow-inner transition-colors dark:border-white/5 dark:bg-white/5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              placeholder="Olena"
              className="w-full rounded-xl border border-white/30 bg-white/80 px-4 py-3 text-sm text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/10 dark:text-primary-dark"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full rounded-xl border border-white/30 bg-white/80 px-4 py-3 text-sm text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/10 dark:text-primary-dark"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-secondary dark:text-secondary-dark">
              {t('contact.form.message')}
            </label>
            <textarea
              rows={4}
              placeholder="Let's build something remarkable..."
              className="w-full rounded-xl border border-white/30 bg-white/80 px-4 py-3 text-sm text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/10 dark:text-primary-dark"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" aria-hidden />
            {t('contact.form.submit')}
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}

export default ContactSection

