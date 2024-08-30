"use client";

import { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-between px-10 py-10 text-black">
      <div className="flex items-center">
        <a href="" className="text-2xl font-semibold text-blue-400">
          Traveling!
        </a>
      </div>
      <div className="flex-1 justify-center hidden w-full md:w-auto md:flex">
        <ul className="flex gap-20">
          <li>
            <a
              href=""
              className="transition-colors duration-300 hover:text-blue-500"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href=""
              className="transition-colors duration-300 hover:text-blue-500"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href=""
              className="transition-colors duration-300 hover:text-blue-500"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <button className="hidden md:flex px-5 py-3 transition-colors duration-300 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
          Sign Up
        </button>
        <button
          onClick={toggleModal}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-cyan-500 dark:focus:ring-cyan-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-20 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="space-y-7 flex flex-col text-center">
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-blue-500"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-blue-500"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
