import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { TopMenu, FormArea, Footer } from '../components'
import AgencyHeroSection from '../components/AgencyHeroSection'
import AgencyCards from '../components/AgencyCards'
import CardServices from '../components/AgencyHeroSection'
import AgencyServices from '../components/AgencyServices'

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

      <TopMenu />
      <AgencyHeroSection />
      <AgencyCards />
      <AgencyServices />
      <FormArea />
      <Footer />
    </>
  )
}

export default agency
