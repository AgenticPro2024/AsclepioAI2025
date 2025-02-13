import { Fragment, useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Programma', href: '/programma' },
  { name: 'Relatori', href: '/relatori' },
  { name: 'Sponsor', href: '/sponsor' },
  { name: 'Blog', href: '/blog' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={classNames(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-primary/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    )}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-poppins font-bold">
                    <span className="text-white">ASCLEPIO</span>
                    <span className="text-secondary">AI</span>
                  </span>
                </Link>
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                <div className="flex space-x-8">
                  {navigation.map((item) => {
                    const isActive = router.pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Link
                          href={item.href}
                          className={classNames(
                            'relative py-2 text-sm font-medium transition-colors duration-200',
                            isActive ? 'text-secondary' : 'text-gray-300 hover:text-white'
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <motion.div
                              layoutId="underline"
                              className="absolute left-0 top-full h-0.5 w-full bg-secondary"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/registrazione" className="btn-primary">
                    Registrati Ora
                  </Link>
                </motion.div>
              </div>

              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <Disclosure.Panel static as={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden"
              >
                <div className="space-y-1 px-4 pb-3 pt-2 backdrop-blur-md bg-primary/95">
                  {navigation.map((item) => {
                    const isActive = router.pathname === item.href
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className={classNames(
                          'block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200',
                          isActive ? 'text-secondary bg-white/10' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  })}
                  <div className="mt-4">
                    <Link href="/registrazione" className="btn-primary w-full justify-center">
                      Registrati Ora
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}
