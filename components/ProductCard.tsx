import React from 'react'

const ProductCard = () => {
  return (
    <>
      <div className="bg-slate m-auto h-auto w-screen">
        <div className="my-20">
          <h3 className="imrz-heading-3">MADE IN IMRZ LABS</h3>
          <h2 className="imrz-heading-2">
            Products
          </h2>
        </div>

        <div className="imrz-card-wrapper sm:ml-9">
        <a target='_blank' href="https://www.imrzcommerce.com">
          <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
            <img src="/imrzcommerce-banner.png" className="imrz-card-img rounded" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Imrz Commerce</h3>
              <p className="imrz-card-paragraph">
                XR/Metaverse engine and platform enabling virtual try before you
                buy experiences across retail and eCommerce
              </p>
            </div>
          </div>
          </a>
          <a target='_blank' href="https://www.fastvault.io">
          <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
            <img src="/fastvault-banner.png" className="imrz-card-img rounded" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Fastvault</h3>
              <p className="imrz-card-paragraph">
                Seamlessly turning digital identities, files and documents into
                non-fungible tokens (NFTs)
              </p>
            </div>
          </div>
          </a>
          <a target='_blank' href="https://www.evenft.co.uk">
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
          </a>
            <a target='_blank' href="https://www.workdril.com">
              <div className="imrz-card h-[350px] lg:h-auto lg:pb-10">
                <img src="/workdril-banner.png" className="imrz-card-img rounded " />
                <div className="items-center text-center">
                  <h3 className="imrz-card-heading">Workdril</h3>
                  <p className="imrz-card-paragraph">
                    Project Management and Collaboration tool for the web 3.0
                    community
                  </p>
                </div>
              </div>
            </a>
        </div>
      </div>
    </>
  )
}

export default ProductCard
