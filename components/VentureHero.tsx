import React from 'react'
import Image from 'next/image'

const VentureHero = () => {
  return (
    <>
      <div className="bg-brand-gradient h-screen w-screen">
        <div className="absolute top-[30%] w-full text-white">
          <div className="m-auto mb-14 w-9/12">
            <img
              className="flex h-auto w-auto lg:hidden"
              src="/imrzventures.svg"
              alt="Imrz Ventures"
            />
            <img
              className="m-auto hidden lg:flex"
              src="/imrzventures-mid.svg"
              alt="Imrz Ventures"
            />
          </div>

          <h1 className="imrz-h1-hero">
            Come and build the technology of tomorrow with us.
          </h1>

          <div className="imrz-b-hero">
            <a href="#">
              <button type="button" className="button-pink">
                Join Our Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default VentureHero
