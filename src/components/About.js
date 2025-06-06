import React from 'react';

const About = () => {
  return (
    <div name='about' className='bg-[#c8cfd9] py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-gray-900 mb-8 text-center'>About Me</p>
          <div className='max-w-5xl mx-auto'>
            <p className='text-justify text-gray-900'>
             I’m a Bachelor of Science in Informatics and Computer Science graduate, currently pursuing a Master of Data Science (Professional), with a passion for transforming complex data into meaningful insights. My experience across finance and agriculture has equipped me with practical skills in predictive modelling, automation, and data analysis using tools like Python, SQL, and Power BI. Originally drawn to software development, I discovered a strong interest in data science, where I can blend analytical thinking, creativity, and impact. I thrive in collaborative environments, value continuous learning, and am driven by a desire to contribute to real-world solutions through data. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
