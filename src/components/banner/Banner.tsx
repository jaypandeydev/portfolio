import LeftBanner from "./LeftBanner"
import RIghtBanner from "./RIghtBanner"

const Banner = () => {
  return (
    <section id="home" className='w-full pb-20 flex items-center border-b-[1px] font border-b-gray-600 pl-8'>
      <LeftBanner/>
      <RIghtBanner/>
    </section>
  )
}

export default Banner
