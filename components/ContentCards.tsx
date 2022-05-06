import React from 'react'
import Image from 'next/image'
import { motion, MotionConfig, useMotionValue } from 'framer-motion'

const ContentCards = () => {
  return (
    <>
      <div className="m-auto my-5 px-10 py-10 bg-white items-center justify-center rounded-3xl shadow-2xl shadow-transparent 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:flex md:grid-cols-1 md:flex-col-reverse">
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">WEB 3: 3RD Generation WWW</h2>
            <p className="py-5 font-semibold ">
              Platforms and apps built on the blockchain with benefits shared
              between the users who create value.
            </p>
            <p>
              The last decade saw traditional Web 2 companies build user focused
              platforms where they profit off your activity and engagement. Web
              3 changes this and offers the opportunity to build user value
              driven offerings.
            </p>
          </div>
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover lg:object-contain md:object-fill"
            src="/web3.jpg"
            width={250}
            height={350}
          />
        </div>
      </div>

      <div className="m-auto my-5 px-10 py-10 bg-white items-center justify-center rounded-3xl shadow-2xl shadow-transparent 3xl:my-20 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:grid-cols-1">
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover lg:object-contain md:object-fill"
            src="/nft.png"
            width={250}
            height={350}
          /> 
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">
              NFTS: NON FUNGIBLE TOKEN
            </h2>
            <p className="py-5 font-semibold ">
              Online digital assets stored on the blockchain, with a verifiable
              trail of ownership and activity
            </p>
            <p>
              NFT’s are currently disrupting the world of art, media and
              collectibles, but their use cases are endless and offer
              opportunities across all variety of sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto my-5 px-10 py-10 bg-white items-center justify-center rounded-3xl shadow-2xl shadow-transparent 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:flex md:grid-cols-1 md:flex-col-reverse">
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">
              XR: EXTENDED REALITY
            </h2>
            <p className="py-5 font-semibold ">
              Visualising digital assets and experiences in both our world
              (Augmented Reality) and the virtual world (Virtual Reality).
            </p>
            <p>
              XR technology is gathering pace towards mainstream adoption. As
              the hardware becomes more affordable and accessible, we are
              already seeing disruption in entertainment and e-commerce.
            </p>
          </div>
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover lg:object-contain md:object-fill"
            src="/vr.jpg"
            width={250}
            height={350}
          />
        </div>
      </div>

      <div className="m-auto my-5 px-10 py-10 bg-white items-center justify-center rounded-3xl shadow-2xl shadow-transparent 3xl:my-20 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:grid-cols-1">
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover lg:object-contain md:object-fill"
            src="/metaverse.jpg"
            width={250}
            height={350}
          />
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">METAVERSE: VIRTUAL WORLDS</h2>
            <p className="py-5 font-semibold ">
              Online digital spaces where people come together to work,
              socialise and experience.
            </p>
            <p>
              The global pandemic accelerated a movement towards remote work and
              socialising which the Metaverse is set to capitalise on through
              enhanced experiences and functionality.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentCards
