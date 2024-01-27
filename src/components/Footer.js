import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div name='footer' className='container mx-auto flex flex-col items-center justify-center'>
      <p className='text-2xl font-bold inline border-b-4 border-cyan-200 mb-8 '>Contacts</p>
        <div className='flex space-x-4 mb-4'>
          {/* LinkedIn Icon */}
          <a href='https://www.linkedin.com/in/esther-gacheru-900411253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedin} className='h-8 w-8 fill-current' />
          </a>
          
          {/* GitHub Icon */}
          <a href='https://github.com/GacheruE' target='_blank' rel='noopener noreferrer' title='Github'>
            <FontAwesomeIcon icon={faGithub} className='h-8 w-8 fill-current' />
          </a>
          
          {/* Gmail Icon */}
          <a href='mailto:nyangendogacheru@gmail.com' title='Email'>
            <FontAwesomeIcon icon={faEnvelope} className='h-8 w-8 fill-current' />
          </a>
        </div>
        <p>&copy; 2024 Gacheru</p>
      </div>
    </footer>
  );
};

export default Footer;
