import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (


    <nav className="bg-white border-gray-200  w-full">
      <div className="flex  justify-between items-center mx-auto w-full p-4">
        <a href="#" className="flex items-center space-x-3 ">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">30dc</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>

            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>

          </ul>
        </div>
      </div>


      <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      
    </nav>

  )
}

export default Navbar
