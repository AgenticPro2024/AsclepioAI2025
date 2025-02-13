import { motion } from 'framer-motion';
import Image from 'next/image';

const patrocini = [
  {
    name: "FAST",
    description: "Federazione delle Associazioni Scientifiche e Tecniche",
    tier: "platinum",
    logo: "/images/sponsors/FAST_logo2-1.jpg",
    website: "https://www.fast.mi.it"
  },
  {
    name: "UGIS",
    description: "Unione Giornalisti Italiani Scientifici",
    tier: "gold",
    logo: "/images/sponsors/logo-UGIS_colori.jpg",
    website: "https://www.ugis.it"
  },
  {
    name: "Ethosjob",
    description: "human caring",
    tier: "gold",
    logo: "/images/sponsors/ethosjob-img-2021-084.png",
    website: "https://www.ethosjob.it"
  },
  {
    name: "Università Ca' Foscari",
    description: "Venezia",
    tier: "gold",
    logo: "/images/sponsors/CF_moeca_pos_124.png",
    website: "https://www.unive.it"
  }
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-4">
            Patrocini Confermati
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            Enti e istituzioni che supportano l'evento
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {patrocini.map((patrocinio) => (
            <motion.div
              key={patrocinio.name}
              className="w-full"
              variants={itemVariants}
            >
              <a 
                href={patrocinio.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full max-w-[300px] mx-auto relative overflow-hidden rounded-xl p-8 bg-white hover:bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl border border-gray-100 group"
              >
                <div className="h-40 relative mx-auto flex items-center justify-center p-4">
                  <img
                    src={patrocinio.logo}
                    alt={patrocinio.name}
                    className="max-h-[120px] w-auto object-contain transition-all duration-500 group-hover:brightness-110 group-hover:transform group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-gray-900">{patrocinio.name}</p>
                  <p className="text-xs text-gray-500">{patrocinio.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
