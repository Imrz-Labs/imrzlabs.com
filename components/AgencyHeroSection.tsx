import React from 'react'

const AgencyHeroSection = () => {
  return (
    <>
      <div className="bg-brand-gradient h-screen w-screen">
        <div className="absolute top-[30%] w-full text-white">
          <div className="m-auto w-9/12 mb-14">
            <img className="flex h-auto w-auto lg:hidden" src="/imrzagency.svg" alt="Imrz Agency"/>
            <img className="hidden lg:flex m-auto" src="/imrzagency-mid.svg" alt="Imrz Agency"/>
          </div>

          <h1 className="imrz-h1-hero">
            Use our experience, insight and agility to educate 
            your people and deliver solutions.
          </h1>
      
          <div className="imrz-b-hero">
            <a href="#contact">
              <button type="button" className="button-pink">
                Talk To US
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgencyHeroSection
