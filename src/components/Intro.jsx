import { FaArrowAltCircleDown } from "react-icons/fa";

function Intro() {
  return (
    <div className="pb-6">
      <div className="lg:ps-24 sm:ps-2 flex sm:flex-col-reverse sm:space-y-12 lg:flex-row items-center justify-center">
        <div className="sm:hidden lg:block">
          <h1 className="text-white lg:text-7xl sm:text-2xl pt-1 font-bold ms-[-5rem] z-30 absolute flex flex-col">
            Bonheur
            <span className="ps-24">Christian</span>
          </h1>
          <img
            src="svg/intro.svg"
            alt="Intro svg"
            width={500}
            height={300}
            className="z-10 "
          />
        </div>
        <img
          src="images/profile.png"
          alt="Profile"
        
          className="z-20 sm:w-[70%] lg:w-[30%]"
        />

        <div className="lg:ps-20 sm:px-4 lg:w-[40%] sm:w-[100%] lg:mt-[-1rem] sm:mt-0 space-y-12">
          <h1 className="text-4xl font-medium text-white text-center">
            I’m Software Developer Based in RWANDA
          </h1>
          <p className="text-white text-md">
            My Full Names are MUHUMURE Bonheur Christian. I am specialized in
            software and web development. Despite of Developing many outstanding
            web sites for companies, I am also interested In Embedded systems. I
            actually like to see functioning tool which I built.
          </p>
          <button className="bg-[#ff4900] rounded-full px-10 py-3 text-white font-medium mx-auto flex ">
            View my Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
