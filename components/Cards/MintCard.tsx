import "tailwindcss-elevation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ScrollpositionAnimation from "../../hooks/OnScroll";
import Swal from "sweetalert2";
import { abiObject } from "../../contracts/abi.mjs";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  JsonRpcSigner,
  Web3Provider,
} from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { formatEther, parseEther } from "@ethersproject/units";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
///import { utils } from 'ethers'

export default function MintCardComponent() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [loading, setLoading] = useState(false);
  const [totalSupply, settotalySupply] = useState(Number);
  const [pubmintprice, setpubmintprice] = useState(Number)
  const [pubmintactive, setpubmintactive] = useState(Boolean);
  const { account, chainId, active } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [quantity, setquantity] = useState(1);
  const videoRef: any = useRef(null);


  if (typeof window !== "undefined") {
    useEffect(() => {
      {
        videoRef.current.defaultMuted = true;
      }
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }

  const attemptPlay = () => {
    videoRef &&
      videoRef.current &&
      videoRef.current.load() &&
      videoRef.current.play().catch((error: any) => {
        console.log("error attempting to play", error);
      });
  };

  useEffect(() => {
    async function FetchtotalSupply() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        const NFTabi = abiObject;
        const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218";
        const contract = new Contract(contractaddress, NFTabi, provider);
        const Totalminted = await contract.totalSupply();
        const FinalResult = Number(Totalminted);
        const minted = FinalResult;
        settotalySupply(minted);
        return minted;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    async function FetchPublicMintPrice() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        const NFTabi = abiObject;
        const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218";
        const contract = new Contract(contractaddress, NFTabi, provider);
        const Mintprice = await contract.PUB_MINT_PRICE();
        const MintPriceformatted = formatEther(Mintprice);
        const FinalResult = Number(MintPriceformatted);
        const PublicMintPrice = FinalResult;
        setpubmintprice(PublicMintPrice);
        return PublicMintPrice;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    async function FetchPublicMintActive() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        const NFTabi = abiObject;
        const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218";
        const contract = new Contract(contractaddress, NFTabi, provider);
        const Mintactive = await contract.pubMintActive();
        setpubmintactive(Mintactive);
        return Mintactive;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    FetchPublicMintPrice();
    FetchtotalSupply();
    FetchPublicMintActive();
    attemptPlay();
  }, [pubmintprice, account, library?.provider, totalSupply]);

  const handleMint = useCallback(async () => {
    if (!account || !quantity) {
      Swal.fire({
        icon: "error",
        title: "Connect Your Wallet To Mint, and Enter A Mint Quantity",
      });
    }
    if (quantity == 0) {
      Swal.fire({
        icon: "error",
        title: "Connect Your Wallet To Mint, and Enter A Mint Quantity",
      });
    }

    try {
      setLoading(true);
      const data = abiObject;
      const abi = data;
      const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218"; // "clienttokenaddress"
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        //const provider = getDefaultProvider()
        const signer = provider.getSigner()
        const contract = new Contract(contractaddress, abi, signer)
        const ethervalue = quantity * 0.05
        const etherstringvalue = JSON.stringify(ethervalue)
        const MintNFT = await contract.publicMint(quantity, { value: parseEther(etherstringvalue) }) //.claim()
        const signtransaction = await signer.signTransaction(MintNFT)
        const Claimtxid = await signtransaction
        Swal.fire({
          icon: "success",
          title: "Congratulations you have minted a GiveWellINU NFT",
          text: "Go View your item on Opensea",
        });
        return Claimtxid

    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [account, library?.provider, quantity]);



  //md:clip-path-clipsides border-t-4 border-b-4
  return (
    <div className="flex flex-col content-center items-center text-center mx-auto justify-center">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="min-w-full min-h-full absolute object-cover"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src="'../../public/ginuTokenomics.mp4'" type="video/mp4" /> Your browser does
            not support the video tag, update your browser
          </video>
        </div>
      <h5
        style={{ fontFamily:'Aquire' }}
        className="text-center mt-12 text-2xl sm:text-3xl mb:mb-2 text-4xl font-bold tracking-tight text-gray-100 dark:text-white"
      >
        Give Well Inu NFCT Collection
      </h5>
      {loading ? (
        <div className="content-center items-center">
          <Spin indicator={antIcon} className="add-spinner" />
          </div>
        ) : (<>      <button
          onClick={() => handleMint()}
          style={{ fontFamily:'Aquire' }}
          type="button"
          className="w-screen mb-12 justify-center elevation-10 align-center hover:elevation-50 md:w-96 h-24 justify-self-center mt-10
          text-gray-100 bg-purple-700 transition ease-in-out duration-700 hover:scale-105 focus:ring-4
          focus:ring-blue-300 font-medium rounded-xl px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-blue-700 
          focus:outline-none dark:focus:ring-blue-800 text-4xl"
        >
          Mint
        </button></>)}

      <div className="text-white mb-2"> <p style={{ fontFamily:'Aquire' }}>Select The Amount Of NFCT's You Would Like To Mint</p></div>
      <div style={{ fontFamily:'Aquire' }} className="text-white mb-2">{quantity} NFCT's</div>
      <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
<input onChange={(e) => setquantity(Number(e.target.value))}id="minmax-range" type="range" min="1" max="10" value={quantity} className="w-1/2 h-2 bg-purple-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

      <p style={{ fontFamily:'Aquire' }} className="mt-4 text-white text-center text-2xl"> Price: 0.05 ETH per NFT</p>
    </div>
  );
}
