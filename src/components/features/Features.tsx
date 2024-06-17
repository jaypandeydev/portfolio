import Title from "../layouts/Title"
import Card from "./Card"
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe,FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section id="features" className='w-full pb-20 border-b-[1px] border-b-gray-600'>
      <Title title="Features" des="What I do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card title="Business Stratagy" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<FaBars/>} />
      <Card title="App Development" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<AiFillAppstore/>} />
      <Card title="SEO Optimisation" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<SiProgress/>} />
      <Card title="Mobile Development" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<FaMobile/>} />
      <Card title="UX Design" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<SiAntdesign/>} />
      <Card title="Hosting Websites" 
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" 
      icon={<FaGlobe/>} />
      </div>
    </section>
  )
}

export default Features
