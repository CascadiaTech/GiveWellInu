import "tailwindcss-elevation";
import { LoadingOutlined } from "@ant-design/icons";
import { useWeb3React } from "@web3-react/core";
import { Spin } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import bloodred from "../../assets/images/bloodred.jpg";
import { Accordion } from "flowbite-react";
//import Rex_logo from '../../assets/images/REX_logo.png'
import { SwapWidget, darkTheme, lightTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import {
  ExternalProvider,
  getDefaultProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import Link from "next/link";
import MintCardComponent from "../../components/Cards/MintCard";
import ClaimComponent from "../../components/Claim/ClaimComponent";
//const mySafeHTML = DOMPurify.sanitize(myHTML)

const NFTMint = () => {
  //const scrollY = useScrollPosition()
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [loading, setLoading] = useState(false);
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [uniswaprovider, setuniswapprivder] = useState();
  const Runeaddress = "0xc68a4c68f17fed266a5e39e7140650acadfe78f8";
  useEffect(() => {
    async function setProvider() {
      if (account) {
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        return provider;
      } else {
        return;
      }
    }
    setProvider().then((result) => setuniswapprivder(result as any));
  }, [account]);

  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/7724cb4383a249dfb4a847c90954b901"],
    3: ["https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
  };
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className={styles.main}>
      <div className="flex flex-row w-screen">
      <Image
          className="relative min-w-full float-left elevation-10 z-index-0 sm:clip-path-mypolygon"
          src={bloodred}
        ></Image>
        <div className="flex flex-col sm:content-start absolute z-index-10 justify-self-end justify-right align-right w-screen text-right">
          <h1 style={{ fontFamily: "Cinzel, serif" }} className="text-center text-5xl text-gray-100 mt-12 mr-5 md:text-5xl pr-5 text-right"> RuneStone </h1>
          <MintCardComponent></MintCardComponent>
        </div>

      </div>
      <div className="mt-96 sm:mt-96 md:mt-0 lg:mt-0 flex flex-col align-left z-index-40 text-right md:justify-left">
      </div>
      <ClaimComponent></ClaimComponent>
      </main>

      <FooterComponent></FooterComponent>
    </>
  );
};

export default NFTMint;
