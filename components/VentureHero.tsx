import React from 'react'
import Image from 'next/image'

const VentureHero = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-80 mix-blend-hue"></div>
      </div>
      <div className="absolute top-[30%] w-full text-white">
        <div className="ml-48 w-full">
          <Image
            className="flex items-start justify-start"
            src="/imrzventures.svg"
            alt="Imrz Labs Agency"
            width={350}
            height={100}
          />
        </div>

        <h1 className="my-14 mx-auto ml-48 flex w-5/12 items-center justify-start text-left text-base font-bold 3xl:w-7/12 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny ">
          Come and build the technology of tomorrow with us.
        </h1>

        <a href="#">
        <button type="button" className="button-pink ml-48">JOIN OUR DISCORD</button>        
        </a>
      </div>
    </>
  )
}

export default VentureHero
