import React from 'react'

const AgencyHeroSection = () => {
  return (
    <>
      <div className="h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen">
        <div className="pt-20 w-full text-white">
          <div className="m-auto mb-14 w-9/12">
            <img
              className="flex h-auto w-auto lg:hidden"
              src="/imrzagency.svg"
              alt="Imrz Agency"
            />
            <img
              className="m-auto hidden lg:flex"
              src="/imrzagency-mid.svg"
              alt="Imrz Agency"
            />
          </div>

          <h1 className="imrz-h1-hero">
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
