//import 'tw-elements'
import "tailwindcss-elevation";
//import { Stickynavbar } from 'flowbite-react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import React from "react";
//import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "../Web3Modal/WalletConnect";
import { Dropdown } from "flowbite-react";
export default function HeaderComponent() {
  //    backgroundImage: `url(${backgroundimage})`,

  return (
    <div>
      <nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-nowrap justify-left items-center mx-auto">
          <div></div>
          <div className="md:order-2">
            <ConnectWallet></ConnectWallet>
          </div>
          <div className="sm:visible md:hidden">
            <Dropdown label="Navigation">
              <Dropdown.Header>
                <span className="block text-sm">Navigation</span>
              </Dropdown.Header>
              <Dropdown.Item>
              <a href="https://www.givewellinu.com/home">
                  <p
                    className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    style={{ fontFamily:'Aquire' }}
                  >
                    Website{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          </div>
          <div
            className="h-0 justify-left items-left text-left w-full md:flex md:h-fit md:w-auto order-1"
            id="navbar-sticky"
          >
            <ul className="invisible md:visible h-auto flex flex-row justify-left text-left items-left p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <button
            type="button"
            onClick={() => window.open("https://www.givewellinu.com/home")}
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium mt-2 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            
          >
                             <p
                    className="cursor-pointer block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    style={{ fontFamily:'Aquire' }}
                  >
                    Website{" "}
                  </p>
          </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
