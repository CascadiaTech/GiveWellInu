import React, { useEffect } from "react";
import Image from "next/image";
import city from "../../assets/images/city.jpeg";
import ScrollpositionAnimation from "../../hooks/OnScroll";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

export default function Aboutus() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }
  return (
    <>
    <HeaderComponent></HeaderComponent>
      <div className="flex flex-col text-center mt-48 justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white">
          About Us
        </h1>
        <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white-400">
          For hundreds of years, real estate has been a primary hedge against
          inflation in every market across the world. However, getting into real
          estate has also always had a high entry cost, forbidding many from
          being able to enter. Additionally, liquidity has also always been a
          significant challenge within the market. Our primary objective here at
          REX is to bring to accessibility and liquidity to the real estate
          market. We are doing this by bringing you the first truly
          fractionalized real estate tokenization and cryptocurrency exchange
          platform to your hands. Our team is composed of real estate, crypto,
          and finance professionals with a vision. Coming from all over the
          world with decades of experience in our respective fields, we have
          joined forces to solve this centuries old problem in a legal and
          efficient manner.
        </p>
      </div>
      <div className="flex space-y-8 my-20 js-show-on-scroll justify-center flex-col ... ">
        <div className="flex justify-between flex-col md:flex-row ...">
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Security
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            The REX Exchange will be a decentralized exchange, meaning that once launched the code cannot be altered. We will be conducting full security audits of the code before launch to mitigate any risks.
            </p>
          </div>

          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Compliance
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Our Chief Compliance Officer has enacted standard KYC/AML procedures not only to comply with laws and regulations, but also to verify each individual tokenized property
            </p>
          </div>

          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Expansion
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-grey-400">
            Not only do we aim to provide a tokenized real estate exchange on a global level, we aim to provide tokenized real estate services on every industry level through vertical integration
            </p>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
