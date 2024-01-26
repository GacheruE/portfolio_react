import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1f2630] text-gray-300'>
        
        
        {/*menu*/}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*hamburger*/}
        <div>
            <FaBars />
        </div>


        {/*mobile menu*/}
        <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>


    </div>
  )
}

export default Nav