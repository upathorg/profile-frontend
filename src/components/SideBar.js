import React from 'react';
import DashboardSvg from '../svg/dashboard';
import ProfileSvg from '../svg/profile';
import ExercisesSvg from '../svg/exercises'

const SideBar = () => {
  return (
    <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
      <ul>
        <li className="hover:bg-gray-100">
          <a
            href="."
            className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
          >
            <DashboardSvg />
          </a>
        </li>
        <li className="hover:bg-gray-100">
          <a
            href="."
            className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
          >
            <ProfileSvg />
          </a>
        </li>
        <li className="hover:bg-gray-100">
          <a
            href="."
            className="h-16 px-6 flex flex justify-center items-center w-full
              focus:text-orange-500"
          >
            <ExercisesSvg />
          </a>
        </li>
      </ul>
    </aside>
  )
}
export default SideBar;