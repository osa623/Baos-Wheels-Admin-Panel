import React from 'react'

//platform logo
import bwlogo from '../assests/baoswheelslogo.png'

const Navbar = () => {
  return (
    <div className='fixed flex w-full bg-secondary items-center justify-center space-x-8'>
       
        <div className='flex flex-col w-[15vw] h-auto items-center justify-center m-4'>
                 <img src={bwlogo} alt=''/>
        </div>

        <div className='flex-row w-[40vw] h-auto items-center justify-center'>
            <ul className='flex justify-center items-center text-primary gap-4 m-2 font-russoone text-xl space-x-3'>
                <li className='hover:text-baseprimary cursor-pointer'>Dashboard</li>
                <li className='hover:text-baseprimary cursor-pointer'>Reviews</li>
                <li className='hover:text-baseprimary cursor-pointer'>Articles</li>
                <li className='hover:text-baseprimary cursor-pointer'>Users</li>
                <li className='hover:text-baseprimary cursor-pointer'>Logout</li>
            </ul>
        </div>
        
        
      
    </div>
  )
}

export default Navbar
