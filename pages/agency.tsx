import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { TopMenu, FormArea, Footer } from '../components'
import AgencyHeroSection from '../components/AgencyHeroSection'
import CardServices from '../components/AgencyHeroSection'

const agency = () => {
  return (
    <>
      <Head>
        <title>Imrz Agency | Experts in web 3.0 and the metaverse</title>
        <meta
          name="description"
          content="Imrz Agency is a sub part of Imrz Labs focused on strategic development, project delivery and workshops for the web 3.0 and metaverse generation"
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
      <div>
        <AgencyHeroSection />
      </div>
      <div className="mt-[-33%]">
        <Image
          className="relative h-screen w-screen object-contain"
          src="/imrzway.png"
          alt="Imrz Labs Agency"
          width={350}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="mt-[-33%]">
        <Image
          className="relative h-screen w-screen object-contain"
          src="/services.png"
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

export default agency
