import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ActionArea = () => {
  return (
    <>
      <section className="pw-screen imrz-black 2xl:mt-24">
        <h3 className="my-20 w-7/12 pt-20 text-center text-base font-bold text-white xl:text-sm lg:text-sm md:w-11/12 md:text-xs sm:text-tiny">
          Use our experience, insight and agility to elevate your business and
          deliver future focused solutions.
        </h3>
        <div className="mx-auto flex flex-auto sm:grid sm:gap-y-20 content-center items-center justify-center gap-32 pb-28 lg:w-11/12 md:w-10/12 md:gap-0">
          <Link href="/agency">
            <a>
              <Image
                src="/agency.svg"
                alt="Imrz Labs Agency"
                width={450}
                height={85}
              />
            </a>
          </Link>

          <Link href="/products">
            <a>
              <Image
                src="/products.svg"
                alt="Imrz Labs Ventures"
                width={450}
                height={120}
                className="mb-3 sm:mb-1"
              />
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ActionArea
