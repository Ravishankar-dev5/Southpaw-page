import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="pagehero bg-grain">
      <div className="glow glow-gold" style={{ width: 400, height: 400, top: -140, right: -100 }} />
      <div className="container pagehero__inner">
        <motion.p className="eyebrow"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="pagehero__title"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          dangerouslySetInnerHTML={{ __html: title }} />
        <motion.p className="pagehero__sub muted"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
