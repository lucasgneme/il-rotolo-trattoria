import * as React from 'react'

interface LayoutPropos {
    children: React.ReactNode
}

const Layout: React.FC<LayoutPropos> = ({ children }) => {
  return (
    <div className='h-[100%] max-w-5xl mx-auto border-none p-2 pb-0 bg-transparent font-crete'>
      {children}
    </div>
  )
}

export default Layout