import "tailwindcss-elevation";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";
import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import {
    ExternalProvider,
    getDefaultProvider,
    JsonRpcFetchFunc,
    Web3Provider,
  } from "@ethersproject/providers";
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from "@ethersproject/bignumber";
import { abiObject }  from '../../contracts/abi.mjs'

export default function ClaimComponent() {
    const { account } = useWeb3React();
    const showConnectAWallet = Boolean(!account);
    const context = useWeb3React();
    const [loading, setLoading] = useState(false);
    const [claim, setcanclaim] = useState(Number)
    //const [claimall, setclaimall] = useState(Boolean)
    //const [claimone, setclaimone] = useState(Boolean)
    const { library } = context;
    const [uniswaprovider, setuniswapprivder] = useState();

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

    async function CanClaim() {
      if (!account) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }
      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = abiObject
        const contractaddress = '0xc68A4C68F17fed266A5e39e7140650acAdfE78F8'
        const contract = new Contract(contractaddress, abi, provider)
        //const FinalResult = await UserTokenBalance.toString()
        if (!account) {
          return Swal.fire({
          icon: "error", 
          title: "Connect your wallet to claim",
          text: "you must connect your wallet to claim"})
        } else {
          const ClaimableBalance = await contract.claimall(account)
          const convert = BigNumber.from(ClaimableBalance)
          const final = Number(convert)
          setcanclaim(final)
          return final
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
  
    setProvider().then((result) => setuniswapprivder(result as any));
  }, [account]);


  async function ClaimOne(tokenaddress: String) {
    if (!account) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const abi = abiObject
      const signingprovider = new Web3Provider(library.provider)
      const signer = signingprovider.getSigner()
      const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.claimone(tokenaddress) //.claim(account,amount)
      const final = await signer.signTransaction(ClaimBalance)
      const Claimtxid = await final

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  async function ClaimAll(tokenaddress: String) {
    if (!account) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const abi = abiObject
      const signingprovider = new Web3Provider(library.provider)
      const signer = signingprovider.getSigner()
      const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.claimone(tokenaddress) //.claim(account,amount)
      const final = await signer.signTransaction(ClaimBalance)
      const Claimtxid = await final

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/7724cb4383a249dfb4a847c90954b901"],
    3: ["https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
  };
  return (
<div className="w-full sm:px-4 md:px-20 lg:px-48 xl:px-64">
    <div className={'bg-gray-900 h-48 font-medium border-gray-100 border-2 mx-auto px-6 sm:px-6 md:px-12 lg:px-24 flex flex col justify-between'}>
      <h5
      style={{ fontFamily: "Cinzel, serif" }}
      className="mb-2 text-3xl font-bold tracking-tight self-center text-purple-100 dark:text-white">
      Claim Tokens</h5>
      <div className={'self-center border-gray-800'}>
        <button className="bg-gray-700 hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 rounded-full">
        <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        className="text-blue-100 hover:underline dark:text-blue-500"
        >
        Claim All Tokens
        </a>
        </button>
      </div> 
    </div>
  <div>
<Accordion style={{ border: 'transparent'}} alwaysOpen={true}>
<Accordion.Panel>
    <Accordion.Title className={'mx-auto flex flex col w-screen hover:text-black' } style={{ color: '#717171', fontSize: '20px',
     justifyContent: 'center' }}>
    <p> Meow Meow Token!</p>
    </Accordion.Title>
  <Accordion.Content>
    <div className={'mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex col justify-between'}>
      <p className="mb-2 text-gray-100 hover:underline hover:text-blue-500 dark:text-blue-500 
      cursor-pointer dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Token Address: 0x0sdf79sv08089906s8976sd090h087
      </p>
      <p className="mb-2 text-gray-100 dark:text-blue-500 dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Total Rewards Available:
      </p>
      <div className={'bg-white border border-black text-black py-2 px-2 rounded full'}>0.00000</div>
      <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        className="text-blue-100 hover:underline dark:text-blue-500"
        >
        Claim Me
        </a>
    </button>
    </div>
  </Accordion.Content>
</Accordion.Panel>
<Accordion.Panel>
<div className={'justify-center w-full mx-auto flex flex col h-full bg-black text-white hover:text-black hover:bg-black'}>
    <Accordion.Title className={'mx-auto flex flex col w-screen hover:text-black' } style={{ color: '#717171', fontSize: '20px',
     justifyContent: 'center' }}>
    <p> FireBlade Token!</p>
    </Accordion.Title>
</div>
  <Accordion.Content>
  <div className={'mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex col justify-between'}>
      <p className="mb-2 text-gray-100 hover:underline hover:text-blue-500 dark:text-blue-500 
      cursor-pointer dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Token Address: 0x0sdf79sv08089906s8976sd090h087
      </p>
      <p className="mb-2 text-gray-100 dark:text-blue-500 dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Total Rewards Available:
      </p>
      <div className={'bg-white border border-black text-black py-2 px-2 rounded full'}>0.00000</div>
      <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        className="text-blue-100 hover:underline dark:text-blue-500"
        >
        Claim Me
        </a>
    </button>
  </div>
  </Accordion.Content>
</Accordion.Panel>
<Accordion.Panel>
    <Accordion.Title className={'mx-auto flex flex col w-screen hover:text-black' } style={{ color: '#717171', fontSize: '20px',
     justifyContent: 'center' }}>
    <p> MonkeyBalls!</p>
    </Accordion.Title>
  <Accordion.Content>
  <div className={'mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex col justify-between'}>
      <p className="mb-2 text-gray-100 hover:underline hover:text-blue-500 dark:text-blue-500 
      cursor-pointer dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Token Address: 0x0sdf79sv08089906s8976sd090h087
      </p>
      <p className="mb-2 text-gray-100 dark:text-blue-500 dark:text-gray-400 sm:text-md md:text-lg lg:text-xl">
      Total Rewards Available:
      </p>
      <div className={'bg-white border border-black text-black py-2 px-2 rounded full'}>0.00000</div>
      <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        className="text-blue-100 hover:underline dark:text-blue-500"
        >
        Claim Me
        </a>
    </button>
  </div>
  </Accordion.Content>
</Accordion.Panel>
</Accordion>
</div>
</div>
  )
}