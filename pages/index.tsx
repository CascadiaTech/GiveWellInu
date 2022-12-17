import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect, useRef, useState } from "react";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";
import MintCardComponent from "../components/Cards/MintCard";
import ginuLogo from '../assets/ginuAssets/ginuLogo1.png'
import ClaimComponent from "../components/Claim/ClaimComponent";
const Home: NextPage = () => {
  const { account, chainId, active } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [isended, setisended] = useState(false);
  const videoRef: any = useRef(null);
  const attemptPlay = () => {
    videoRef &&
      videoRef.current &&
      videoRef.current.load() &&
      videoRef.current.play().catch((error: any) => {
        console.log("error attempting to play", error);
      });
  };

  useEffect(() => {
    videoRef.current.defaultMuted = true;
    attemptPlay()
  });

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
      //ScrollpositionAnimation();
    }
    ScrollpositionAnimation();
  });

  
  function RenderButtons(){
    setisended(true)
  }

  return (
    <div className="">
      <main className={styles.main}>
        <header>
          {" "}
          <HeaderComponent></HeaderComponent>
        </header>
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="min-w-full min-h-full absolute object-cover"
            playsInline
            onEnded={() => RenderButtons()}
            autoPlay
            loop
            muted
          >
            <source src="./ginuhomepage.mp4" type="video/mp4" /> Your browser does
            not support the video tag, update your browser
          </video>
        </div>
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
            style={{ fontFamily:'Aquire' }}
            className="mt-12 text-4xl sm:text-4xl text-4xl text-center font-bold tracking-tight text-gray-100 md:text-4xl
            z-10 relative lg:text-5xl"
          >
            Give Well INU
          </h5>
          <Image
            className="w-screen mx-5 justify-center align-center z-0 absolute md:w-auto"
            src={ginuLogo}
            height={750}
            width={750}
          ></Image>
          <p className={"my-12"}></p>
          <div
            className={"flex flex-row w-screen object-center justify-center"}
          >
            <button
            style={{ fontFamily:'Aquire' }}
              onClick={() =>
                window.open(
                  "https://google.com"
                )
              }
              type="button"
              className="text-gray-100 hover:text-black border transition-all duration-600 border-gray-200 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              {" "}
              OpenSea
            </button>
            <button
            style={{ fontFamily:'Aquire' }}
              onClick={() => window.open("https://www.givewellinu.com/home")}
              type="button"
              className="text-gray-100 hover:text-black border transition-all duration-600 border-gray-200 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              Website
            </button>
            <button
            style={{ fontFamily:'Aquire' }}
              onClick={() =>
                window.open(
                  "https://app.uniswap.org/#/swap?inputCurrency=0x74be64b45d394fa57816c1950e94dbb8d7a7b306&outputCurrency=ETH"
                )
              }
              type="button"
              className="text-gray-100 hover:text-black border transition-all duration-500 border-gray-200 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2"
            >
              Token
            </button>
          </div>
        </div>
        <MintCardComponent></MintCardComponent>

<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/>

        <ClaimComponent></ClaimComponent>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
