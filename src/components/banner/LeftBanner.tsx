import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
<div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
            <h1 className='text-6xl font-bold text-white'>                
                Hi, I'm {" "}
                <span className='text-designColor capitalize'>Jay Pandey</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text} </span>
                <Cursor
                cursorBlinking = {false}
                cursorStyle="|"
                cursorColor="#ff014f"
                />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I use animation as a third dimension by which to simplify experiences
                    and kuiding thro each and every interaction. I'm not adding motion
                    just to spruce things up, but doing it in ways that.
                </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/jay.p.pandey.359/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://x.com/jaypandeyspeaks" target="_blank">
            <span className="bannerIcon">
            <RiTwitterXLine />
            </span>
            </a>
            
           <a href="https://www.linkedin.com/in/jppandey/" target="_blank">
           <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
           </a>
          </div>
        </div>
        <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
        </div>
      </div>
  )
}

export default LeftBanner
