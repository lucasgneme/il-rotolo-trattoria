import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import FacebookIconDesktop from '../components/DesktopIcons/FacebookIconDesktop'
import InstagramIconDesktop from '../components/DesktopIcons/InstagramIconDesktop'
import MailIconDesktop from '../components/DesktopIcons/MailIconDesktop'
import PhoneIconDesktop from '../components/DesktopIcons/PhoneIconDesktop'
import WhatsAppIconDesktop from '../components/DesktopIcons/WhatsAppIconDesktop'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Il Rotolo | Home</title>
        <meta name='description' content='My App on Next.js' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-5xl mx-auto flex flex-row px-5 py-[1px] items-center justify-center md:justify-between bg-[#0a1505fd] text-gray-400">
        <div className='flex items-center md:justify-start gap-5 justify-around md:w-[50vw] w-[90vw] text-[.7rem] sm:text-[.8rem] font-raleway font-bold'>
          <div>
            <a className='flex items-center' href='mailto:saborysalud@gmail.com'>
              <MailIconDesktop />
              saborysalud01@gmail.com</a>
          </div>
          <div>
            <a className='flex items-center' href='tel:+542657-291033'>
              <PhoneIconDesktop />
              +(54) 2657-291033
            </a>
          </div>
        </div>
        <div className='md:flex hidden items-center gap-3'>
          <div>
            <a href='https://www.facebook.com/saborsalud01/' >
              <FacebookIconDesktop />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/ilrotolotrattoria/' >
              <InstagramIconDesktop />
            </a>
          </div>
          <div>
            <a href='https://wa.me/c/5492657291033' >
              <WhatsAppIconDesktop />
            </a>
          </div>
        </div>
      </div>
      <header className="logoBanner max-w-5xl mx-auto rounded-lg rounded-t-none px-10 py-1 shadow-xl flex flex-row items-center  justify-center md:justify-between bg-[#56B130]">
        <Link href='/'>
          <div className='flex'>
            <div className='md:flex hidden w-10'></div>
            <div className='flex flex-col items-center justify-end'>
              <h2 className='logoShadow text-4xl font-pacifico font-medium text-[#f43a3a] '>
                Il Rotolo
              </h2>
              <span className='logoShadow text-md font-crete font-bold text-[#f43a3a]'>Trattoria al paso</span>
            </div>
            <div
              className='logo logoShadow'
            />
          </div>
        </Link>
        <div>
          <div className="md:flex hidden gap-4 items-center justify-between text-white font-crete drop-shadow-md bg-black bg-opacity-30 rounded-lg px-2">
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/menu">
              <a>Carta</a>
            </Link>
            <Link href="/reviews">
              <a>Reseñas</a>
            </Link>
            <Link href="/gallery">
              <a>Galería</a>
            </Link>
          </div>
        </div>
      </header>
      <Layout>
        <Navbar />
      </Layout>
    </>
  )
}

export default Home
