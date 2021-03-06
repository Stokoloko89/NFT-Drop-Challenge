import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Stokens Stop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Welcome to the NFT Drop Challenge</h1>
    </div>
  )
}

export default Home
