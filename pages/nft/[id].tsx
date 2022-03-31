import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  // Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  // --

  console.log(address)
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-blue-800 to-red-600 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-40 translate-y-4 translate-x-1 transform rounded-xl object-cover lg:h-96 lg:w-64"
              src="https://sacreativenetwork.co.za/wp-content/uploads/2013/04/Christo-Silver-Boxer.jpg"
              alt=""
            ></img>
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              <span className="font-extrabold text-gray-300 underline decoration-pink-600/50">
                STOKOLOKO
              </span>{' '}
              sTokens
            </h1>
            <h2 className="text-xl text-gray-300">
              A collection of digital art for the community!
            </h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-1  flex-col p-12 lg:col-span-6">
        {/* Header */}

        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              STOKOLOKO
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="transform rounded-full bg-blue-500 px-3 py-1 text-sm text-white transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://blog.nmbt.co.za/cache/ce_img_cache/local/uploads/files/Bus_Station_Mural_1_770_578_70_s.jpg"
            alt=""
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            Down Town Norwich | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500 lg:pt-3">
            13 / 21 NFT's claimed
          </p>
        </div>

        {/* Mint Button */}

        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
