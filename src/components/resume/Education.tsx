import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard"
const Education = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1,transition:{duration:.5}}}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
    <div>
    <div className="py-6 lgl:py-12 font-titleFont gap-4">
      <p className="text-sm text-designColor tracking-[4px]">1998-2010</p>
      <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
      title="Bsc in Computer Science"
      subTitle="University of DVI (2006-2010)"
      result="3.90/4"
      des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture"
      />
      <ResumeCard
      title="As - Science & Information"
      subTitle="Superking College (2001-2005)"
      result="4.75/5"
      des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
      />
      <ResumeCard
      title="Secondary School Education"
      subTitle="University of DVI (2006-2010)"
      result="5.00/5"
      des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
      />
    </div>
    </div>
    <div>
    <div className="py-6 lgl:py-12 font-titleFont gap-4">
      <p className="text-sm text-designColor tracking-[4px]">2010-2022</p>
      <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
      title="Bsc in Computer Science"
      subTitle="University of DVI (2006-2010)"
      result="3.90/4"
      des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture"
      />
      <ResumeCard
      title="As - Science & Information"
      subTitle="Superking College (2001-2005)"
      result="4.75/5"
      des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
      />
      <ResumeCard
      title="Secondary School Education"
      subTitle="University of DVI (2006-2010)"
      result="5.00/5"
      des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
      />
    </div>
    </div>    
    </motion.div>
  )
}

export default Education