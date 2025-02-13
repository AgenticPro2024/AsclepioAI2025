import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

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

export default function Venue() {
  return (
    <section id="venue" className="relative py-24 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 opacity-90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Venue Information */}
          <motion.div variants={itemVariants} className="text-white">
            <h2 className="text-3xl font-bold mb-6">Location dell'Evento</h2>
            <p className="text-xl text-gray-300 mb-8">
              L'evento si terrà presso il prestigioso Centro Congressi di Milano, una location all'avanguardia nel cuore della città.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Indirizzo</h3>
                  <p className="text-gray-300">Via dei Congressi, 12<br />20123 Milano (MI)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefono</h3>
                  <p className="text-gray-300">+39 02 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">info@asclepioai2025.it</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map and Images */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-100">
              <img
                src="/images/venue/venue-main.jpg"
                alt="Centro Congressi Milano"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">Centro Congressi Milano</h3>
                  <p className="text-gray-200">Una location moderna nel cuore della città</p>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="relative rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={`/images/venue/venue-${i}.jpg`}
                    alt={`Venue Image ${i}`}
                    className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
