import "tailwindcss-elevation";
import React, { useCallback, useEffect, useState } from "react";
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
///import { utils } from 'ethers'


export default function MintCardComponent() {
  const [loading, setLoading] = useState(false);
  const [totalSupply, settotalySupply] = useState(Number);
  const [pubmintprice, setpubmintprice] = useState(Number)
  const [pubmintactive, setpubmintactive] = useState(Boolean);
  const { account, chainId, active } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [quantity, setquantity] = useState(Number);
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }

  useEffect(() => {
    async function FetchtotalSupply() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        const NFTabi = abiObject;
        const contractaddress = "0xac046563E7104292fe9130b08360049F79A3B5BF";
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
        const contractaddress = "0xac046563E7104292fe9130b08360049F79A3B5BF";
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
        const contractaddress = "0xac046563E7104292fe9130b08360049F79A3B5BF";
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
  }, [pubmintprice, account, library?.provider, totalSupply]);

  const handleMint = useCallback(async () => {
    if (!account || !quantity) {
      Swal.fire({
        icon: "error",
        title: "Connect Your Wallet To Mint, and Enter A Mint Quantity",
      });
    }

    try {
      setLoading(true);
      const data = abiObject;
      const abi = data;
      const contractaddress = "0xac046563E7104292fe9130b08360049F79A3B5BF"; // "clienttokenaddress"
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        //const provider = getDefaultProvider()
        const signer = provider.getSigner()
        const contract = new Contract(contractaddress, abi, signer)
        const ethervalue = quantity * 0.02
        const etherstringvalue = JSON.stringify(ethervalue)
        const MintNFT = await contract.publicMint(quantity, { value: parseEther(etherstringvalue) }) //.claim()
        const signtransaction = await signer.signTransaction(MintNFT)
        const Claimtxid = await signtransaction
        Swal.fire({
          icon: "success",
          title: "Congratulations you have minted a Welcome Back Trump NFT",
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
    <div className="flex flex-col content-center items-center text-center mx-auto justify-center js-show-on-scroll">
      <h5
        style={{ fontFamily: "Cinzel, serif" }}
        className="text-center mt-12 text-2xl sm:text-3xl mb:mb-2 text-4xl font-bold tracking-tight text-gray-100 dark:text-white"
      >
        Welcome Back Trump Collection
      </h5>
      <button
        onClick={() => handleMint()}
        style={{ fontFamily: "Cinzel, serif" }}
        type="button"
        className="w-screen mb-12 justify-center elevation-10 align-center hover:elevation-50 md:w-96 h-24 clip-path-mycorners justify-self-center mt-10
        text-gray-100 bg-blue-700 transition ease-in-out duration-700 hover:scale-105 bg-blue-800 focus:ring-4
        focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
        focus:outline-none dark:focus:ring-blue-800 text-4xl"
      >
        Mint
      </button>
      <input
        className="bg-gray-50 mb-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          if (Number(e.target.value) > 0) {
            setquantity(Number(e.target.value));
          }
        }}
        type="number"
        id="fname"
        name="order_size"
        placeholder="amount of nfts"
      ></input>
      <p className="text-center text-2xl"> Price: 0.02 ETH per NFT</p>
    </div>
  );
}
