import { motion } from 'framer-motion';
import { BeakerIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Ricerca Medica Avanzata',
    description: 'Esplora le ultime innovazioni nell\'applicazione dell\'AI alla ricerca medica e alla diagnosi.',
    icon: BeakerIcon,
  },
  {
    name: 'Analisi Dati in Tempo Reale',
    description: 'Scopri come l\'AI sta trasformando l\'analisi dei dati medici per decisioni più rapide e precise.',
    icon: ChartBarIcon,
  },
  {
    name: 'Sostenibilità Globale',
    description: 'Comprendi l\'impatto dell\'AI sulla sostenibilità del sistema sanitario globale.',
    icon: GlobeAltIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Punti Salienti dell'Evento
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Scopri perché ASCLEPIO AI 2025 è l'evento più importante nel campo dell'AI applicata alla medicina
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="card"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-400 rounded-lg blur opacity-25" />
                <div className="relative">
                  <feature.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
