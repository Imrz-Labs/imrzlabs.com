import React from 'react'
import Image from 'next/image'

const ProductHero = () => {
  return (
    <>
      <div className="h-[90vh] bg-brand-gradient w-screen">
        <div className="absolute top-[20%] w-full text-white">
          <div className="m-auto mb-14 w-9/12">
            <img
              className="flex h-[115px] w-auto lg:hidden"
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
            <a href="#contact">
              <button type="button" className="button-pink">
                Build With US
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHero
