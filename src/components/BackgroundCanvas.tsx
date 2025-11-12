import { motion, useScroll, useTransform } from 'framer-motion'
import backgroundImage from '../assets/background/background.png'

const BackgroundCanvas: React.FC = () => {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 600], [0, 200])
  const rotate = useTransform(scrollY, [0, 600], [0, 15])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <motion.div
        style={{ translateY }}
        className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
      />
      <motion.div
        style={{ translateY, rotate }}
        className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        style={{ translateY }}
        className="absolute -bottom-44 left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
    </div>
  )
}

export default BackgroundCanvas

