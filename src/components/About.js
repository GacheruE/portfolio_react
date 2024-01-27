import React from 'react';
import Photo from '../assets/Photo.jpg';

const About = () => {
  return (
    <div className='bg-[#39465a] py-12'>
      <div className='container mx-auto px-'>
        <div className='flex flex-col items-center'>
          
          <h3 className='text-3xl sm:text-5xl font-semibold text-gray-200 mb-8'>About Me</h3>
         
          <div className='flex items-center max-w-4xl'>
            
            <div className='pr-8'>
              <p className='text-gray-300 mb-4'>
              I earned my Bachelor's degree in Computer Science from Strathmore University, where I delved into a range of computer science topics, from algorithms and data structures to software engineering principles.
               This academic journey has equipped me with a robust understanding of the core concepts that underpin effective software development. I find joy in turning creative ideas into functional and user-friendly websites. Whether it's building interactive interfaces, optimizing performance, or solving complex challenges, I'm driven by the desire to create seamless online experiences. The fast-paced nature of the tech industry motivates me to stay on the cutting edge. I am committed to continuous learning, keeping up with the latest web development trends, and exploring new technologies that enhance my skill set. While I thrive in the technical realm, I understand the importance of effective communication and collaboration. I approach challenges with a problem-solving mindset, always seeking to contribute positively to team dynamics. I am excited about the endless possibilities that web development offers, and I am ready to embark on a journey where I can apply my skills, learn, and contribute to building innovative solutions that make a positive impact. Let's connect and explore the boundless opportunities that lie ahead
              </p>
             
            </div>
            
            
            <div className='w-[4000px] h-[300px] rounded-full overflow-hidden shadow-lg'>
              <img src={Photo} alt='About' className='w-full h-full object-cover'  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
