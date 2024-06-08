
const main = () => {
  return (
    <div>      
      <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left  sm:max-3xl:bg-blue-50 sm:max-2xl:p-4">
            <div className="pt-8 pr-8 pl-8 pb-8 items-center justify-between">
              <div className="flex-col items-start gap-8">               
                <p className="text-gray-900 text-xl font-bold leading-10 self-stretch" >Hey, I'm Jay</p>
                <br />
                <h1 className="text-gray-900 text-7xl font-bold leading-10 self-stretch"> 
                  <span>Full Stack</span>
                  <br />
                  <br />
                  Developer
                  </h1>
                  <br />
                  <p className="text-blue-950 text-2xl font-normal leading-9">
                  I am passionate full stack developers with a diverse range of expertise and a shared commitment to creating robust, scalable, and user-friendly applications. Our mission is to bridge the gap between innovative ideas and their realization through cutting-edge technology and seamless integration of both front-end and back-end solutions.
                  </p>                  
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Get In Touch
                  </button>                              
              </div>
            </div>
            <div className="w-full rounded-lg px-24">
            <img src="public/IMG_7871 copy 2.png" alt="Hero Section"></img>
            </div>
      </section>
    </div>
  )
}

export default main
