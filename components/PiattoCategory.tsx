import * as React from 'react'

interface PiattoCategoryProps {
    title: string
    piatto : string
    handleFilter: (piatto: string) => void
}

const PiattoCategory: React.FC <PiattoCategoryProps> = ({
  title,
  piatto,
  handleFilter,
}) => {
  return (
    <button 
      onClick={() => handleFilter(piatto)}
      className='categoryBtn flex items-center justify-start pl-3 rounded-md bg-gray-50 p-2 hover:bg-gray-100 shadow-md'
    >
      <span 
        className='text-md md:text-md xl:text-2xl pr-2'
        role={'img'} 
        aria-label={title}
      >
        {title}
      </span>
      <p 
        className='text-md font-bold break-words'
      >{piatto || 'Tutti (Todos)'}</p>
    </button>
  )
}

export { PiattoCategory }