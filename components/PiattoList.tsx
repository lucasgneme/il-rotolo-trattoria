import { PiattoDetail, PiattoDetailProps } from './PiattoDetail'

export interface PiattoListProps {
  piattos: PiattoDetailProps[]
}

const PiattoList: React.FC<PiattoListProps> = ({ piattos }) => {
  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
      {piattos.map((
        piatto, 
        index
      ) => {
        return (
          <PiattoDetail key={ index } {...piatto } />
        )
      })}
    </div>      
  )
}

export { PiattoList }