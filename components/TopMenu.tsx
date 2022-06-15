import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import { IOSView } from 'react-device-detect'

const TopMenu = () => {
  const showiosnav = {
    background: 'white',
    height: '64px',
    width: '100%',
    position: 'fixed',
    zIndex: 100,
  }

  return (
    <>
      <div className="fixed z-50 flex h-[85px] w-full items-center bg-white backdrop-blur-md md:m-0 md:hidden md:flex-col md:items-center ">
        {/*** Logo ***/}
        <Link href="/">
          <a className="md:auto my-auto flex-none 3xl:ml-[145px] 2xl:ml-auto xl:ml-[-10px] lg:m-auto md:mx-auto  md:mr-[-15%] md:mt-5 md:w-auto sm:ml-[-55px]">
            <Image
              src="/logo.svg"
              className="logo-setting"
              alt="Imrz Labs"
              width={300}
              height={32}
            />
          </a>
        </Link>

        {/***Nav Items - Links & CTA ***/}
        <div className="mr-[3.5rem] flex w-full justify-end 3xl:w-7/12 2xl:w-full md:mx-auto md:mt-[-70%] md:flex-col">
          <nav className="my-auto mr-10 flex items-start space-x-14 lg:space-x-10 md:m-auto md:flex-col md:space-y-20 ">
            <Link href="/agency">
              <a className="link-style-default hover:text-blue-500">Agency</a>
            </Link>
            <Link href="/products">
              <a className="link-style-default hover:text-pink-500">Products</a>
            </Link>
            {/**
          <Link href="/team">
            <a className="link-style-default">Team</a>
          </Link>
           */}
          </nav>

          {/***Nav CTA ***/}
          <a href="#contact">
            <button
              type="button"
              className="hover:bg-brand-gradient imrz-blue h-[50px] w-[150px] rounded-md px-5 text-xs font-semibold uppercase text-white shadow lg:h-[45px] lg:w-[100px] lg:text-tiny md:m-auto md:mb-5 md:ml-[80%] sm:ml-[76%]"
            >
              Contact
            </button>
          </a>

          {/***Orkit Theme Switch 
        <button className="md:m-auto md:mb-36 hover:path-white ml-2 h-[50px] w-[50px] rounded-md border-2 border-black text-center hover:bg-black lg:h-[45px] lg:w-[45px] ">
          <svg
            className="m-0 mx-auto items-center justify-center px-2"
            width="44"
            height="44"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2154 5.61691L11.2154 5.61697L11.2052 5.62218C10.4184 6.02436 9.43091 6.77829 8.50768 7.70152L8.50627 7.70293C8.05165 8.15573 7.6412 8.63467 7.27495 9.13469C7.2875 9.12589 7.30029 9.11715 7.31331 9.10851C7.5486 8.95238 7.79912 8.86497 8.05409 8.80851C8.50986 8.70759 9.173 8.67053 10.134 8.62199L10.1382 8.62179L11.4603 8.56058C11.493 8.32495 11.5456 8.03342 11.6014 7.74266C11.6895 7.28429 11.8026 6.74479 11.9149 6.23409L11.917 6.22481L11.9192 6.21558C12.0343 5.73587 12.1074 5.39693 12.1504 5.15328C12.1447 5.15578 12.139 5.15831 12.1332 5.16088C11.9006 5.26438 11.6043 5.41246 11.2154 5.61691ZM6.21023 11.1026C6.21778 11.007 6.23226 10.9055 6.25375 10.8006C4.0178 15.2341 4.77088 20.7273 8.52647 24.468L8.52929 24.4708C13.2103 29.1705 20.6357 29.1684 25.2944 24.491L25.2958 24.4896C26.2504 23.535 26.9508 22.6053 27.3994 21.7639C27.5795 21.4123 27.7146 21.1386 27.8134 20.9194C27.6353 20.9781 27.4079 21.0581 27.1157 21.1655L27.1072 21.1686L27.0987 21.1716C25.0315 21.8897 21.9386 22.1568 19.8771 21.7105C18.011 21.3267 15.7602 20.1235 14.3928 18.7786C13.7548 18.1523 13.1345 17.2601 12.6466 16.3728C12.1619 15.4913 11.7531 14.5151 11.6047 13.6987L11.6024 13.6864L11.6005 13.6742L11.4995 13.0277L11.381 12.2689C10.2432 12.2597 9.39082 12.2676 8.78739 12.2917C8.41831 12.3064 8.165 12.3264 8.00515 12.3479C7.98834 12.3502 7.97333 12.3524 7.96001 12.3544C7.8377 12.4286 7.67635 12.5003 7.48035 12.5251C7.09684 12.5734 6.73446 12.4221 6.4979 12.1433C6.307 11.9182 6.24738 11.6712 6.22481 11.5334C6.19932 11.3777 6.20031 11.2283 6.21023 11.1026Z"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M17.1546 8.24703C17.0334 8.36825 16.9122 8.65108 16.9122 8.8329C16.9122 9.51978 17.397 9.641 20.2456 9.58039C22.6496 9.51978 23.0537 9.47938 23.2557 9.15614C23.4173 8.91371 23.4173 8.71169 23.2557 8.44906C23.0537 8.14602 22.6294 8.10562 20.2254 8.04501C18.2051 8.00461 17.3364 8.06521 17.1546 8.24703Z"
              fill="black"
            />
            <path
              d="M23.6193 11.4793C23.4981 11.6005 23.3769 11.8834 23.3769 12.0652C23.3769 12.7117 23.882 12.8733 25.9022 12.8127C27.5184 12.7723 27.9224 12.6914 28.1042 12.3884C28.2659 12.146 28.2659 11.944 28.1042 11.6813C27.9224 11.3985 27.5184 11.3177 25.882 11.2773C24.488 11.2369 23.8011 11.2975 23.6193 11.4793Z"
              fill="black"
            />
            <path
              d="M15.5384 14.7117C15.4172 14.8329 15.296 15.1158 15.296 15.2976C15.296 15.9441 15.801 16.1057 17.8213 16.0451C19.4374 16.0047 19.8415 15.9239 20.0233 15.6208C20.1849 15.3784 20.1849 15.1764 20.0233 14.9138C19.8415 14.6309 19.4374 14.5501 17.8011 14.5097C16.4071 14.4693 15.7202 14.5299 15.5384 14.7117Z"
              fill="black"
              className="svg-style"
            />
            <path
              d="M22.0032 16.3278C21.882 16.4491 21.7607 16.7319 21.7607 16.9137C21.7607 17.6006 22.2456 17.7218 25.0941 17.6612C27.4982 17.6006 27.9023 17.5602 28.1043 17.237C28.2659 16.9945 28.2659 16.7925 28.1043 16.5299C27.9023 16.2268 27.478 16.1864 25.0739 16.1258C23.0537 16.0854 22.185 16.146 22.0032 16.3278Z"
              fill="black"
            />
          </svg>
        </button>
        ***/}
        </div>
      </div>

      {/********************************mobile navbar android view
      <div className="navbar fixed z-50 hidden bg-white md:flex">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="1" className="btn btn-ghost btn-circle">
              <svg
                fill="none"
                height="44"
                viewBox="0 0 24 24"
                width="44"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                  fill="currentColor"
                />
                <path
                  d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                  fill="currentColor"
                />
                <path
                  d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                  fill="currentColor"
                />
              </svg>
            </label>
            <div className="dropdown-content menu rounded-box menu-compact m-auto mt-3 w-[97vw] bg-white p-2 py-5 shadow">
              <Link href="/agency">
                <button
                  onClick={() => Router.push('/agency')}
                  className="mb-5 w-full"
                >
                  Agency
                </button>
              </Link>
              <Link href="/products">
                <button
                  onClick={() => Router.push('/products')}
                  className="w-full"
                >
                  Products
                </button>
              </Link>
              {/**
              <li>    
                <Link href="/team">
                  <a className="link-style-default">Team</a>
                </Link
              </li>
            </div>
          </div>
        </div>

 {/*** Logo 
        <div className="navbar-center">
          <Link href="/">
            <a className="">
              <img src="/logo.svg" className="max-h-6" alt="Imrz Labs" />
            </a>
          </Link>
        </div>

          {/***Nav CTA 
        <div className="navbar-end sm:mr-2">
          <a href="#contact">
            <button
              type="button"
              className="hover:bg-brand-gradient imrz-blue h-[40px] w-[120px] rounded-md object-scale-down text-tiny font-semibold uppercase text-white shadow transition ease-in-out hover:duration-150 sm:hidden"
            >
              Contact
            </button>
          </a>

          <a href="#contact">
            <button className="imrz-blue btn btn-ghost rounded-lg md:hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="#ffffff"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    ********************************/}


      {/********************************mobile navbar ios view********************************/}

      <div className="bg-white z-50 h-[64px] fixed w-full">
        <input id="my-drawer-4" type="checkbox" className=" drawer-toggle " />
        <div className="drawer-content">
          {/**  Drawer content here **/}
          <label
            htmlFor="my-drawer-4"
            tabIndex="2"
            className="btn btn-ghost btn-circle z-50 mt-2"
          >
            <svg
              fill="none"
              height="44"
              viewBox="0 0 24 24"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="currentColor"
              />
              <path
                d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                fill="currentColor"
              />
              <path
                d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                fill="currentColor"
              />
            </svg>
          </label>
        </div>
        

        <div className="drawer-side  ">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="imrz-text menu w-80 overflow-y-auto bg-white p-4">
            {/**  Sidebar content here **/}
            <li>
              <a href="/agency">Agency</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </div>

        {/*** Logo ***/}
        <div className="flex absolute justify-center item-center w-full mt-[-46%]">
          <Link href="/">
            <a className="">
              <img src="/logo.svg" className="max-h-6" alt="Imrz Labs" />
            </a>
          </Link>
        </div>

        {/***Nav CTA ***/}
        <div className="flex justify-end mt-[-49%] mr-2">
          <a href="#contact">
            <button
              type="button"
              className="hover:bg-brand-gradient imrz-blue h-[40px] w-[120px] rounded-md object-scale-down text-tiny font-semibold uppercase text-white shadow transition ease-in-out hover:duration-150 sm:hidden"
            >
              Contact
            </button>
          </a>

          <a href="#contact">
            <button className="imrz-blue btn btn-ghost rounded-lg md:hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="#ffffff"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default TopMenu
