import Link from 'next/link'
import React from 'react'

export const TopMenu = () => {
  return (
    <nav className='flex p-5 justify-between items-center w-full'>
        <div>
            <Link href="/">
                <span className='antialiased font-bold'>Rick and Morty</span>
                <span> | Wiki</span>
            </Link>
        </div>

        <div className='hidden sm:block'>
          <Link 
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            href="/episodes"
          >
              Episodios
          </Link>
          <Link 
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            href="/locations"
          >
              Localizaciones
          </Link>
        </div>
    </nav>
  )
}
