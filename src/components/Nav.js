import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1f2630] text-gray-300'>
        
        
        {/*menu*/}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        

        {/*hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'> 
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/*mobile menu*/}
        <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#1f2630] flex flex-col justify-center items-center '}>
                <li className='py-6'>Home</li>
                <li className='py-6'> About</li>
                <li className='py-6'>Skills</li>
                <li className='py-6'>Experience</li>
                <li className='py-6'>Contact</li>
            </ul>


    </div>
  )
}

export default Nav