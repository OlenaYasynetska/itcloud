import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Moon, Sun, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { i18n as I18nInstance } from 'i18next'
import { SUPPORTED_LANGUAGES } from '../i18n'
import { useTheme } from '../hooks/useTheme'
import logoLight from '../assets/logo/itcloud_light.png'
import logoDark from '../assets/logo/itcloud_dark.png'

type LanguageSelectorProps = {
  i18n: I18nInstance
  size?: 'regular' | 'compact'
}

const NAV_LINKS = [
  { href: '#about', labelKey: 'about.title' },
  { href: '#services', labelKey: 'services.title' },
  { href: '#portfolio', labelKey: 'portfolio.title' },
  { href: '#contact', labelKey: 'contact.title' },
] as const

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ i18n, size = 'regular' }) => {
  const paddingClass = size === 'compact' ? 'px-2.5' : 'px-3'

  return (
    <div className="flex items-center rounded-full border border-white/20 bg-white/40 p-1 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/10">
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = i18n.resolvedLanguage?.startsWith(lang.code)
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`rounded-full ${paddingClass} py-1 text-xs font-semibold transition-all ${
              isActive ? 'bg-accent text-white shadow-card' : 'text-secondary dark:text-secondary-dark'
            }`}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}

const SiteHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface/80 px-4 py-4 shadow-card backdrop-blur-md transition-colors duration-500 dark:border-white/5 dark:bg-surface-dark/80 md:px-6 md:gap-8">
      <div className="flex items-center gap-3 whitespace-nowrap md:gap-4">
        <div className="flex h-12 items-center justify-center rounded-xl px-3 text-sm font-semibold text-secondary transition-colors duration-500 dark:text-secondary-dark">
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Olena Yasynetska logo"
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-secondary dark:text-secondary-dark md:text-sm md:tracking-[0.2em]">
            {t('common.name')}
          </p>
          <p className="text-[0.7rem] text-secondary dark:text-secondary-dark md:text-sm">
            {t('common.role')}
          </p>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-end gap-6 desktop:flex">
        <nav className="flex items-center gap-4 text-sm font-medium text-secondary dark:text-secondary-dark">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <a key={href} href={href} className="transition-colors hover:text-accent">
              {t(labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSelector i18n={i18n} />
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 15 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/40 shadow-inner backdrop-blur transition-colors hover:shadow-card dark:border-white/10 dark:bg-white/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {theme === 'light' ? (
                  <Sun className="h-5 w-5 text-accent" aria-hidden />
                ) : (
                  <Moon className="h-5 w-5 text-accent" aria-hidden />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {t('common.contact')}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3 desktop:hidden">
        <LanguageSelector i18n={i18n} size="compact" />
        <motion.button
          type="button"
          onClick={toggleTheme}
          whileTap={{ scale: 0.9, rotate: 15 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/40 shadow-inner backdrop-blur transition-colors hover:shadow-card dark:border-white/10 dark:bg-white/10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {theme === 'light' ? (
                <Sun className="h-5 w-5 text-accent" aria-hidden />
              ) : (
                <Moon className="h-5 w-5 text-accent" aria-hidden />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/40 shadow-inner backdrop-blur transition-colors hover:shadow-card dark:border-white/10 dark:bg-white/10"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <X className="h-5 w-5 text-secondary dark:text-secondary-dark" />
          ) : (
            <Menu className="h-5 w-5 text-secondary dark:text-secondary-dark" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mt-3 space-y-4 rounded-2xl border border-white/10 bg-surface/95 px-4 py-4 shadow-card backdrop-blur-md dark:border-white/5 dark:bg-surface-dark/95 desktop:hidden"
          >
            <nav className="flex flex-col gap-3 text-sm font-medium text-secondary dark:text-secondary-dark">
              {NAV_LINKS.map(({ href, labelKey }) => (
                <a
                  key={href}
                  href={href}
                  className="transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(labelKey)}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {t('common.contact')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default SiteHeader

