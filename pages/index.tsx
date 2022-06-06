import React from 'react'
import Head from 'next/head'
import { sanity, urlFor } from '../lib/sanity'
import {ActionArea, Footer, FormArea, HeroSection, Services, TopMenu} from '../components'
import ProjectTypes from '../components/ProjectTypes'

const index = () => {
  return (
    <>
      <Head>
        <title>Imrz Labs | Making Emerging Technologies Accessible For All</title>
        <meta name="description" content="Imrz Labs is a web 3.0 company created by industry 4 veterans who have started and sold highly scaleable tech companies with the goal to make emerging technologies accessible for everyone" />
        <meta name="keywords" content="Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz ventures, 3D, metaverse, oasis, ar, vr, xr, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking" />
        <link rel="icon" href="/imrzicon.gif" />
      </Head>

      <div><TopMenu /></div>
      <div><HeroSection /></div>
      <div><Services /></div>
      <div><ProjectTypes /></div>
      <div><ActionArea /></div>
      <div><FormArea /></div>
      <div><Footer /></div>

      
    </>
  )
}

export default index


