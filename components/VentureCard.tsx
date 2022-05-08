import React from 'react'

const VentureCard = () => {
  return (
    <>
      <div className="bg-slate m-auto h-auto w-screen">
        <div className="my-20">
          <h3 className="imrz-heading-3">What We Do</h3>
          <h2 className="imrz-heading-2">
            <span className="uppercase">IMRZ</span> Products
          </h2>
        </div>

        <div className="imrz-card-wrapper">
          <div className="imrz-card">
            <img src="/innovation.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Imrz Commerce</h3>
              <p className="imrz-card-paragraph">
                An Extended Reality & Metaverse platform that allow retail and
                ecommerce brands to eliminate product doubts, increase
                conversion and reduce return rates by allowing their buying to
                see and visualize products in real time with AR/VR before buying
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/trustworthy.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">NiftyTwin</h3>
              <p className="imrz-card-paragraph">
                We do what we say we’re going to do, backing this up with over
                30 years experience delivering solutions for happy clients.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/collaboration.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">FastVault</h3>
              <p className="imrz-card-paragraph">
                The IMRZ eco-system brings together knowledge, technical ability
                & experience from a wealth of partners and collaborators.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/agility.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">EveNFT</h3>
              <p className="imrz-card-paragraph">
                We realise that plans and priorities change – Web3 allows us to
                run a flexible cost base that shapes itself around your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VentureCard
