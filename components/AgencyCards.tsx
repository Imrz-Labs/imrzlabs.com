import React from 'react'

const AgencyCards = () => {
  return (
    <>
      <div className="bg-slate m-auto h-auto w-screen">
        <div className="my-20">
          <h3 className="imrz-heading-3">WHO WE ARE</h3>
          <h2 className="imrz-heading-2">
            The <span className="uppercase">IMRZ</span> Way
          </h2>
        </div>

        <div className="imrz-card-wrapper">
          <div className="imrz-card">
            <img src="/innovation.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Innovative</h3>
              <p className="imrz-card-paragraph">
                We stay up-to-date with the latest tech developments to help you
                implement quickly.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/trustworthy.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Trustworthy</h3>
              <p className="imrz-card-paragraph">
                We are true to our word, backed by decades of experience
                delivering solutions for happy clients.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/collaboration.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Collaborative</h3>
              <p className="imrz-card-paragraph">
                The IMRZ ecosystem combines knowledge, technical know-how and
                years of experience from a wealth of partners and collaborators.
              </p>
            </div>
          </div>

          <div className="imrz-card">
            <img src="/agility.png" className="imrz-card-img" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Agile</h3>
              <p className="imrz-card-paragraph">
                We recognise that plans and priorities can change – Web 2 allows
                us to run a flexible cost base that shapes itself around your
                requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgencyCards
