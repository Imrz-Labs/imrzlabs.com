import React from 'react'

const VentureCards = () => {
  return (
    <>
      <div className="bg-brand-gradient h-screen w-screen">
        <div className="bg-green-500 xl: m-auto my-auto grid w-9/12 grid-cols-4 items-center justify-center gap-9 2xl:flex lg:grid-cols-2 md:grid-cols-2 md:flex-col sm:flex sm:flex-auto sm:flex-col">
          <div className="card rounded-3xl bg-white shadow-lg">
            <figure className="px-5 pt-5">
              <img
                src="/web3.png"
                className="rounded-2xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title w-7/12 text-center text-xs font-bold text-blue-500 xl:text-sm lg:text-sm md:w-11/12 md:text-xs sm:text-tiny">Innovation</h3>
              <p className="leading-snug w-full text-black text-center">
              we stay up to date with the latest developments in tech so that we
              can help you implement them
            </p>
            </div>
          </div>

          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  )
}

export default VentureCards
