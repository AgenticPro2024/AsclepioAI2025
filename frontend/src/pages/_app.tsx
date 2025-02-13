import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Load Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
