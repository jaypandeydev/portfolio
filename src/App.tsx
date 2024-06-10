import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Main from "./components/main"
import Navbar from "./components/navbar/Navbar";
//import Nav from "./components/nav"


function App() {  

  return (
    <div className="w-full h-auto bg-gray-800 text-white px-4">
      <Navbar/>
      <Main/>
      <Banner />
      <Features />
    </div>
  );
}

export default App
