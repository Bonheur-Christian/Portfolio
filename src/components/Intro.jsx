import { FaArrowAltCircleDown } from "react-icons/fa";

function Intro() {
  return (
    <div className="pb-6">
      <div className="ps-24 flex items-center justify-center">
        <div>
          <h1 className="text-white text-7xl pt-1 font-bold ms-[-5rem] z-30 absolute flex flex-col">
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
          width={400}
          height={30}
          className="z-20"
        />

        <div className="ps-20 w-[40%] mt-[-1rem] space-y-12">
          <h1 className="text-4xl font-medium text-white text-center">
            I’m Software Developer Based in RWANDA
          </h1>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptate, cumque optio nobis sequi fuga alias iure beatae
            voluptates vel animi voluptatibus quaerat quia eaque velit nam iusto
            error harum voluptatem natus esse.
          </p>
          <button className="bg-[#ff4900] rounded-full px-10 py-3 text-white font-medium">
            View my Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
