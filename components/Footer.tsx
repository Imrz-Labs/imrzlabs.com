import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="imrz-black pt-4">
      <div className="flex w-10/12 m-auto h-auto md:pt-10 items-center justify-around md:flex-col imrz-black ">
        {/*** Logo row***/}
        <Link href="/">
          <a className="">
            <Image className="logo-setting" src="/imrzlight.svg" alt="Imrz Labs" width={300} height={30} />
          </a>
        </Link>
        {/*** Links row
        <div className="md:my-10 m-0">
          <ul className="space-x-10 w-6/12 md:w-full flex items-center hover: justify-center text-center font-semibold text-white ">
            <li>
              <a href="#" className="link-style-default text-tiny text-white">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-gradient ml-[-10px] opacity-75"></span>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="link-style-defualt text-tiny text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="link-style-default text-tiny text-white">
                Privacy
              </a>
            </li>
          </ul>
        </div> ***/}
        {/*** Social row
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <Image
                className="hover:bg-brand-gradient rounded-lg imrz-black"
                src="/discord.svg"
                alt="Imrz Labs"
                width={40}
                height={40}
              />
            </li>
            <li>
              <Image
                className="hover:bg-brand-gradient rounded-lg imrz-black"
                src="/twitter.svg"
                alt="Imrz Labs"
                width={40}
                height={40}
              />
            </li>
            <li>
              {' '}
              <Image
                className="hover:bg-brand-gradient rounded-lg imrz-black"
                src="/linkedin.svg"
                alt="Imrz Labs"
                width={40}
                height={40}
              />
            </li>
          </ul>
        </div>***/}
      </div>
      <div className="text-center py-10 lg:pt-0 md:mt-20 md:mb-2 imrz-black text-white">
        © Copyright 2022. IMRZ Labs Limited. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
