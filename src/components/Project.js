import React from 'react';
import O1 from '../assets/O2.jpg';
import Dashboard from '../assets/dash.png';
import MLHeart from '../assets/heart.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Onion Doctor',
      description: 'An onion leaf disease detection machine learning system with an android application for the user interface.',
      technologies: ['Python', 'Keras', 'Pandas'],
      githubLink: 'https://github.com/GacheruE/OnionDoctor',
      image: O1,
    },
    {
      id: 2,
      title: 'Maji Ndogo Water Dashboard',
      description: 'A multi-page Power BI dashboard visualizing national and provincial water infrastructure improvements, budget allocations, and population impact.',
      technologies: ['Power BI', 'Data Visualization', 'Data Storytelling'],
      githubLink: '',
      image: Dashboard,
    },
    {
      id: 3,
      title: 'Heart Disease Prediction',
      description: 'A machine learning pipeline that predicts heart disease risk using scaled features, PCA, LightGBM, and cross-validation with early stopping.',
      technologies: ['Python', 'scikit-learn', 'LightGBM', 'PCA'],
      githubLink: 'https://github.com/GacheruE/Heart_Disease',
      image: MLHeart,
    },
  ];

  return (
    <div name='project' className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-gray-800 text-center mb-8 '>Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='bg-white rounded-lg overflow-hidden shadow-lg'>
              <img
                src={project.image} 
                alt={project.title}
                className='w-full h-64 object-contain'
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
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
