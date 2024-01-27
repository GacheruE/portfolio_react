import React from 'react'
import O1 from '../assets/O1.jpg';

const Project = () => {
    const projects = [
        {
          id: 1,
          title: 'Onion Doctor',
          description: 'An onion leaf disease detection machine learning system with an android application for the user interface.',
          technologies: ['Android', 'Kotlin', 'Python'],
          githubLink: 'https://github.com/GacheruE/OnionDoctor',
          image: '../assets/O1.jpg',
        },
        {
            id: 2,
            title: 'Kodisha',
            description: 'This is a web application that allows agents to post house listings and allows clients to view listings depending on their specifications and filters.',
            technologies: ['Bootstrap', 'PHP', 'MYSQL'],
            githubLink: 'https://github.com/GacheruE/Kodisha',
            image: '../assets/Kodisha.jpg',
          },
          {
            id: 3,
            title: 'Happy Hoagie',
            description: 'A web application for a restaurant called Happie Hoagie for customers to be able to order food and the restaurant to be able to post,edit or delete menu items.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            githubLink: 'https://github.com/GacheruE/Happy_Hoagie',
            image: '../assets/Happy.png',
          },
    ];
        return (
            <div className='bg-gray-100 py-8'>
              <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-semibold text-gray-800 text-center mb-8 '>Projects</h2>
        
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {projects.map((project) => (
                    <div key={project.id} className='bg-white rounded-lg overflow-hidden shadow-lg'>
                      <img
                        src={project.image} 
                        alt={project.title}
                        className='w-full h-64 object-cover'
                      />
                      <div className='p-4'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{project.title}</h3>
                        <p className='text-gray-600 mb-4'>{project.description}</p>
                        <ul className='mb-4'>
                          {project.technologies.map((tech, index) => (
                            <li key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-500 hover:underline'
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

export default Project