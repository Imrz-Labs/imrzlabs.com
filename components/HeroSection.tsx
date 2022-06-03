import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black bg-[url('/hero.png')] bg-fixed bg-center bg-no-repeat">
        <div className="bg-brand-gradient mb-20 inset-x-0 top-0 flex h-screen opacity-90 mix-blend-hue"></div>
      </div>
      <div className="absolute top-[30%] text-white">
        <h1 className="mx-auto w-full pb-5 text-center text-xl xl:text-lg font-bold 3xl:w-9/12 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-base sm:w-full sm:text-sm">
          Making Emerging Technologies <br/>Accessible To All 
        </h1>
        <p className="mx-auto w-7/12 text-center text-sm 3xl:w-7/12 xl:w-10/12 3xl:px-10 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny ">
          The online world is changing, and with it comes opportunities to take
          your business forward by immersing your business in the latest
          developments in technology and the internet.
        </p>

        <a href="#contact">
        <button type="button" className="button-pink">Talk To US</button>        
        </a>
      </div>
    </>
  )
}

export default HeroSection
