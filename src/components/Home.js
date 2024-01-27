import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1f2630]'>

        {/*Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-cyan-200 text-2xl sm:text-4xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Esther Gacheru</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>A passionate computer science graduate with a keen interest in the world of web development. As a recent graduate, I bring fresh
              perspectives, a solid foundation in computer science, and a strong commitment to crafting innovative solutions</p>
        <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-200 hover:border-cyan-200'>View Work
            <HiArrowNarrowRight className='ml-3' /> </button>
        </div>
        
        </div>
    </div>
  )
}

export default Home