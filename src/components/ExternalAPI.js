import React, { useState, useEffect } from 'react';

const ExternalAPI = () => {
  // State to store user data fetched from GitHub API
  const [userData, setUserData] = useState(null);
  // State to store loading status
  const [loading, setLoading] = useState(true);
  // State to store error status
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from GitHub API
        const response = await fetch('https://api.github.com/users/GacheruE');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        // Set user data in state
        setUserData(data);
        // Set loading state to false
        setLoading(false);
      } catch (error) {
        // Set error state if fetch fails
        setError(error.message);
        // Set loading state to false
        setLoading(false);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if fetch fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render user data if fetch is successful
  return (
    <div className='bg-gray-800 flex flex-col items-center text-gray-200'>
      <p className='font-bold text-2xl sm:text-3xl mt-8 inline border-b-4 border-cyan-200 mb-8 '>Github API User Information</p>
      <div className="flex items-center">
        <img src={userData.avatar_url} alt="Avatar" className='w-24 h-24 mr-4 rounded-full'/>
        <div>
          <p>Username: {userData.login}</p>
          <p>Name: {userData.name}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repositories: {userData.public_repos}</p>
        </div>
      </div>
    </div>
  );
  
 };

export default ExternalAPI