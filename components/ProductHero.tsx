import React from 'react'
import Image from 'next/image'

const ProductHero = () => {
  return (
    <>
      <div className="bg-brand-gradient h-screen w-screen">
        <div className="absolute top-[30%] w-full text-white">
          <div className="m-auto mb-14 w-9/12">
            <img
              className="flex h-auto w-auto lg:hidden"
              src="/imrzproducts.svg"
              alt="Imrz Products"
            />
            <img
              className="m-auto hidden lg:flex"
              src="/imrzproducts-mid.svg"
              alt="Imrz Products"
            />
          </div>

          <h1 className="imrz-h1-hero">
            We’ve developed a number of Web3 focused products that demonstrate
            our innovation capability in the space.
          </h1>

          <div className="imrz-b-hero">
            <a href="#">
              <button type="button" className="button-pink">
                Join Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHero
