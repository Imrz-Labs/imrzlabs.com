import React from 'react'

const ProjectTypes = () => {
  return (
    <div className="mb-[-230px] md:pb-40 bg-white pt-3">
      <div className="my-10 mb-20">
        <h3 className="imrz-heading-3">TYPE OF PROJECTS</h3>
        <h2 className="imrz-heading-2">
          We're focused on delivering digital solutions for companies in the
          following areas
        </h2>
      </div>

      {/********************************SERVICES GRID 3 ********************************/}
      <div className="m-auto grid w-10/12 md:mb-auto mb-[-100px] grid-cols-3 xl:w-11/12 md:grid-cols-1 md:gap-12">
        {/*****Strategy*****/}
        <div className="agency-services">
          <img src="/dapp.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">DApps</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
              Build decentralized applications that use blockchain over
              traditional databases.
            </p>
          </div>
        </div>

        {/*****Workshops*****/}
        <div className="agency-services">
          <img src="/nft-flat.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">NFTs</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
              Integrate verifiable tokens into existing solutions and build NFT
              minting platforms.
            </p>
          </div>
        </div>

        {/*****Project Delivery*****/}
        <div className="agency-services">
          <img src="/xrm.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">XR/Metaverse</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
              Build open virtual worlds and AR/VR experiences
            </p>
          </div>
        </div>
      </div>

      {/********************************SERVICES GRID 3 ********************************/}
      <div className="m-auto grid w-10/12 md:mt-10 md:mb-[50px] grid-cols-3 xl:w-11/12 md:grid-cols-1 md:gap-12">
        {/*****Strategy*****/}
        <div className="agency-services">
          <img src="/token.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">Tokens</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
              Launch token projects linked to utility within your organization.
            </p>
          </div>
        </div>

        {/*****Workshops*****/}
        <div className="agency-services">
          <img src="/defi.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">Defi</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
            Engineering financial tools using smart contracts / blockchain 
              technology. 
            </p>
          </div>
        </div>

        {/*****Project Delivery*****/}
        <div className="agency-services">
          <img src="/3d.svg" className="agency-icons" />
          <div className="items-center text-center">
            <h3 className="imrz-card-heading">3D Asset Creation</h3>
            <p className="imrz-card-paragraph 3xl:w-10/12">
              Visualize and launch 3D ready assets to be used in your XR
              solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTypes
