import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const Projects = [
    {
      image: "/images/APS.jpg",
      name: "Adonai Project Solutions",
      desc: "Construction company portifolio showcasing their services and uniquenes.",
      link: "apsltdrw.com",
    },
    {
      image: "/images/splash.png",
      name: "Splash",
      desc: "Water leakage management system. This systems alert the admnistrators the areas with Leakages",
      link: "splash-smoky.vercel.app",
    },
    {
      image: "/images/APS.jpg",
      name: "Adonai Project Solutions",
      desc: "Construction company portifolio showcasing their services and uniquenes.",
      link: "apsltdrw.com",
    },
    {
      image: "/images/APS.jpg",
      name: "Adonai Project Solutions",
      desc: "Construction company portifolio showcasing their services and uniquenes.",
      link: "apsltdrw.com",
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-2xl font-semibold font-lato text-gray-700">
        Projects
      </h1>
      <div className="flex items-center justify-between py-12 gap-4">
        {Projects.map((item, index) => (
          <div
            key={index}
            className="border px-6 py-4 hover:scale-105 duration-500 hover:shadow-xl hover:translate-y-[-6px] w-[40%] h-[40%]"
          >
            <div className="w-80 pb-4">
              <img
                src={item.image}
                alt={`Project ${index + 1}`}
                width={320}
                height={320}
                className="rounded-md"
              />
            </div>

            <div className="font-lato ps-12 text-gray-700 font-semibold py-6 flex items-center gap-4">
              <a href={item.link}>{item.name}</a>
              <FaExternalLinkAlt />
            </div>
            <p className="font-lato">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-12 gap-4">
        {Projects.map((item, index) => (
          <div
            key={index}
            className="border px-6 py-4 hover:scale-105 duration-500 hover:shadow-xl hover:translate-y-[-6px] w-[40%] h-[40%]"
          >
            <div className="w-80 pb-4">
              <img
                src={item.image}
                alt={`Project ${index + 1}`}
                width={320}
                height={320}
                className="rounded-md"
              />
            </div>

            <div className="font-lato ps-12 text-gray-700 font-semibold py-6 flex items-center gap-4">
              <a href={item.link}>{item.name}</a>
              <FaExternalLinkAlt />
            </div>
            <p className="font-lato">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
