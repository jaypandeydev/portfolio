import { RiTwitterXLine } from "react-icons/ri";
import { logo } from "../../assets"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
        <div className="w-full h-full flex flex-col gap-4 ">
            <img className="w-32" src={logo} alt="logo"/>
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
        <div className="w-full h-full ">
          <h3 className="text-xl uppercase text-designColor tracking-wider"> 
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <a href="https://react.dev/" target="_blank">
            <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
            </a>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Services
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Blog
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
          </ul>
        </div>
        <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider"> 
          Resources
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
            Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              System Status
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Terms of Service
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Pricing
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Over Right
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
          </ul>
        </div>
        <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider"> 
            Developers
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
            Documentation
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              API Reference
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Support
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
              <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group:">
              Open Source
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
              group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer