import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="imrz-black pt-4">
      <div className="imrz-black m-auto flex h-auto w-10/12 items-center justify-around md:flex-col md:pt-10 ">
        {/*** Logo row***/}
        <Link href="/">
          <a className="">
            <Image
              className="logo-setting"
              src="/imrzlight.svg"
              alt="Imrz Labs"
              width={300}
              height={30}
            />
          </a>
        </Link>
        {/*** Links row***/}
        <div className="m-0 md:my-10">
          <ul className="hover: flex w-6/12 items-center justify-center space-x-10 text-center font-semibold text-white md:w-full ">
            <li>
              <a href="https://www.imrz.blog" className="link-style-default text-tiny text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="link-style-default text-tiny text-white">
                Careers
              </a>
            </li>
            <li>
              <Link href="/privacy">
              <a className="link-style-default text-tiny text-white">
                Privacy
              </a>
              </Link>
            </li>
          </ul>
        </div>
        {/*** Social row***/}
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <a href="https://discord.gg/XRu5XS2f">
                <Image
                  src="/discord.svg"
                  alt="Imrz Labs"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/imrzlabs">
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
              <a href="https://www.linkedin.com/company/imrzlabs">
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
      <div className="imrz-black w-9/12 m-auto py-10 text-center text-[15px] text-white lg:pt-0 md:mt-20 md:mb-2">
        © Copyright 2022. IMRZ Labs Limited. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
