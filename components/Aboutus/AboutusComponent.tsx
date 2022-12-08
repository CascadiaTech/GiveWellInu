//import { de}
import React, { useEffect } from "react";
import Image from "next/image";
import city from "../../assets/images/city.jpeg";
import ScrollpositionAnimation from "../../hooks/OnScroll";

export default function AboutusComponent() {
    if (typeof window !== "undefined") {
        useEffect(() => {
          // Update the document title using the browser API
          ScrollpositionAnimation();
        }, [window.scrollY]);
      }
  return (
    <>
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white js-show-on-scroll">
          Why Real Estate?
        </h1>
        <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 js-show-on-scroll">
          Buying real estate has been a staple of our world economy for a
          plethora of reasons. To begin with, unlike fiat currency, there is a
          limited amount of real estate on earth that is quickly being depleted
          through population and economic growth making it a powerful hedge
          against inflation. Over the long term, real estate has been an
          appreciating asset, with average home prices growing over 18% in the
          United States just in 2021 according to Forbes.com. Additionally, with
          the changing climate, scientists predict sea levels to rise –
          therefore making habitable real estate even more scarce than it
          already is. Historically, holding real estate has been safer and more
          lucrative than holding inflationary currencies such as fiat.
        </p>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white js-show-on-scroll">
          REX Is Making It Easy
        </h1>
        <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 js-show-on-scroll">
          If getting into real estate is so great, why isn’t everybody doing it?
          Unfortunately, up until now, real estate has had many barriers to
          entry, including, but not limited to: high costs, lack of experience,
          lack of time, geographic boundaries, and last, but certainly not
          least, liquidity. REX is aiming to fix all of these problems with our
          tokenized real estate and exchange platform. By tokenizing real
          estate, everyday people will be able to buy tokens representing real
          properties all over the world. These real estate tokens are fractional
          and fungible, therefore there is no need to break the bank and buy a
          whole property, but just a portion thereof. While you’re at it, why
          not buy property tokens all over the world and build your own crypto
          real estate portfolio?
        </p>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white js-show-on-scroll">
          Can I Tokenize My Property?
        </h1>
        <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 js-show-on-scroll">
          Property owners also have many incentives to tokenize their
          properties. Aside from the liquidity REX provides, property owners can
          also easily maintain control of a property while selling a small part
          of their tokens. Additionally, property owners can raise funds through
          their token sales to diversify their real estate portfolios, upgrade
          their properties, or even pay off their mortgage! All tokenized
          properties listed onto REX are owned by third parties such as real
          estate investment funds, developers, investors, and private
          individuals. Tokenizing a property will require information about the
          property, proof of ownership, and the owner’s information and plans
          for the property. Once all documentation passes REX’s verification
          procedure you will be able to tokenize your property and list it onto
          REX.
        </p>
      </div>
    </>
  );
}
