import React from 'react'

const AgencyServices = () => {
  return (
    <>
      {/********************************START AGENCY SERVICES WRAPPER ********************************/}

      <div className="imrz-black h-auto text-white py-3 md:pb-28">
        {/********************************HEADING ********************************/}

        <div className="my-20">
          <h3 className="imrz-heading-3">What We Do</h3>
          <h2 className="imrz-heading-2 text-white">Our Services</h2>
        </div>

        {/********************************SERVICES GRID ********************************/}

        <div className="grid grid-cols-3 m-auto w-10/12 xl:w-11/12 md:grid-cols-1 md:gap-12">
          {/*****Strategy*****/}
          <div className="agency-services">
            <img src="/strategy.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Strategy</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Identifying opportunities to utilise blockchain and extended
                reality solutions for your business.
              </p>
            </div>
          </div>

          {/*****Workshops*****/}
          <div className="agency-services">
            <img src="/workshop.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Workshops</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Educating you and your team around the art of the possible, best
                case examples and what your competitors are doing in the space.
              </p>
            </div>
          </div>

          {/*****Project Delivery*****/}
          <div className="agency-services">
            <img src="/delivery.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Project Delivery</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Our network of Web3 developers can be deployed and managed to
                deliver projects for your organisation.
              </p>
            </div>
          </div>
        </div>

        {/********************************END WRAPPER ********************************/}
      </div>
    </>
  )
}

export default AgencyServices
