import React from 'react'

const AgencyHeroSection = () => {
  return (
    <>
      <div className="h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen">
        <div className="md:pt-[110px] 4xl:pt-[200px] w-full text-white">
          <div className="m-auto w-9/12">
            <img
              className="flex pb-10 h-auto w-auto lg:hidden"
              src="/imrzagency.svg"
              alt="Imrz Agency"
            />
            <img
              className="m-auto hidden lg:flex"
              src="/imrzagency-mid.svg"
              alt="Imrz Agency"
            />
          </div>

          <h1 className="imrz-h1-hero md:mt-8">
            Use our experience, insight and agility to elevate your business and
            deliver future focused solutions.
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
