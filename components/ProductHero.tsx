import React from 'react'
import Image from 'next/image'

const ProductHero = () => {
  return (
    <>
      <div className="h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen">
        <div className="pt-[110px] w-full text-white">
          <div className="m-auto w-9/12">
            <img
              className="flex h-[115px] w-auto lg:hidden"
              src="/imrzproducts.svg"
              alt="Imrz Products"
            />
            <img
              className="m-auto hidden lg:flex"
              src="/imrzproducts-mid.png"
              alt="Imrz Products"
            />
          </div>

          <h1 className="imrz-h1-hero mt-8">
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
