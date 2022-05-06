import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { TopMenu, FormArea, Footer } from '../components'
import VentureHero from '../components/VentureHero'

const team = () => {
  return (
    <>
      <Head>
        <title>Imrz Ventures | Reality is your canvas!</title>
        <meta
          name="description"
          content="Imrz Labs is a web 3.0 company created by industry 4 veterans who have started and sold highly scaleable tech companies with the goal to make emerging technologies accessible for everyone"
        />
        <meta
          name="keywords"
          content="Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz ventures, 3D, metaverse, oasis, ar, vr, xr, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking"
        />
        <link rel="icon" href="/imrzicon.gif" />
      </Head>

      <div>
        <TopMenu />
      </div>
      <div className="h-screen w-screen">
        <div className="bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-80 mix-blend-hue"></div>
      </div>
      <div className="absolute top-[30%] w-full text-white">
        <div className="ml-24 w-full">
          <Image
            className="flex items-start justify-start"
            src="/imrzpeople.svg"
            alt="Imrz Labs Agency"
            width={350}
            height={100}
          />
        </div>

        <h1 className="my-14 mx-auto ml-48 flex w-5/12 items-center justify-start text-left text-base font-bold 3xl:w-7/12 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny ">
          The IMRZ eco-system expands daily and includes a roster of experience
          and innovation.
        </h1>

        <a href="http://">
          <button
            type="button"
            className="hover:bg-brand-gradient ml-48 mb-20 flex h-[70px] w-[275px] items-center justify-center rounded-xl bg-pink-500 px-5 text-xs font-semibold uppercase text-white shadow transition ease-in-out hover:text-white hover:duration-150"
          >
            JOIN OUR DISCORD
          </button>
        </a>
      </div>
      <div className="mt-[-33%]">
        <Image
          className="relative h-screen w-screen object-contain"
          src="/team.png"
          alt="Imrz Labs Agency"
          width={350}
          height={100}
          layout="responsive"
        />
      </div>
      <div>
        <FormArea />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default team
