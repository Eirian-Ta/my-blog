import React, { ReactNode, Dispatch, SetStateAction } from 'react';

import Link from 'next/link';
import { BiSun } from 'react-icons/bi';
import { RiMoonClearLine } from 'react-icons/ri';

import { Config } from '../utils/Config';

type INavbarProps = {
  children: ReactNode;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

// type ThemeProps = {
//   setTheme: Dispatch<SetStateAction<string>>;
// };

function Navbar(props: INavbarProps) {
  // const [theme, setTheme] = useState('');

  return (
    <div className="w-full bg-dark-bg">
      <div className="navbar max-w-screen-xl flex flex-wrap justify-between items-center py-4 px-3 mx-auto">
        <div className="font-extrabold text-xl">
          <Link href="/">
            <a>{Config.site_name}</a>
          </Link>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center font-extrabold">
            {props.children}
            <button
              onClick={() => {
                props.setTheme((prevState) => (!prevState ? 'light' : ''));
                console.log(props.theme);
              }}
              className="ml-8 outline-none opacity-30 hover:opacity-70 focus:opacity-100 focus:outline-none transparent absolute top-9 right-6  md:relative md:top-auto md:right-auto transition duration-150 ease-out"
            >

              <BiSun
                className={`w-6 h-6 transition duration-300 ease-out transform ${
                  props.theme === '' && 'opacity-0 rotate-90'
                }`}
              />

              <RiMoonClearLine
                className={`w-6 h-6 absolute top-0 left-0 transition duration-300 ease-out transform ${
                  props.theme === 'light' && 'opacity-0 -rotate-90'
                }`}
              />
            </button>
          </ul>
        </nav>
      </div>

      <style jsx>
        {`
      .navbar :global(li:not(:last-child)) {
        @apply mr-5;
      }

      .navbar :global(a) {
        @apply text-gray-200;
      }

      .navbar :global(a:hover) {
        @apply text-blue-600;
      }
    `}
      </style>
    </div>

  );
}

export { Navbar };
