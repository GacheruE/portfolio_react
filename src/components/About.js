import React from 'react';

const About = () => {
  return (
    <div name='about' className='bg-[#c8cfd9] py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-gray-900 mb-8 text-center'>About Me</p>
          <div className='max-w-5xl mx-auto'>
            <p className='text-justify text-gray-900'>
             I’m a Computer Science and Informatics graduate currently pursuing a Master of Data Science (Professional), with a strong passion for transforming data into meaningful insights. My academic background and project experience span both software development and data analytics, giving me a well-rounded technical foundation.

Through internships in the finance and agriculture sectors, I’ve gained practical experience in predictive modelling, automation, and dashboarding using tools like Python, SQL, Power BI, and Excel. I've built fraud detection models, OCR systems, and data-driven reports that support real-world decision-making. I thrive in collaborative environments, value continuous learning, and am driven by the opportunity to create solutions that are both technically sound and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
