import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const Projects = [
    {
      image: "/images/project1.png",
      name: "Adonai Project Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "apsltdrw.com",
    },
    {
      image: "/images/project1.png",
      name: "Adonai Project Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "apsltdrw.com",
    },
    {
      image: "/images/project1.png",
      name: "Adonai Project Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "apsltdrw.com",
    },
    {
      image: "/images/project1.png",
      name: "Adonai Project Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "apsltdrw.com",
    },
  ];

  return (
    <div className="lg:ps-24 sm:ps-4 md:w-[80%] lg:w-[100%] sm:w-[100%] mx-auto h-screen space-y-24" id="projects">
      <div className="flex gap-2 items-end">
        <img src="svg/line1.svg" alt="Line" className="lg:w-[1%] sm:w-[3%] md:w-[2%]"/>
        <h1 className="lg:text-4xl sm:text-2xl font-medium text-white">Projects</h1>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        speed={9000}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
        }}
        className=""
      >
        {Projects.map((item, index) => (
          <SwiperSlide key={index} className="space-y-6 lg:pb-32 sm:pb-16">
            <img
              src={item.image}
              alt="Image of the Object."
              className="lg:h-[20rem] sm:h-[15rem] lg:w-[40rem] sm:w-[20rem]"
            />
            <div className="lg:ps-12 sm:ps-4 space-y-8">
              <h1 className="text-2xl text-white font-extrabold">{item.name}</h1>
              <p className="text-white font-lato">{item.desc}</p>
              <div className="flex gap-6 items-center text-white">
                <a
                  href={item.link}
                  className="text-md italic hover:underline underline-offset-4 decoration-[#ff4900] duration-700"
                >
                  View Project
                </a>
                <MdArrowOutward
                  className="text-[#ff4900] font-extrabold"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
