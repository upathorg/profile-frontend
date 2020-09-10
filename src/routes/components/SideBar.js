import React from 'react';
import Dashboard_svg from '../../svg/dashboard';
import Profile_svg from '../../svg/profile';
import Exercises_svg from '../../svg/exercises.js'

const SideBar = () => {
  return (
    <div className="h-screen w-screen flex bg-gray-200">
      <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
        <ul>
          <li className="hover:bg-gray-100">
            <a
              href="."
              className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
            >
              <Dashboard_svg />
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a
              href="."
              className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
            >
              <Profile_svg />
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a
              href="."
              className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
            >
              <Exercises_svg />
            </a>
          </li>
          </ul>
      </aside>
    </div>
  )
}
export default SideBar;