import { type NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Schedule from '../components/Schedule'
import Speakers from '../components/Speakers'
import Sponsors from '../components/Sponsors'
import Venue from '../components/Venue'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ASCLEPIO AI 2025 - Conferenza Internazionale sull'Intelligenza Artificiale in Medicina</title>
        <meta
          name="description"
          content="ASCLEPIO AI 2025 - La più importante conferenza internazionale sull'Intelligenza Artificiale applicata alla Medicina e alla Sostenibilità"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-primary">
        <Header />
        <main>
          <Hero />
          <Features />
          <Schedule />
          <Speakers />
          <Venue />
          <Sponsors />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
