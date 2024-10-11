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
    <div className="ps-24 h-screen space-y-24" id="projects">
      <div className="flex gap-2 items-end">
        <img src="svg/line1.svg" alt="Line" />
        <h1 className="text-4xl font-medium text-white">Projects</h1>
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
          <SwiperSlide key={index} className="space-y-6 pb-32">
            <img
              src={item.image}
              alt="Image of the Object."
              className="h-[20rem] w-[40rem]"
            />
            <div className="ps-12 space-y-8">
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
