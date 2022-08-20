import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import CartIconDesktop from './DesktopIcons/CartIconDesktop'
import PlusIconDesktop from './DesktopIcons/PlusIconDesktop'

export interface PiattoDetailProps {
    image: string
    title: string
    description: string
    height: string
    width: string
}

const PiattoDetail: React.FC<PiattoDetailProps> = ({ 
  image,
  title,
  description,
  height,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='flex flex-row items-center justify-between bg-[#F7F6F3] rounded-xl shadow-md object-contain'>
        <h3 className='justify-self-start text-[15px] sm:text-md font-bold text-gray-700 py-3 px-[.5rem]'>
          {title}
        </h3>
        <button 
          className='justify-self-end text-white text-[12px] text-center rounded-r-xl bg-[#74D074] hover:bg-[#88ed88] h-full w-8'
          onClick={() => setIsOpen(true)}
        >
          Ver
        </button>
      </div>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60'
          onClose={() => setIsOpen(false)}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md px-3 py-4 my-8 overflow-hidden text-center align-middle transition-transform bg-[#daffef] shadow-xl rounded-3xl'>
                <div>
                  <div className='flex justify-center'>
                    <span
                      className='text-8xl md:text-9xl w-full'
                    >
                      <Image 
                        src={image} 
                        alt={title} 
                        layout='responsive'
                        height={height || 200} 
                        width={width || 300}
                        className='rounded-xl'
                      />
                    </span>
                  </div>
                  <Dialog.Title
                    as='h3'
                    className='text-[1.5rem] md:text-[2rem] text-center font-crete font-bold leading-6 text-gray-900 mt-5'
                  >
                    {title.toUpperCase()}
                  </Dialog.Title>
                  <p className='p-2 font-alegreya text-md text-gray-500 my-2'>
                    {description}
                  </p>
                </div>
                <div className='flex items-center justify-around mt-2 text-white'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-2 py-2 text-sm font-nunito font-bold bg-[#E90D0D] border border-transparent rounded-md hover:bg-[#e84040] focus:ring-none'
                    onClick={() => setIsOpen(false)}
                  >
                    VOLVER
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center py-1 p-2 pr-3 text-sm font-medium bg-green-600 border border-transparent rounded-md hover:bg-green-400 focus:ring-none'
                  >
                    <PlusIconDesktop className='pt-[11px] ml-[20px] absolute' />
                    <CartIconDesktop />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export { PiattoDetail }