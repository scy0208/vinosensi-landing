import Image from 'next/image'
import { Inter } from 'next/font/google'

import  Header  from '@/components/header'
import  Hero  from '@/components/hero'
import  Features  from '@/components/features'
import  Calls  from '@/components/calls'
import  Footer  from '@/components/footer'
import  Prices  from '@/components/prices'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header/>
      <Hero/>
      <Features/>
      <Prices/>
      <Calls/>
      <Footer/>
    </main>
  )
}
