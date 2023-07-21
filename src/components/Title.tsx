import Divider from "./Divider"
import { useState } from "react"

export default function Title() {

  return (
    <section className='mt-3'>
      <div className="overflow-hidden">
        <h1 className="title-appear [font-family:--font-syne] uppercase text-center leading-[1] tracking-tight text-[14vw] font-semibold xs:text-[16vw] xs:font-medium xl:text-[220px]">Synapsis</h1>
      </div>
      {/* <div className='w-full h-[2px] bg-black'></div> */}
      <Divider />
      <p className='animate-fade-in uppercase text-[13px] text-center my-7 text-xs font-bold'>Carlos Felipe &#169; 2023 Blog Concept Showing You The Possibilities of Thinking and Expression - </p>
      {/* <div className='w-full h-[2px] bg-black'></div> */}
      <Divider />
    </section>
  )
}

