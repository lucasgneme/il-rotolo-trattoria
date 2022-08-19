import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export interface PiattoDetailProps {
    image: string
    title: string
    description: string
}

const PiattoDetail: React.FC<PiattoDetailProps> = ({ 
  image,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='flex flex-row items-center justify-between bg-[#F7F6F3] rounded-xl shadow-md object-contain'>
        <h3 className='justify-self-start text-[15px] sm:text-md font-bold text-gray-700 py-3 px-[.5rem]'>
          {title}
        </h3>
        <button 
          className='justify-self-end text-white text-[12px] text-center rounded-r-xl bg-[#74D074] h-full w-8'
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
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#daffef] shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-[2rem] text-center font-bold leading-6 text-gray-900'
                >
                  {title.toUpperCase()}
                </Dialog.Title>
                <div className='mt-2'>
                  <div className='flex justify-center'>
                    <span
                      className='text-8xl md:text-9xl mb-4'
                    >
                      <Image 
                        src={image} 
                        alt={title} 
                        height='320' 
                        width='420'
                        className='rounded-2xl'
                      />
                    </span>
                  </div>
                  <p className='text-md text-gray-500 mb-2'>
                    {' '}
                    <span className='font-bold'>Descripción:</span> {description}{' '}
                  </p>
                </div>
                <div className='flex justify-center mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, thanks!
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