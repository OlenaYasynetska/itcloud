import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const SUPPORTED_LANGUAGES = [
  { code: 'uk', label: 'UA' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

const resources = {
  uk: {
    translation: {
      common: {
        name: 'Олена Ясинецька',
        role: 'Web Developer & IT Consultant',
        contact: 'Контакт',
        portfolio: 'Портфоліо',
        contactMe: 'Звʼяжіться зі мною',
        taglineOptions: [
          'Web & IT Solutions with a Human Touch',
          'Modern Digital Development & Consulting',
          'Empowering Businesses through Code & Cloud',
          'IT Consulting. Web Development. Cloud Expertise.',
        ],
      },
      hero: {
        greeting:
          'Привіт! Я — Олена Ясинецька, веб-розробниця та IT-консультантка. Створюю сучасні веб-рішення, допомагаю компаніям автоматизувати бізнес-процеси та покращити їхню онлайн-присутність.',
        ctaPortfolio: 'Портфоліо',
        ctaContact: 'Контакт',
      },
      about: {
        title: 'Про мене',
        description:
          'Маю досвід у фронтенд- та бекенд-розробці (React, Node.js, Express). Спеціалізуюсь на побудові адаптивних, швидких і масштабованих веб-додатків. Також консультую з IT-інфраструктури та налаштування CRM.',
        certification: 'Сертифікація: Google Ads Search Certification.',
      },
      services: {
        title: 'Послуги',
        items: [
          'Розробка веб-сайтів і застосунків',
          'IT-аудит та консалтинг',
          'Налаштування CRM',
          'SEO та аналітика',
          'Підтримка та оптимізація',
        ],
      },
      portfolio: {
        title: 'Проекти',
        items: [
          {
            title: 'UGS Informationssystem — ugs-info.at',
            description: 'Мультишарова архітектура, висока масштабованість.',
            link: 'https://ugs-info.at',
          },
          {
            title: 'Pet Shop Web App — pet-shop-frontend-mauve.vercel.app',
            description:
              'Повноцінний веб-застосунок: React (frontend) + Node.js / Express (backend) через REST API.',
            link: 'https://pet-shop-frontend-mauve.vercel.app',
          },
        ],
      },
      reviews: {
        title: 'Відгуки',
        placeholder: 'Скоро тут зʼявляться відгуки клієнтів.',
      },
      contact: {
        title: 'Контакти',
        subtitle: 'Готові обговорити проект? Напишіть або зателефонуйте:',
        email: 'Email',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        form: {
          name: 'Імʼя',
          email: 'Email',
          message: 'Повідомлення',
          submit: 'Надіслати',
        },
      },
      footer: {
        rights: '© 2025 Olena Yasynetska',
        privacy: 'Політика конфіденційності',
      },
    },
  },
  en: {
    translation: {
      common: {
        name: 'Olena Yasynetska',
        role: 'Web Developer & IT Consultant',
        contact: 'Contact',
        portfolio: 'Portfolio',
        contactMe: 'Contact me',
        taglineOptions: [
          'Web & IT Solutions with a Human Touch',
          'Modern Digital Development & Consulting',
          'Empowering Businesses through Code & Cloud',
          'IT Consulting. Web Development. Cloud Expertise.',
        ],
      },
      hero: {
        greeting:
          "Hi! I'm Olena Yasynetska, a web developer and IT consultant. I create modern web solutions, help businesses automate their workflows, and improve their online presence.",
        ctaPortfolio: 'Portfolio',
        ctaContact: 'Contact me',
      },
      about: {
        title: 'About',
        description:
          'I have experience in frontend and backend development (React, Node.js, Express). I specialize in building responsive, fast, and scalable web applications. I also provide IT consulting and CRM setup services.',
        certification: 'Certification: Google Ads Search Certification.',
      },
      services: {
        title: 'Services',
        items: [
          'Website & Web App Development',
          'IT Audit & Consulting',
          'CRM Setup',
          'SEO & Analytics',
          'Support & Optimization',
        ],
      },
      portfolio: {
        title: 'Portfolio',
        items: [
          {
            title: 'UGS Information System — ugs-info.at',
            description: 'Multi-layer architecture built for scalability.',
            link: 'https://ugs-info.at',
          },
          {
            title: 'Pet Shop Web App — pet-shop-frontend-mauve.vercel.app',
            description:
              'Full-stack web app: React frontend with a Node.js/Express REST API backend.',
            link: 'https://pet-shop-frontend-mauve.vercel.app',
          },
        ],
      },
      reviews: {
        title: 'Reviews',
        placeholder: 'Client testimonials will be added here soon.',
      },
      contact: {
        title: 'Contact',
        subtitle: "Ready to discuss your project? Let's connect:",
        email: 'Email',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send',
        },
      },
      footer: {
        rights: '© 2025 Olena Yasynetska',
        privacy: 'Privacy Policy',
      },
    },
  },
  de: {
    translation: {
      common: {
        name: 'Olena Yasynetska',
        role: 'Webentwicklerin & IT-Beraterin',
        contact: 'Kontakt',
        portfolio: 'Projekte',
        contactMe: 'Kontakt aufnehmen',
        taglineOptions: [
          'Web & IT Solutions with a Human Touch',
          'Modern Digital Development & Consulting',
          'Empowering Businesses through Code & Cloud',
          'IT Consulting. Web Development. Cloud Expertise.',
        ],
      },
      hero: {
        greeting:
          'Hallo! Ich bin Olena Yasynetska, Webentwicklerin und IT-Beraterin. Ich entwickle moderne Weblösungen, helfe Unternehmen bei der Automatisierung von Prozessen und stärke ihre Online-Präsenz.',
        ctaPortfolio: 'Projekte',
        ctaContact: 'Kontakt',
      },
      about: {
        title: 'Über mich',
        description:
          'Ich habe Erfahrung in Frontend- und Backend-Entwicklung (React, Node.js, Express). Ich spezialisiere mich auf die Entwicklung reaktionsfähiger, schneller und skalierbarer Webanwendungen. Außerdem biete ich IT-Beratung und CRM-Implementierung an.',
        certification: 'Zertifizierung: Google Ads Search Certification.',
      },
      services: {
        title: 'Leistungen',
        items: [
          'Webentwicklung & Web Apps',
          'IT-Audit und Beratung',
          'CRM-Einrichtung',
          'SEO und Analyse',
          'Support und Optimierung',
        ],
      },
      portfolio: {
        title: 'Projekte',
        items: [
          {
            title: 'UGS Informationssystem — ugs-info.at',
            description: 'Mehrschichtige Architektur mit hoher Skalierbarkeit.',
            link: 'https://ugs-info.at',
          },
          {
            title: 'Pet Shop Web App — pet-shop-frontend-mauve.vercel.app',
            description:
              'Vollständige Webanwendung: React-Frontend mit Node.js/Express REST API.',
            link: 'https://pet-shop-frontend-mauve.vercel.app',
          },
        ],
      },
      reviews: {
        title: 'Referenzen',
        placeholder: 'Kundenstimmen folgen in Kürze.',
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Bereit, Ihr Projekt zu besprechen? Lassen Sie uns verbinden:',
        email: 'Email',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Nachricht',
          submit: 'Senden',
        },
      },
      footer: {
        rights: '© 2025 Olena Yasynetska',
        privacy: 'Datenschutzerklärung',
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code),
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'localStorage'],
      caches: ['localStorage'],
    },
  })

export default i18n

