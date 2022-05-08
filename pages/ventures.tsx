import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { TopMenu, FormArea, Footer } from '../components'
import VentureCard from '../components/VentureCard'
import VentureHero from '../components/VentureHero'

const ventures = () => {
  return (
    <>
      <Head>
        <title>
          Imrz Ventures | Reality is your canvas!
        </title>
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
      <div>
        <VentureHero />
      </div>
      <div>
        <VentureCard />
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

export default ventures
