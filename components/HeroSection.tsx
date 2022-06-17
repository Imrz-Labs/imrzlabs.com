import React from 'react'

const HeroSection = () => {
  
  return (
    <>
      <div  className="h-[90vh] sm:h-[80vh] 4xl:h-sc w-screen bg-black bg-[url('/hero.png')] bg-fixed bg-center bg-no-repeat">
        <div className="bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-90 mix-blend-hue"></div>
      </div>
      <div className="absolute 4xl:top-[25%] top-[30%] text-white">
        <h1 className="hero-h1">
          Making Emerging Technologies Accessible
        </h1>
        <p className="hero-p">
          The online world is changing, and with it comes opportunities to take
          your business forward by immersing your business in the latest
          developments in technology and the internet.
        </p>

        <a href="#contact">
          <button type="button" className="button-pink">
            Talk To US
          </button>
        </a>
      </div>
    </>
  )
}

export default HeroSection
