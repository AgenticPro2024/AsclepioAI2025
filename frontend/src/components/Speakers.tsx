import { motion } from 'framer-motion';
import Image from 'next/image';

// Default placeholder image
const defaultImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDcwQzExMC40NTcgNzAgMTE5IDc4LjU0MyAxMTkgODlDMTE5IDk5LjQ1NyAxMTAuNDU3IDEwOCAxMDAgMTA4Qzg5LjU0MyAxMDggODEgOTkuNDU3IDgxIDg5QzgxIDc4LjU0MyA4OS41NDMgNzAgMTAwIDcwWiIgZmlsbD0iIzk0QTNCOCIvPjxwYXRoIGQ9Ik02MCAxNTBDNjAgMTM2LjE5MyA3MS4xOTMgMTI1IDg1IDEyNUgxMTVDMTI4LjgwNyAxMjUgMTQwIDEzNi4xOTMgMTQwIDE1MEgxNDBIMTQwSDYwWiIgZmlsbD0iIzk0QTNCOCIvPjwvc3ZnPg==';

const speakers = [
  {
    name: 'Prof. Maria Rossi',
    role: 'Direttore AI Research, Università di Milano',
    image: '/images/speakers/speaker1.jpg',
    topic: 'AI nella Diagnostica Avanzata',
  },
  {
    name: 'Dr. Alessandro Bianchi',
    role: 'Chief Medical AI Officer, Ospedale San Raffaele',
    image: '/images/speakers/speaker2.jpg',
    topic: 'Machine Learning in Oncologia',
  },
  {
    name: 'Prof. Elena Verdi',
    role: 'Head of Digital Health, Politecnico di Torino',
    image: '/images/speakers/speaker3.jpg',
    topic: 'Telemedicina e AI',
  },
  {
    name: 'Dr. Marco Neri',
    role: 'Research Director, CNR-AI Med',
    image: '/images/speakers/speaker4.jpg',
    topic: 'Etica dell\'AI in Medicina',
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

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-primary to-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-4">
            Relatori di Spicco
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300">
            Esperti internazionali nel campo dell'AI e della Medicina
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              className="relative group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = defaultImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{speaker.role}</p>
                  <p className="text-secondary font-medium">{speaker.topic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
