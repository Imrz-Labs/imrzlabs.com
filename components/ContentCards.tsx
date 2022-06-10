import React from 'react'
import Image from 'next/image'

const ContentCards = () => {
  return (
    <>
      <div className="m-auto my-5 items-center justify-center rounded-3xl bg-white px-10 py-10 drop-shadow-base  3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:flex md:grid-cols-1 md:flex-col-reverse">
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">
              WEB 3: 3RD
              Generation Of The Web
            </h2>
            <p className="py-5 font-semibold ">
              Platforms and apps built on the blockchain with benefits shared
              between the users who create value.
            </p>
            <p>
              The last decade saw traditional Web 2 companies build platforms
              focused on profiting off user data and engagement. Web 3 is a step
              change from this, offering the opportunity to build user-driven
              value offerings.
            </p>
          </div>
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover"
            src="/web3.jpg"
            width={250}
            height={350}
          />
        </div>
      </div>

      <div className="m-auto my-5 items-center justify-center rounded-3xl bg-white px-10 py-10 drop-shadow-base 3xl:my-20 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:grid-cols-1">
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover"
            src="/nftii.jpg"
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
              NFTs are currently disrupting the world of art, media and
              collectibles, but their use-cases are endless and offer
              opportunities across a myriad of sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto my-5 items-center justify-center rounded-3xl bg-white px-10 py-10 drop-shadow-base 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
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
              hardware becomes more accessible and affordable, more disruption
              is taking place within entertainment and e-commerce.
            </p>
          </div>
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover"
            src="/xrverse.jpg"
            width={250}
            height={350}
          />
        </div>
      </div>

      <div className="m-auto my-5 items-center justify-center rounded-3xl bg-white px-10 py-10 drop-shadow-base 3xl:my-20 3xl:w-9/12 2xl:w-9/12 xl:w-11/12 lg:my-[-20px] md:my-20">
        <div className="grid grid-cols-2 gap-20 md:grid-cols-1">
          <Image
            className="col-start-1 my-auto mx-auto rounded-3xl object-cover"
            src="/imrzverse.jpg"
            width={250}
            height={350}
          />
          <div className="my-auto md:mt-[-40px]">
            <h2 className="text-base font-bold md:text-sm">
              METAVERSE: VIRTUAL WORLDS
            </h2>
            <p className="py-5 font-semibold ">
              Online digital spaces where people come together to work,
              socialise and experience.
            </p>
            <p>
              The global pandemic accelerated a move towards remote work and
              online socialising, which the Metaverse is set to capitalise on
              through augmented experiences and functionality.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentCards
