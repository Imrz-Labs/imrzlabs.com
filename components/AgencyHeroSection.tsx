import React from 'react'
import Image from 'next/image'


const AgencyHeroSection = () => {
  
  return (
    <>
      <div className="bg-brand-gradient h-screen w-screen">
      <div className="absolute top-[30%] w-full text-white">
        <div className="ml-48 w-full">
          <Image
            className="flex items-start justify-start"
            src="/imrzagency.svg"
            alt="Imrz Labs Agency"
            width={350}
            height={100}
          />
        </div>

        <h1 className="my-14 mx-auto ml-48 flex w-5/12 items-center justify-start text-left text-base font-bold 3xl:w-7/12 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny ">
          Use our experience, insight and agility to educate your people and
          deliver solutions.
        </h1>

        <a href="#contact">
        <button type="button" className="button-pink ml-48">Talk To US</button>        
        </a>
      </div>
      </div>
    </>
  )
}

export default AgencyHeroSection
