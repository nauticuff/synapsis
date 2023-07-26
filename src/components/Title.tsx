import Divider from "./Divider"

export default function Title() {

  return (
    <section className='mt-3'>
      <div className="overflow-hidden">
        <h1 className="title-appear [font-family:--font-syne] uppercase text-center leading-[1] tracking-tight text-[15vw] font-semibold xs:text-[16vw] xs:font-medium lg:text-[200px]">Synapsis</h1>
      </div>
      <Divider />
      <p className='animate-fade-in uppercase text-[13px] text-center my-7 text-xs font-bold'>Carlos Felipe &#169; 2023 Blog Concept Showing You The Possibilities of Thinking and Expression - </p>
      <Divider />
    </section>
  )
}

