import { Head } from 'next/document'
import React from 'react'
import { Footer, TopMenu, FormArea } from '../components'

const careers = () => {
  return (
    <>
      <Head>
        <title>Jobs at Imrz Labs</title>
        <meta
          name="description"
          content="Imrz Labs is hiring!!! Lead the future of emerging technologies with us. Join us today."
        />
        <meta
          name="keywords"
          content="Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz ventures, 3D, metaverse, oasis, ar, vr, AR, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking"
        />
        <link rel="icon" href="/imrzicon.gif" />
      </Head>

      <TopMenu />

      {/***Hero  ***/}

      <div className="bg-brand-gradient h-[90vh] w-screen sm:h-[80vh]">
        <div className="w-full text-white 4xl:pt-[160px] 3xl:pt-[200px] md:pt-[135px]">
          <h1 className="hero-h1">
            Lead The Future of Emerging Technologies With Us
          </h1>
          <p className="hero-p">
            This is for you. The risk-takers, the doers, the thinkers, the
            believers and the creatives. Those who dare to make things happen
            and are driven by change.
          </p>

          <div className="imrz-b-hero">
            <a href="#contact">
              <button type="button" className="button-pink">
                Join Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/***Jobs  ***/}
      <div className="imrz-white pb-10">
        {/********************************HEADING ********************************/}

        <div className="mt-20">
          <h2 className="imrz-heading-2">Job Opening</h2>
        </div>
      </div>

      {/********************************Jobs Lists ********************************/}
      <section className="pb-48">
        {/***Job 1***/}
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="my-modal-4"
            className="hover:imrz-black indicator my-5 h-20 w-6/12 cursor-pointer rounded-sm bg-white drop-shadow-base hover:text-white xl:w-9/12 lg:w-10/12"
          >
            <div className="flex w-full flex-row gap-x-11">
              <span className="bg-brand-gradient badge indicator-item badge-secondary h-10 border-white-500 text-tiny font-normal text-white">
                Full Time
              </span>
              <div className="my-auto flex w-full flex-col px-5 text-sm md:text-tiny">
                AR Developer
                <span className="text-tiny text-gray-dark">UK (Remote)</span>
              </div>

              {/***CTA ***/}
              <div className="flex w-full justify-end px-5 ">
                <div className="my-auto rounded-md bg-white p-4 px-5 shadow">
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.838306 14.4166L1.66664 15.1791C1.83961 15.335 2.0642 15.4213 2.29706 15.4213C2.52991 15.4213 2.7545 15.335 2.92747 15.1791L10.1591 8.50494C10.2419 8.43198 10.3083 8.34222 10.3537 8.24164C10.3991 8.14106 10.4226 8.03197 10.4226 7.92161C10.4226 7.81125 10.3991 7.70215 10.3537 7.60157C10.3083 7.50099 10.2419 7.41124 10.1591 7.33827L2.92747 0.660776C2.7545 0.504889 2.52991 0.418616 2.29706 0.418616C2.0642 0.418616 1.83961 0.504889 1.66664 0.660776L0.840806 1.42328C0.75758 1.49771 0.691268 1.58912 0.646332 1.69133C0.601397 1.79355 0.578882 1.9042 0.580303 2.01585C0.581725 2.1275 0.607049 2.23755 0.654571 2.33859C0.702094 2.43963 0.770712 2.52931 0.855805 2.60161L5.33831 6.54744V9.29744L0.855805 13.2408C0.770245 13.3124 0.70113 13.4017 0.653165 13.5024C0.6052 13.6032 0.579513 13.7131 0.577852 13.8247C0.576192 13.9363 0.598596 14.0469 0.643541 14.149C0.688486 14.2512 0.754915 14.3424 0.838306 14.4166V14.4166Z"
                      fill="url(#paint0_linear_4324_35218)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4324_35218"
                        x1="-1.71936"
                        y1="15.4213"
                        x2="15.1549"
                        y2="8.3742"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#11FAEC" />
                        <stop offset="0.322849" stop-color="#0EB2F9" />
                        <stop offset="0.697567" stop-color="#8451BD" />
                        <stop offset="0.837337" stop-color="#CE17D6" />
                        <stop offset="1" stop-color="#FE36AE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </label>

          {/***Dialog Box***/}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label
            htmlFor="my-modal-4"
            className="modal h-screen cursor-pointer text-white"
          >
            <label
              className="imrz-text-black modal-box relative h-[95vh] max-w-[50vw] bg-white drop-shadow-base xl:max-w-[75vw]"
              htmlFor=""
            >
              <div className="m-auto w-full justify-center scroll-auto px-10 md:px-1">
                <h1 className="m-auto w-full text-center text-sm font-bold capitalize">
                  Job Description
                </h1>

                <h3 className="pt-4 font-bold">AR Developer</h3>
                <p>
                  We are looking for an immersive extended reality developer
                  who's adept at computer vision with specialty around Augmented
                  reality and spatial computing and/or geometry. As an immersive
                  developer, you will help design and implement services and
                  AR-features specifically (measurement and surrounding centric)
                  from scratch that will facilitate a Realtime immersive
                  experience.
                </p>

                <h3 className="pt-4 font-bold">Core Responsibilities</h3>
                <p>
                  You’ll work in a highly collaborative environment with a small
                  team, your role will cover the development and integration of
                  advanced systems relying heavily on Photogrammetry, Computer
                  Vision and Machine Learning for our 3D Scanner app.
                </p>

                <ul className="px-10">
                  <li className="list-disc py-2">
                    Experience in leading or working with teams developing with
                    SLAM systems and surface tracking mechanisms e.g LIDAR, AR
                    mapping, bundle adjustment, structure from motion or motion
                    tracking and 3D tracking.
                  </li>
                  <li className="list-disc py-2">
                    Experience in working and building with AR Toolkits (SDKs)
                    like ARCore, ARKit, Vuforia, wikitude and/or EasyAR.
                  </li>
                  <li className="list-disc py-2">
                    Experience navigating between RUST, Python and/or
                    JavaScript. Work on optimizing RUST code for low compute and
                    low memory environments for production computer vision,
                    machine learning, and AR algorithms.
                  </li>
                </ul>

                <h3 className="pt-4 font-bold">Plus Qualities</h3>
                <ul className="px-10">
                  <li className="list-disc py-2">
                    Extremely comfortable scaling machine learning or 3D
                    geometry systems.
                  </li>
                  <li className="list-disc py-2">
                    Innovate by finding problems, implementing elegant
                    solutions, and building first-of-its-kind technology.
                  </li>
                  <li className="list-disc py-2">
                    Willingness to learn new techniques with the full support of
                    your peers and stay on the cutting edge.
                  </li>
                  <li className="list-disc py-2">
                    A good eye for design and using pre-styled components.
                  </li>
                  <li className="list-disc py-2">
                    Experience working in a Startup, high-growth or fast paced
                    environment.
                  </li>
                  <li className="list-disc py-2">
                    Interest in Augmented Reality in retail & eCommerce space.
                  </li>
                  <li className="list-disc py-2">
                    You’re driven, motivated to make a positive impact not only
                    in your life but also in the life of others.
                  </li>
                  <li className="list-disc py-2">
                    You have a deep entrepreneurial spirit and a “founder’s
                    mindset” that drives your workflow and impact.
                  </li>
                  <li className="list-disc py-2">
                    You have a can-do attitude and can roll with the constant
                    changes of a growing Startup.
                  </li>
                </ul>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/jobs/view/3123472004"
                >
                  <button
                    type="button"
                    className="bg-brand-gradient mt-5 rounded-md p-5 text-white shadow-md"
                  >
                    Apply Now
                  </button>
                </a>
              </div>
            </label>
          </label>
        </div>

        {/***Job 2***/}
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="my-modal-5"
            className="hover:imrz-black indicator my-5 h-20 w-6/12 cursor-pointer rounded-sm bg-white drop-shadow-base hover:text-white xl:w-9/12 lg:w-10/12"
          >
            <div className="flex w-full flex-row gap-x-11">
              <span className="bg-brand-gradient badge indicator-item badge-secondary h-10 border-white-500 text-tiny font-normal text-white">
                Full Time
              </span>
              <div className="my-auto flex w-full flex-col px-5 text-sm md:text-tiny">
                VR Developer
                <span className="text-tiny text-gray-dark">UK (Remote)</span>
              </div>

              {/***CTA ***/}
              <div className="flex w-full justify-end px-5 ">
                <div className="my-auto rounded-md bg-white p-4 px-5 shadow">
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.838306 14.4166L1.66664 15.1791C1.83961 15.335 2.0642 15.4213 2.29706 15.4213C2.52991 15.4213 2.7545 15.335 2.92747 15.1791L10.1591 8.50494C10.2419 8.43198 10.3083 8.34222 10.3537 8.24164C10.3991 8.14106 10.4226 8.03197 10.4226 7.92161C10.4226 7.81125 10.3991 7.70215 10.3537 7.60157C10.3083 7.50099 10.2419 7.41124 10.1591 7.33827L2.92747 0.660776C2.7545 0.504889 2.52991 0.418616 2.29706 0.418616C2.0642 0.418616 1.83961 0.504889 1.66664 0.660776L0.840806 1.42328C0.75758 1.49771 0.691268 1.58912 0.646332 1.69133C0.601397 1.79355 0.578882 1.9042 0.580303 2.01585C0.581725 2.1275 0.607049 2.23755 0.654571 2.33859C0.702094 2.43963 0.770712 2.52931 0.855805 2.60161L5.33831 6.54744V9.29744L0.855805 13.2408C0.770245 13.3124 0.70113 13.4017 0.653165 13.5024C0.6052 13.6032 0.579513 13.7131 0.577852 13.8247C0.576192 13.9363 0.598596 14.0469 0.643541 14.149C0.688486 14.2512 0.754915 14.3424 0.838306 14.4166V14.4166Z"
                      fill="url(#paint0_linear_4324_35218)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4324_35218"
                        x1="-1.71936"
                        y1="15.4213"
                        x2="15.1549"
                        y2="8.3742"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#11FAEC" />
                        <stop offset="0.322849" stop-color="#0EB2F9" />
                        <stop offset="0.697567" stop-color="#8451BD" />
                        <stop offset="0.837337" stop-color="#CE17D6" />
                        <stop offset="1" stop-color="#FE36AE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </label>

          {/***Dialog Box***/}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <label
            htmlFor="my-modal-5"
            className="modal h-screen cursor-pointer text-white"
          >
            <label
              className="imrz-text-black modal-box relative h-[95vh] max-w-[50vw] bg-white drop-shadow-base xl:max-w-[75vw]"
              htmlFor=""
            >
              <div className="m-auto w-full justify-center scroll-auto px-10 md:px-1">
                <h1 className="m-auto w-full text-center text-sm font-bold capitalize">
                  Job Description
                </h1>

                <h3 className="pt-4 font-bold">VR Developer</h3>
                <p>
                  We are looking for an immersive extended reality developer who
                  will help design open virtual worlds for the metaverse and
                  adept at computer vision with extensive knowledge and
                  experience in Unreal Engine 5 and familiar with multi-user
                  engineering design patterns.
                </p>

                <h3 className="pt-4 font-bold">Core Responsibilities</h3>
                <p>
                  You’ll work in a highly collaborative environment with a small
                  team, your role will cover the development and integration of
                  advanced VR systems relying heavily on Meta Humans and novel
                  technologies in extended reality
                </p>

                <ul className="px-10">
                  <li className="list-disc py-2">
                    Experience in leading or working with teams developing the
                    open virtual worlds or Metaverses
                  </li>
                  <li className="list-disc py-2">
                    Strong experience with 3D engines. (Unity, Unreal, etc..)
                    Must have experience completing a ship cycle for a product.
                  </li>
                  <li className="list-disc py-2">
                    Experience navigating between RUST or C++, Python and/or
                    JavaScript. Work on optimizing RUST or C++ code for low
                    compute and low memory environments for production computer
                    vision, machine learning, and VR algorithms.
                  </li>
                </ul>

                <h3 className="pt-4 font-bold">Plus Qualities</h3>
                <ul className="px-10">
                  <li className="list-disc py-2">
                    Extremely comfortable scaling machine learning or 3D
                    geometry systems.
                  </li>
                  <li className="list-disc py-2">
                    Innovate by finding problems, implementing elegant
                    solutions, and building first-of-its-kind technology.
                  </li>
                  <li className="list-disc py-2">
                    Willingness to learn new techniques with the full support of
                    your peers and stay on the cutting edge.
                  </li>
                  <li className="list-disc py-2">
                    A good eye for design and using pre-styled components.
                  </li>
                  <li className="list-disc py-2">
                    Experience working in a Startup, high-growth or fast paced
                    environment.
                  </li>
                  <li className="list-disc py-2">
                    Interest in the Metaverse or Extended Reality.
                  </li>
                  <li className="list-disc py-2">
                    You’re driven, motivated to make a positive impact not only
                    in your life but also in the life of others.
                  </li>
                  <li className="list-disc py-2">
                    You have a deep entrepreneurial spirit and a “founder’s
                    mindset” that drives your workflow and impact.
                  </li>
                  <li className="list-disc py-2">
                    You have a can-do attitude and can roll with the constant
                    changes of a growing Startup.
                  </li>
                </ul>

                <a href="#">
                  <button
                    type="button"
                    className="bg-brand-gradient mt-5 rounded-md p-5 text-white shadow-md"
                  >
                    Apply Now
                  </button>
                </a>
              </div>
            </label>
          </label>
        </div>

        {/***Job 3***/}
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="my-modal-6"
            className="hover:imrz-black indicator my-5 h-20 w-6/12 cursor-pointer rounded-sm bg-white drop-shadow-base hover:text-white xl:w-9/12 lg:w-10/12"
          >
            <div className="flex w-full flex-row gap-x-11">
              <span className="bg-brand-gradient badge indicator-item badge-secondary h-10 border-white-500 text-tiny font-normal text-white">
                Full Time
              </span>
              <div className="my-auto flex w-full flex-col px-5 text-sm md:text-tiny">
                Full Stack Engineer
                <span className="text-tiny text-gray-dark">UK (Remote)</span>
              </div>

              {/***CTA ***/}
              <div className="flex w-full justify-end px-5 ">
                <div className="my-auto rounded-md bg-white p-4 px-5 shadow">
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.838306 14.4166L1.66664 15.1791C1.83961 15.335 2.0642 15.4213 2.29706 15.4213C2.52991 15.4213 2.7545 15.335 2.92747 15.1791L10.1591 8.50494C10.2419 8.43198 10.3083 8.34222 10.3537 8.24164C10.3991 8.14106 10.4226 8.03197 10.4226 7.92161C10.4226 7.81125 10.3991 7.70215 10.3537 7.60157C10.3083 7.50099 10.2419 7.41124 10.1591 7.33827L2.92747 0.660776C2.7545 0.504889 2.52991 0.418616 2.29706 0.418616C2.0642 0.418616 1.83961 0.504889 1.66664 0.660776L0.840806 1.42328C0.75758 1.49771 0.691268 1.58912 0.646332 1.69133C0.601397 1.79355 0.578882 1.9042 0.580303 2.01585C0.581725 2.1275 0.607049 2.23755 0.654571 2.33859C0.702094 2.43963 0.770712 2.52931 0.855805 2.60161L5.33831 6.54744V9.29744L0.855805 13.2408C0.770245 13.3124 0.70113 13.4017 0.653165 13.5024C0.6052 13.6032 0.579513 13.7131 0.577852 13.8247C0.576192 13.9363 0.598596 14.0469 0.643541 14.149C0.688486 14.2512 0.754915 14.3424 0.838306 14.4166V14.4166Z"
                      fill="url(#paint0_linear_4324_35218)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4324_35218"
                        x1="-1.71936"
                        y1="15.4213"
                        x2="15.1549"
                        y2="8.3742"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#11FAEC" />
                        <stop offset="0.322849" stop-color="#0EB2F9" />
                        <stop offset="0.697567" stop-color="#8451BD" />
                        <stop offset="0.837337" stop-color="#CE17D6" />
                        <stop offset="1" stop-color="#FE36AE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </label>

          {/***Dialog Box***/}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <label
            htmlFor="my-modal-6"
            className="modal h-screen cursor-pointer text-white"
          >
            <label
              className="imrz-text-black modal-box relative h-[95vh] max-w-[50vw] bg-white drop-shadow-base xl:max-w-[75vw]"
              htmlFor=""
            >
              <div className="m-auto w-full justify-center scroll-auto px-10 md:px-1">
                <h1 className="m-auto w-full text-center text-sm font-bold capitalize">
                  Job Description
                </h1>

                <h3 className="pt-4 font-bold">Full Stack Engineer (Web 3)</h3>
                <p>
                  We are looking for a full stack software engineer with
                  extensive experience in distributed ledger technologies i.e
                  blockchain development and NFTs (preferably in proof-of-stake
                  protocols like Solana and/or Near). Your work will define the
                  concept of ownership using NFTs on web3 and the Metaverse.
                </p>

                <h3 className="pt-4 font-bold">Core Responsibilities</h3>
                <p>
                  You’ll work in a highly collaborative environment with a small
                  team, You’ll work cross-functionally on product evolution from
                  ideation, design, architecting systems, and process.
                </p>

                <ul className="px-10">
                  <li className="list-disc py-2">
                    Proficiency in developing front-end software, with deep
                    experience in one or more relevant front-end frameworks (ie,
                    NextJS), TypeScript, UI Test Automation frameworks, and
                    serverless systems i.e AWS Amplify / Vercel / Netlify and
                    static or server site hosting.
                  </li>
                  <li className="list-disc py-2">
                    Experience building modern decentralized applications
                    (DApps) with a strong track record in developing rich cloud based
                    apps with HTML, CSS (TailwindCSS or SASS), JS, Node or (Deno), Rust, and working closely
                    with design specs to achieve amazing UI/UX.
                  </li>
                  <li className="list-disc py-2">
                    Extensive experience working with any of the following
                    cross-platform tools i.e React Native, Ionic or Flutter for
                    mobile or Tauri / Electron for desktop. Comfortable
                    navigating between RUST and JavaScript.
                  </li>
                </ul>

                <h3 className="pt-4 font-bold">Plus Qualities</h3>
                <ul className="px-10">
                  <li className="list-disc py-2">
                    Extremely passionate about web 3.0 and underlying concepts e.g crypto and NFTs
                  </li>
                  <li className="list-disc py-2">
                    Innovate by finding problems, implementing elegant
                    solutions, and building first-of-its-kind technology.
                  </li>
                  <li className="list-disc py-2">
                    Willingness to learn new techniques with the full support of
                    your peers and stay on the cutting edge.
                  </li>
                  <li className="list-disc py-2">
                    A good eye for design and using pre-styled components.
                  </li>
                  <li className="list-disc py-2">
                    Experience working in a Startup, high-growth or fast paced
                    environment.
                  </li>
                  <li className="list-disc py-2">
                    Interest in exploring emerging concepts like the Metaverse.
                  </li>
                  <li className="list-disc py-2">
                    You’re driven, motivated to make a positive impact not only
                    in your life but also in the life of others.
                  </li>
                  <li className="list-disc py-2">
                    You have a deep entrepreneurial spirit and a “founder’s
                    mindset” that drives your workflow and impact.
                  </li>
                  <li className="list-disc py-2">
                    You have a can-do attitude and can roll with the constant
                    changes of a growing Startup.
                  </li>
                </ul>

                <a href="#">
                  <button
                    type="button"
                    className="bg-brand-gradient mt-5 rounded-md p-5 text-white shadow-md"
                  >
                    Apply Now
                  </button>
                </a>
              </div>
            </label>
          </label>
        </div>

        
      </section>
      <FormArea />
      <Footer />
    </>
  )
}

export default careers
