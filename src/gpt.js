import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios

function GithubUserSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
const goto=()=>{
    window.open("https://github.com/omkarjninja", '_blank');
}

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError('User not found!');
    }
    setUsername('')
  };

  return (
    <div>
        <header>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Hey Welcome To My WebPage!
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
          Let's Search Some Github Profiles
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
        onClick={goto}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> View My Github </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
      <h1 className='text-black text-2xl font-sans font-bold p-2'>Github User Search</h1>
      {/* <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="relative w-1/2">
  <label htmlFor="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Search for..."
    className="w-full rounded-md border-gray-700 py-2.5 pe-10 shadow-sm sm:text-sm p-2 m-2"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" onClick={handleSearch} className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>


      {/* <button onClick={handleSearch}>Search</button> */}

      {/* Base */}

<a
  className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black m-2"
  onClick={handleSearch}
>
  <span
    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span className="relative block border border-current bg-white px-8 py-3">
    Search
  </span>
</a>

{/* Hover */}

<a
  className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black m-2"
  onClick={handleSearch}
>
  <span
    className="absolute inset-0 translate-x-0 translate-y-0 bg-black transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
  ></span>

</a>

{/* card */}
{userData && (
      
<a
  href={userData.html_url}
  className=" lg:w-1/2 md:1/2 sm:1/3 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {userData.login}
      </h3>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt={userData.login}
        src={userData.avatar_url}
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
      Click To visit Github Profile!
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Followers</dt>
      <dd className="text-xs text-gray-500">{userData.followers}</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Following</dt>
      <dd className="text-xs text-gray-500">{userData.following}</dd>
    </div>
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Public Repos</dt>
      <dd className="text-xs text-gray-500">{userData.public_repos}</dd>
    </div>
  </dl>
</a>
)}

      {error && <p className='p-2 text-red-300'>{error}</p>}
    </div>
  );
}

export default GithubUserSearch;
