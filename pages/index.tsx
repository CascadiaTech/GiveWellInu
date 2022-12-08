import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect, useState } from "react";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";
import MintCardComponent from "../components/Cards/MintCard";
import trump from "../assets/trumpimages/trump.jpg";
const Home: NextPage = () => {
  const { account, chainId, active } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;

  useEffect(() => {
    async function ScrollpositionAnimation() {
      const targets = document.querySelectorAll(".js-show-on-scroll");
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
          }
        });
      });
      // Loop through each of the target
      targets.forEach(function (target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
      });
      ScrollpositionAnimation();
    }
  });

  return (
    <div className="">
      <main className={styles.main}>
        <header>
          {" "}
          <HeaderComponent></HeaderComponent>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className={
            "mx-auto self-center content-center items-center justify-center"
          }
        >
          <h5
            style={{ fontFamily: "Cinzel, serif" }}
            className="mt-12 text-4xl sm:text-4xl text-4xl text-center font-bold tracking-tight text-gray-100 md:text-4xl lg:text-5xl dark:text-white"
          >
            Welcome Back Trump
          </h5>
          <Image
            className="w-screen mx-5 justify-center align-center md:w-auto"
            src={trump}
          ></Image>
          <p className={"my-12"}></p>
          <div
            className={"flex flex-row w-screen object-center justify-center"}
          >
            <button
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/officialwelcomebacktrump"
                )
              }
              type="button"
              className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              {" "}
              OpenSea
            </button>
            <button
              onClick={() => window.open("https://www.welcomebacktrump.net/")}
              type="button"
              className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              Website
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://app.uniswap.org/#/swap?outputCurrency=0xa01710ca98e4d66fd8d2044b3437c024e7a64d76"
                )
              }
              type="button"
              className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              Token
            </button>
          </div>
        </div>
        <MintCardComponent></MintCardComponent>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
