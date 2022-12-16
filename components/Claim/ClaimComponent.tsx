import "tailwindcss-elevation";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";
import { Accordion } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { abiObject } from "../../contracts/abi.mjs";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ScrollpositionAnimation from "../../hooks/OnScroll";

export default function ClaimComponent() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { account } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const [loading, setLoading] = useState(false);
  const [claim, setcanclaim] = useState(Boolean);
  const { library } = context;
  const [uniswaprovider, setuniswapprivder] = useState();
  const [tokenid, settokenid] = useState(Number);
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }

  const Claimtoken = useCallback(async () => {
    if (!account) {
      Swal.fire({
        icon: "error",
        title: "Connect Your Wallet To Mint, and Enter A Mint Quantity",
        timer: 5000,
      });
    }

    try {
      setLoading(true);
      const data = abiObject;
      const abi = data;
      const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218"; // "clienttokenaddress"
      const provider = new Web3Provider(
        library?.provider as ExternalProvider | JsonRpcFetchFunc
      );
      //const provider = getDefaultProvider()
      const signer = provider.getSigner();
      const contract = new Contract(contractaddress, abi, signer);
      console.log(contract);
      const ClaimTokens = await contract.ClaimTokens(tokenid); //.claim()
      const signtransaction = await signer.signTransaction(ClaimTokens);
      const Claimtxid = await signtransaction;
      Swal.fire({
        icon: "success",
        title: "Congratulations you have Claimed all of your rewards",
        text: "Go see them in your wallet, and stick around for the next drop",
      });
      return Claimtxid;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [account, library?.provider, claim]);

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
        console.log({
          message: "Hold On there Partner, there seems to be an Account err!",
        });
        return;
      }
      try {
        //setLoading(true)
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        const abi = abiObject;
        const contractaddress = "0xC1948D3FECaF1B33bB5b1bff22f944Cdc595C218";
        const contract = new Contract(contractaddress, abi, provider);
        //const FinalResult = await UserTokenBalance.toString()
        if (!account) {
          return Swal.fire({
            icon: "error",
            title: "Connect your wallet to claim",
            text: "you must connect your wallet to claim",
          });
        } else {
          const usersclaimperiod = await contract.NFTSPeriodId(account);
          const currentperiod = await contract.currentRewardPeriodId();
          (await usersclaimperiod) && (await currentperiod);
          console.log(usersclaimperiod);
          console.log(currentperiod);
          if (usersclaimperiod <= currentperiod) {
            setcanclaim(true);
          } else {
            setcanclaim(false);
          }
          return currentperiod;
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log(claim);
      }
    }
    CanClaim();
    setProvider().then((result) => setuniswapprivder(result as any));
  }, [account]);

  return (
    <>
      <div className="flex flex-col w-full md:px-20 content-center items-center lg:px-48 xl:px-64 js-show-on-scroll">
        <h5
          style={{ fontFamily: "Aquire" }}
          className="text-center mb-2 text-3xl font-bold tracking-tight self-center text-purple-100 dark:text-white"
        >
          Claim ETH Rewards
        </h5>
        {loading ? (
          <Spin indicator={antIcon} className="add-spinner" />
        ) : (
          <>
            <div className="flex flex-row bg:white w-full content-center items-center max-w-screen">
              <button
                style={{ fontFamily: "Aquire" }}
                type="button"
                onClick={() => Claimtoken()}
                className="w-full mx-0 self-center content-center tn:mx-0 elevation-10 hover:elevation-50 md:mx-48 h-24 clip-path-mycorners justify-self-center mt-10
            text-gray-100 bg-purple-700 transition ease-in-out duration-700 hover:bg-purple-800 hover:text-white focus:ring-4
            focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 
            focus:outline-none dark:focus:ring-blue-800 text-4xl"
              >
                Claim
              </button>
            </div>

          </>
        )}
      </div>

      <div className="content-center max-w-screen"></div>

      <div></div>
    </>
  );
}
