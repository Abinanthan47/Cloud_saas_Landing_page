import React from 'react'
import { NavBar } from './Navbar'
import Image from 'next/image'
import LightRays from '@/components/LightRays'

const Hero = () => {
  return (
   <section className='bg-[#000] h-screen w-screen  overflow-x-hidden'>
<NavBar/>

<div className='max-w-7xl mx-auto'>
<div className='flex flex-col items-center pt-16 justify-center'>
  <h1 className='text-5xl font-bold text-center text-white font-space-grotesk'>Run 
    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600'> AI-built</span> apps at C-speed<br /> with no runtime overhead</h1>

    <p className='text-center text-white font-space-grotesk max-w-xl mt-6'>DataVec gives AI a fast, local runtime to compile to. Your app logic stays high-level, runs like hand-written C, and costs a fraction to operate.</p>
    <div className='flex flex-row gap-4 mt-4 justify-center items-center'>
      <button className='bg-[#7EEA64] text-black px-4 py-1 rounded-full'>Get Started</button>
      <button className='bg-transparent text-white px-4 py-1 rounded-full border-2'>Contact us</button>
    </div>
    <div>
      <Image src="/herobg.jpg" alt="hero" width={100} height={100} />
    </div>
</div>
</div>
   </section>
  )
}

export default Hero
