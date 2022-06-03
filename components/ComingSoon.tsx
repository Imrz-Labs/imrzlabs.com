import React from 'react'
import Image from 'next/image'

const comingsoon = () => {
  return (
    <div className="flex justify-center m-auto w-screen h-screen">
        <Image className="comingsoon" src="/imrzicon.gif" alt="Imrzicon" />
        <h1>Coming Soon!!!</h1>
    </div>
  )
}

export default comingsoon