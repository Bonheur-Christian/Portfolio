import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";
import "../styles.css";

function Testimonials() {
  const Testimonials = [
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
  ];
  return (
    <div className="lg:ps-24 sm:ps-4 py-32 space-y-24" id="testimonials">
      <div className="flex gap-2 items-end">
        <img src="svg/line1.svg" alt="Line" className="lg:w-[1%] sm:w-[3%]" />
        <h1 className="lg:text-4xl sm:text-2xl font-medium text-white">
          What Our Clients Say
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={3000}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
        }}
        // slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="space-x-12"
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index} className="pb-12">
            <div className="bg-[#D9D9D9]/15 rounded-xl lg:w-full sm:w-[90%] lg:ms-0 sm:ms-4 px-4 py-4 space-y-6">
              <img src="/svg/quote.svg" alt="Quotation mark" />
              <p className="text-white">{item.message}</p>
              <img
                src={item.image}
                alt=""
                className="rounded-full mx-auto"
                width={40}
              />
              <p className="text-sm text-white text-center">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
