import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { PiattoList } from '../components/PiattoList'
import { PiattoCategory } from '../components/PiattoCategory'

import piattosData from '../data/piattos'
import PhoneIconDesktop from '../components/DesktopIcons/PhoneIconDesktop'
import MailIconDesktop from '../components/DesktopIcons/MailIconDesktop'
import WhatsAppIconDesktop from '../components/DesktopIcons/WhatsAppIconDesktop'
import InstagramIconDesktop from '../components/DesktopIcons/InstagramIconDesktop'
import FacebookIconDesktop from '../components/DesktopIcons/FacebookIconDesktop'
import Navbar from '../components/Navbar'

const Menu: NextPage = () => {
  const [filteredPiattos, setFilteredPiattos] = useState(
    piattosData.slice(0, 100)
  )
  const [currentSearch, setCurrentSearch] = useState('')
  const handleSearchFilter = (target: string) => {
    setCurrentSearch(target.trim())
    if (target.trim().length > 0) {
      setFilteredPiattos(
        piattosData.filter((el) => {
          return el.title.toUpperCase().includes(target.toUpperCase().trim())
        })
      )
    } else {
      setFilteredPiattos(piattosData)
    }
  }
  const handleCategoryFilter = (target: string) => {
    if (target.trim().length > 0) {
      setFilteredPiattos(
        piattosData.filter((el) => {
          return el.piatto.toUpperCase().includes(target.toUpperCase().trim())
        })
      )
    } else {
      setFilteredPiattos(piattosData)
    }
  }
  return (
    <>
      <Head>
        <title>Il Rotolo | Carta</title>
        <meta name="description" content="My App on Next.js" />
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
        <div className="flex justify-center">
          <input
            className="w-[80%] h-10 max-w-xl border-2 border-[#f43a3a] p-3 rounded-md my-3 bg-white shadow-lg focus:outline-none focus:border-[#68CB3F] focus:ring-none focus:bg-[#f8f8f8]"
            id="name"
            type={'text'}
            placeholder="Buscar por nombre"
            onChange={(ev) => handleSearchFilter(ev.target.value)}
          />
        </div>
        {currentSearch.length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🥗"
              piatto={'L\'antipasto (Entrada)'}
            />
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🍝"
              piatto={'Pasta e principale (Plato principal)'}
            />
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🥣"
              piatto={'Salse (Salsas)'}
            />
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🍨"
              piatto={'Dolci (Postres)'}
            />
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🥂"
              piatto={'Bevenade (Bebidas)'}
            />
            <PiattoCategory
              handleFilter={handleCategoryFilter}
              title="🍕"
              piatto={''}
            />
          </div>
        )}
        {!filteredPiattos.length && (
          <p className="text-center text-xl text-gray-300">{`Lo sentimos, no contamos con el plato "${currentSearch}"`}</p>
        )}
        <PiattoList piattos={filteredPiattos} />
        <div className='h-20'></div>
      </Layout>
      <Navbar />
    </>
  )
}
export default Menu
