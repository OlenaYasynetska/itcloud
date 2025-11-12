import { useSectionLayout } from '../hooks/useSectionLayout'

type SectionStackProps = {
  children: React.ReactNode
}

const SectionStack: React.FC<SectionStackProps> = ({ children }) => {
  const { outerShell, sectionColumn } = useSectionLayout()

  return (
    <div className={outerShell}>
      <div className={sectionColumn}>{children}</div>
    </div>
  )
}

export default SectionStack
