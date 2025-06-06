
import React from 'react'
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import powerbi from '../assets/power bi.jpeg';
import tableau from '../assets/tablu.jpeg';
import excel from '../assets/excel.png';
import jupyter from '../assets/jupyter.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold'>Skills</p>
          <p className='py-4'>These are the tools and technologies I'm proficient in:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={python} alt='Python Icon' />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={sql} alt='SQL Icon' />
            <p className='my-4'>SQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={powerbi} alt='Power BI Icon' />
            <p className='my-4'>Power BI</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tableau} alt='Tableau Icon' />
            <p className='my-4'>Tableau</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={excel} alt='Excel Icon' />
            <p className='my-4'>Excel</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={jupyter} alt='Jupyter Icon' />
            <p className='my-4'>Jupyter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
