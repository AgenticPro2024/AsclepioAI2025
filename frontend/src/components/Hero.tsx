import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Importazione dinamica di Countdown per evitare problemi di SSR
const Countdown = dynamic(() => import('react-countdown'), {
  ssr: false,
});

// Data dell'evento
const eventDate = new Date('2025-05-29T09:00:00').getTime();

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const subtitle = "L'eredità di Asclepio: Intelligenza Artificiale e Salute Globale per un Futuro Sostenibile";

  const CountdownComponent = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
      if (completed) {
        return <span className="text-secondary">L'evento è iniziato!</span>;
      }

      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: days, label: 'Giorni' },
            { value: hours, label: 'Ore' },
            { value: minutes, label: 'Minuti' },
            { value: seconds, label: 'Secondi' },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-4xl font-poppins font-bold text-secondary">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      );
    };

    return <Countdown date={eventDate} renderer={renderer} />
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 overflow-hidden bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
        >
          ASCLEPIO AI:{" "}
          <span className="text-secondary">
            INTELLIGENZA ARTIFICIALE E SALUTE GLOBALE
          </span>
          <br />
          PER UN FUTURO SOSTENIBILE
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Un evento internazionale per esplorare il ruolo dell'AI nella medicina e
          nella sostenibilità
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          {mounted && <CountdownComponent />}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/registrazione"
            className="btn-primary"
          >
            REGISTRATI ORA
          </a>
          <a
            href="/programma"
            className="btn-outline"
          >
            Scopri il programma →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
