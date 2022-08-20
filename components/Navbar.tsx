import Link from 'next/link'
import React, { useState } from 'react'
import HamburgerIcon from './HamburgerIcon/HamburgerIcon'
import FacebookIconMobile from './MobileIcons/FacebookIconMobile'
import InstagramIconMobile from './MobileIcons/InstagramIconMobile'
import WhatsAppIconMobile from './MobileIcons/WhatsAppIconMobile'

const Navbar: React.FC = () => {
  return (
    <div className='fixed md:hidden flex items-center justify-evenly bottom-0 h-10  w-full m-0 bg-[#162d0cd3] text-white rounded-t-lg'>
      <Link href='https://www.facebook.com/saborsalud01/'>
        <a>
          <FacebookIconMobile />
        </a>
      </Link>
      <Link href='https://www.instagram.com/ilrotolotrattoria/'>
        <a>
          <InstagramIconMobile />
        </a>
      </Link>
      <Link href='https://wa.me/c/5492657291033'>
        <a>
          <WhatsAppIconMobile />
        </a>
      </Link>
      <HamburgerIcon />
    </div>
  )
}

export default Navbar