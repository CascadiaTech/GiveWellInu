import './index.css'
import 'tw-elements'
import 'tailwindcss-elevation'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
//import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
export default function FaqComponent() {
  const [hidden, sethidden] = useState(true)
  //const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 4000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  return (
    <div>
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
        <div className="flex space-y-8 justify-center flex-col ...">
          <div className="flex-row w-screen text-center justify-center">
            <h1
              style={{
                marginTop: '10px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              }}
            >
              FAQ
            </h1>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-grey border border-white-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-white-800 text-left
        bg-grey
        border-1
        rounded-10
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What applications have you built?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5 max-w-screen-md">
                  <strong>We specialize in building protocols.{''} </strong> {''} Fullstack applications are our
                  strength, We are specialized in deisgning web applications using React, Node.js and Tailwindcss to
                  make your web application responsive and fast. Our smart contract are written in solidity and tested
                  on the goerli testnet thoroughly before release, auditing services are available to all our clients
                </div>
              </div>
            </div>
            <div className="accordion-item bg-grey border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What frameworks and languages do you know?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5 max-w-screen-md">
                  <strong>We know most of the popular frontend, and backend languages and frameworks.{''} </strong> {''}{' '}
                  For frontend development we are masters at React, Next.js, fetch, javascript, and Tailwindcss,
                  web3.js, and ethers.js to produce sleex and fast web applications. For backend programming we love
                  working with python, flask or the MERN stack ( MongoDB, Express, Node.js, React) we have also deployed
                  subgraphs for indexing smart contract events as viewable on our github
                </div>
              </div>
            </div>
            <div className="accordion-item bg-grey border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Whats your process?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5 max-w-screen-md">
                  <strong>
                    We find it very important to work with the client so that they understand their platform. {''}
                  </strong>
                  {''} Upon commencing a project with us we give you safe download access to your codebase so you can
                  keep track as we develop, We deploy to vercel, and if applicable related testnets so that our client
                  can test their app as it progresses. We stick to the plan, and update you when you need
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}
