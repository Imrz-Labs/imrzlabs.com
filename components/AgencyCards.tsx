import React from 'react'


const AgencyCards = () => {
  return (
    <>
      <div className="bg-slate m-auto h-auto w-screen">
        <div className="my-20">
          <h3 className="imrz-heading-3">
            WHO WE ARE
          </h3>
          <h2 className="imrz-heading-2">
            The <span className="uppercase">IMRZ</span> Way
          </h2>
        </div>

        <div className="imrz-card-wrapper">
          <div className="imrz-card">
            <img src="/innovation.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Innovation</h3>
              <p className="imrz-card-paragraph">
                we stay up to date with the latest developments in tech so that
                we can help you implement them
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/trustworthy.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Trustworthy</h3>
              <p className="imrz-card-paragraph">
                We do what we say we’re going to do, backing this up with over
                30 years experience delivering solutions for happy clients.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/collaboration.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Collaboration</h3>
              <p className="imrz-card-paragraph">
                The IMRZ eco-system brings together knowledge, technical ability
                & experience from a wealth of partners and collaborators.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/agility.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Agility</h3>
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

export default AgencyCards
