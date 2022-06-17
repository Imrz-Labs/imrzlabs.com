import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <section className="imrz-black pt-8 ">
      <div className="pl-48 lg:pl-0 imrz-black m-auto flex h-auto w-full items-center justify-around lg:flex-col lg:pt-10 ">
        {/*** Logo row***/}
        <div className="">
        <Link href="/">
          <a className="">
            <Image
              className="h-auto object-cover" 
              src="/imrzlight.svg"
              alt="Imrz Labs"
              width={155}
              height={25}
            />
          </a>
        </Link>
        </div>
        {/*** Links row***/}
        <div className="m-auto lg:my-10">
          <ul className="flex items-center justify-center space-x-10 text-center font-semibold text-white md:w-full ">
            <li>
              <a target="_blank" href="https://www.imrz.blog" className="link-style-default text-tiny text-white">
                Blog
              </a>
            </li>
            
            <li>
            <Link href="/careers">
              <a className="link-style-default text-tiny text-white indicator">
              <span className="indicator-item font-normal text-tiny badge h-4 bg-brand-gradient text-white">hiring</span> 
              <div className="grid h-8 place-items-center">Careers</div>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
              <a className="link-style-default m-auto text-tiny text-white">
                Privacy
              </a>
              </Link>
            </li>
          </ul>
        </div>
        {/*** Social row ***/}

        <div className="pr-48 lg:pr-0 ">
          <ul className="flex items-center gap-5">
            <li>
              <a href="https://discord.gg/5eruR3BAH7">
                <Image
                  src="/discord.svg"
                  alt="Imrz Labs"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.twitter.com/imrzlabs">
                <Image
                  src="/twitt.svg"
                  alt="Imrz Labs"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              {' '}
              <a target="_blank" href="https://www.linkedin.com/company/imrzlabs">
                <Image
                  src="/linkedin.svg"
                  alt="Imrz Labs"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="imrz-black w-full flex justify-center items-center m-auto py-10 text-center text-[15px] text-white lg:pt-0 lg:mt-20 lg:mb-2">
      Copyright © 2022 IMRZ Labs
      </div>
    </section>
  )
}

export default Footer
