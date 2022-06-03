import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ActionArea = () => {
  return (
    <>
      <section id="agency" className="2xl:mt-24 pw-screen imrz-black">
        <h3 className="my-20 w-7/12 pt-20 text-center text-base font-bold text-white xl:text-sm lg:text-sm md:w-11/12 md:text-xs sm:text-tiny">
          {/**We drive value through delivering services in our agency collective,
          and building products in our venture factory.**/}
          Use our experience, insight and agility to elevate your business and
            deliver future focused solutions.
        </h3>
        <div className="mx-auto pb-28 justify-center md:w-10/12 lg:w-11/12 items-center content-center flex flex-auto gap-32 md:gap-0">
          <Link href="/agency">
            <a>
              <Image src="/agency.svg" alt="Imrz Labs Agency" width={450} height={85} />
            </a>
          </Link>

          {/*
          <Link href="/ventures">
            <a>
              <Image src="/ventures.svg" alt="Imrz Labs Ventures" width={450} height={85} />
            </a>
          </Link>
        **/}
        </div>
      </section>
    </>
  )
}

export default ActionArea
