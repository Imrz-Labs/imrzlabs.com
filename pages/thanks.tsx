import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Footer, TopMenu } from '../components'

const thanks = () => {
    
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000)
  }, [])

  return (
    <>
      <Head>
        <title>Form Successful | Imrz Labs</title>
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
      <div><TopMenu /></div>
      <div className="m-auto bg-white flex h-screen w-full flex-col items-center justify-center gap-y-5 overflow-hidden pb-[-250px] text-center">
        <Image src="/Success.png" width={250} height={250}/>
        <div className="text-lg">Thank You!</div>
        <div className="text-base">The form was submitted successfully.</div>
        <div>Redirecting in 3...</div>
      </div>
      <div><Footer /></div>

    </>
  )
}

export default thanks
