import React from 'react'

const AgencyServices = () => {
  return (
    <>
      {/********************************START AGENCY SERVICES WRAPPER ********************************/}

      <div id="services" className="imrz-black h-auto py-3 text-white md:pb-28">
        {/********************************HEADING ********************************/}

        <div className="my-20">
          <h3 className="imrz-heading-3">What We Do</h3>
          <h2 className="imrz-heading-2 text-white">Our Services</h2>
        </div>

        {/********************************SERVICES GRID ********************************/}

        <div className="m-auto grid w-10/12 grid-cols-3 xl:w-11/12 md:grid-cols-1 md:gap-12">
          {/*****Strategy*****/}
          <div className="agency-services">
            <img src="/strategy.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Strategy</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Identifying research and insight-based opportunities to use
                blockchain and extended reality solutions for your business.
              </p>
            </div>
          </div>

          {/*****Workshops*****/}
          <div className="agency-services">
            <img src="/workshop.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Workshops</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Educating your business around the art of possibility, with best
                practice examples, competitor insight and blue-sky thinking.
              </p>
            </div>
          </div>

          {/*****Project Delivery*****/}
          <div className="agency-services">
            <img src="/delivery.svg" className="agency-icons" />
            <div className="items-center text-center">
              <h3 className="imrz-card-heading">Project Delivery</h3>
              <p className="imrz-card-paragraph 3xl:w-10/12">
                Deploy our team of Web 3 developers to activate a project for
                your organisation – from start to finish.
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
