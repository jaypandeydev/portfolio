import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Toolkit from "./components/toolkit/Toolkit";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Banner />
        <Features />
        <Projects />
        <Toolkit />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
