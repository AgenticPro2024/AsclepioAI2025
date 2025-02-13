import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const schedule = [
  {
    time: '09:00 - 10:00',
    title: 'Registrazione e Welcome Coffee',
    location: 'Hall Principale',
    description: 'Accoglienza dei partecipanti e networking iniziale',
  },
  {
    time: '10:00 - 11:30',
    title: 'Keynote: Il Futuro dell\'AI in Medicina',
    location: 'Auditorium Centrale',
    description: 'Presentazione dei più recenti sviluppi e delle prospettive future',
  },
  {
    time: '11:45 - 13:00',
    title: 'Sessioni Parallele',
    location: 'Sale Tematiche',
    description: 'Workshop specialistici su diverse applicazioni dell\'AI',
  },
  {
    time: '14:30 - 16:00',
    title: 'Panel Discussion',
    location: 'Auditorium Centrale',
    description: 'Dibattito su etica e sostenibilità nell\'AI medica',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Schedule() {
  return (
    <section id="programma" className="py-24 bg-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Programma dell'Evento
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Una giornata ricca di contenuti e opportunità di networking
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-20 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className="card hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <ClockIcon className="h-5 w-5" />
                    <span>{item.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
