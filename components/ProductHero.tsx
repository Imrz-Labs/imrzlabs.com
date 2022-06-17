import React from 'react'
import Image from 'next/image'

const ProductHero = () => {
  return (
    <>
      <div className="h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen">
        <div className="md:pt-[110px] 4xl:pt-[150px] w-full text-white">
          <div className="m-auto w-9/12">
            <img
              className="h-[115px] pb-10 w-auto hidden"
              src="/imrzproducts.svg"
              alt="Imrz Products"
            />
            <img
              className="m-auto flex 4xl:mb-8 md:m-0 h-[125px] md:h-auto"
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
