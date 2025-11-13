const layout = {
  outerShell:
    'flex w-full justify-center px-0 lg:px-6 xl:px-10',
  sectionColumn:
    'flex w-full max-w-6xl flex-col gap-16 px-0 pt-16 pb-12 lg:px-6 xl:px-12',
  sectionCard:
    'w-full rounded-[2.5rem] border border-white/15 bg-white/80 p-12 shadow-[0_35px_60px_rgba(15,23,42,0.15)] backdrop-blur-lg transition-colors duration-500 dark:border-white/10 dark:bg-white/5',
} as const

export const useSectionLayout = () => layout
