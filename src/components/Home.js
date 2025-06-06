import React from 'react';
import Photo from '../assets/Photo.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1f2630] flex items-center justify-center'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-6 flex flex-col sm:flex-row justify-between h-full'>

        
        <div className='sm:w-1/2 sm:pr-2 flex flex-col justify-center'>
          <p className='text-cyan-200 text-2xl sm:text-4xl'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Esther Gacheru</h1>
          <p className='text-cyan-200 text-2xl sm:text-4xl'>a Data Scientist</p>
          <p className='text-[#8892b0] py-4 max-w-[900px] text-xl'>I'm a data-driven computer science graduate with hands-on experience in predictive modelling, automation, and data analysis from internships in finance and agriculture. I’m skilled in Python, SQL, Power BI, and Excel, and passionate about turning complex data into clear, actionable insights that drive real-world impact. Whether it's optimising operations or supporting strategic decisions, I bring curiosity, precision, and a strong problem-solving mindset to every project</p>
        </div>

        <div className='sm:w-1/2 sm:pl-5 flex justify-center items-center'>
          <img src={Photo} alt='Esther Gacheru' className='w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-lg' />
        </div>

      </div>

    </div>
  )
}

export default Home;
