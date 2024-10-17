import About from "../components/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import LandingBar from "../components/LandingBar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonial";

function Home() {
  return (
    <div className="space-y-2 lg:w-[80%] sm:w-[100%] mx-auto">
      <LandingBar />
      <Intro />
      <div className="bg-[#1F1E1E] h-24 -ms-48 -me-48"></div>
      <About />
      <Testimonials />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Home;
