import React from 'react'
import { chiefLogo } from '/public/images'
const Header = () => {
  return (
   <>
       <header className='flex items-center space-x-4 bg-blue-500 mx-auto '>
            <img src={chiefLogo} className=' w-13 rounded-full'/>
            <h1 className=' text-4xl font-bold'>Chef Emmanuel</h1>
        </header>
   </>
  )
}

export default Header
