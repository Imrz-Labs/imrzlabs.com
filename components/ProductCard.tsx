import React from 'react'

const ProductCard = () => {
  return (
    <>
      <div className="bg-slate m-auto h-auto w-screen">
        <div className="my-20">
          <h3 className="imrz-heading-3">MADE BY IMRZ LABS</h3>
          <h2 className="imrz-heading-2">Products</h2>
        </div>

        <div className="imrz-card-wrapper">
            <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
              <img
                src="/imrzcommerce-banner.png"
                className="imrz-card-img rounded"
              />
              <div className="items-center text-center">
                <h3 className="imrz-card-heading">IMRZ Commerce</h3>
                <p className="imrz-card-paragraph">
                  XR platform enabling virtual try before you buy experiences
                  across retail and eCommerce
                </p>
              </div>
            </div>
            <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
              <img
                src="/fastvault-banner.png"
                className="imrz-card-img rounded"
              />
              <div className="items-center text-center">
                <h3 className="imrz-card-heading">Fastvault</h3>
                <p className="imrz-card-paragraph">
                  Fastvault is a decentralized storage solution which allows you
                  to turn ID verfified digital assets into NFTs
                </p>
              </div>
            </div>
            <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
              <img src="/evenft-banner.png" className="imrz-card-img rounded" />
              <div className="items-center text-center">
                <h3 className="imrz-card-heading">EveNFT</h3>
                <p className="imrz-card-paragraph">
                  Enabling Event organizers to create and giveaway NFTs to their
                  attendees
                </p>
              </div>
            </div>
            <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
              <img
                src="/workdril-banner.png"
                className="imrz-card-img rounded "
              />
              <div className="items-center text-center">
                <h3 className="imrz-card-heading">Workdril</h3>
                <p className="imrz-card-paragraph">
                  Project Management and Collaboration tool for the web 3.0
                  community
                </p>
              </div>
            </div>
        </div>
        <div className="m-auto flex w-full items-center justify-center mt-[-80px] mb-20">
            <a target="_blank" href="https://discord.gg/5eruR3BAH7">
              <button type="button" className="button-pink w-auto">
                JOIN DISCORD FOR EARLY ACCESS
              </button>
            </a>
          </div>
      </div>
    </>
  )
}

export default ProductCard
