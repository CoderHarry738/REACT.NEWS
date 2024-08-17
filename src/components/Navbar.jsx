import React, { useEffect } from "react";

function Navbar() {
  return (
    <>
      <header className="p-4">
        <div className="container flex justify-between h-10 mx-auto">
          <div className="flex">
            <a
              rel="Brand Name"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <h3 className="text-pink-300 text-lg font-bold font-sans">
                Fritz
              </h3>
            </a>
            <ul className="items-stretch hidden space-x-2 ps-10 lg:flex">
              <li className="flex">
                <a
                  rel="Headlines"
                  href="#"
                  className="flex items-center px-4 -mb-1 font-semibold dark:border- dark:text-black 600 hover:text-pink-400"
                >
                  News
                </a>
              </li>
              <li className="flex">
                <a
                  rel="Headlines"
                  href="#"
                  className="flex items-center px-4 -mb-1 font-semibold dark:border- dark:text-black 600 hover:text-pink-400"
                >
                  Features
                </a>
              </li>
              <li className="flex">
                <a
                  rel="Headlines"
                  href="#"
                  className="flex items-center px-4 -mb-1 font-semibold dark:border- dark:text-black 600 hover:text-pink-400"
                >
                  Articles
                </a>
              </li>
              <li className="flex">
                <a
                  rel="Headlines"
                  href="#"
                  className="flex items-center px-4 -mb-1 font-semibold dark:border- dark:text-black 600 hover:text-pink-400"
                >
                  Latest News Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-800"
                  >
                    <path d="M494,217.014 L480,217.014 C479.447,217.014 479,217.462 479,218.015 C479,218.567 479.447,219 480,219 L494,219.016 C494.553,219.016 495,218.567 495,218.015 C495,217.462 494.553,217.014 494,217.014 L494,217.014 Z M494,211.007 L480,211.007 C479.447,211.007 479,211.455 479,212.008 C479,212.561 479.447,213 480,213 L494,213 C494.553,213 495,212.561 495,212.008 C495,211.455 494.553,211.007 494,211.007 L494,211.007 Z M494,223.021 L486,223.021 C485.447,223.021 485,223.469 485,224.021 C485,224.574 485.447,225 486,225 L494,225 C494.553,225 495,224.574 495,224.021 C495,223.469 494.553,223.021 494,223.021 L494,223.021 Z M494,229.027 L482,229.027 C481.447,229.027 481,229.476 481,230.028 C481,230.581 481.447,231.029 482,231.029 L494,231 C494.553,231 495,230.581 495,230.028 C495,229.476 494.553,229.027 494,229.027 L494,229.027 Z M480,207.002 L494,207 C494.553,207 495,206.554 495,206.001 C495,205.448 494.553,205 494,205 L480,205 C479.447,205 479,205.448 479,206.001 C479,206.554 479.447,207.002 480,207.002 L480,207.002 Z M481.687,223.303 C481.295,222.909 480.659,222.909 480.268,223.303 L475,229.364 L475,205 L473,205 L473,229.4 L467.701,223.303 C467.31,222.909 466.674,222.909 466.282,223.303 C465.89,223.697 465.89,224.335 466.282,224.729 L473.224,232.717 C473.434,232.927 473.711,233.017 473.984,233.002 C474.258,233.017 474.535,232.927 474.745,232.717 L481.687,224.729 C482.079,224.335 482.079,223.697 481.687,223.303 L481.687,223.303 Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-45 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              />
            </div>
            <button
              type="button"
              className="hidden px-5 py-2 font-semibold rounded lg:block dark:bg-pink-300 dark:text-gray-50"
            >
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
