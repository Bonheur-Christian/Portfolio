"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const works = [
    {
      title: "UMURAVA Education Platform",
      Date: "10 November 2024",
      JobDone: "Dashboard Frotend Development",
      description:
        "Umurava Ed-Tech is platform designed to help students Learn some Lessons online. It also consist of Hackathons and skill challenges to see Learning level of students. This Increased my Experience in Frontend Development.",
    },
    {
      title: "Library MIS",
      Date: "10 April 2025",
      JobDone: "Full Stack Development",
      description:
        "This is Library Management system that eases Overall Job Done By School Librarians. It enables lending and managing books in Library.",
    },
    {
      title: "Eternal Prize Publishers",
      Date: "3 June 2024",
      JobDone: "Full Stack Development",
      description:
        "This is system That I designed and developed for Eternal Prize Company. Eternal Prize company is a publishing company that print and publishes books and other materials. This system helps them to manage their books and other materials.",
    },
  ];

  const FeaturedWorks = [
    {
      imageUrl: "/images/dashboard.png",
      workName: "Designing DashBoard",
      year: "2020",
      workCategory: "Dashboard",
      workDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      imageUrl: "/images/dashboard.png",
      workName: "Designing DashBoard",
      year: "2020",
      workCategory: "Dashboard",
      workDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      imageUrl: "/images/dashboard.png",
      workName: "Designing DashBoard",
      year: "2020",
      workCategory: "Dashboard",
      workDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="">
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex lg:flex-row flex-col gap-24 justify-between items-center md:py-24 py-12 lg:w-[80%] md:px-6 sm:px-0 w-full mx-auto"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full px-8 md:px-0 lg:w-[50%] space-y-8"
        >
          <h1 className="text-2xl md:text-3xl font-medium">
            I'm MUHUMURE Bonheur Christian, Software developer and Automation
            Engineer{" "}
          </h1>
          <p className="text-xl text-gray-700">
            I grew up in rural area, In Gicumbi District. In my childhood , I
            was really curious about Technology and how it works. I was always
            interested in learning new things and solving problems. I started my
            journey in programming when I was in junior high school (O Level). I
            Applied for Rwanda Coding Academy and I was selected. I started
            learning programming languages like HTML/CSS, Javascript (Vanilla +
            Node JS) and C in my first year. In My forst year also I learned
            about databases and web development. In My second year I learned
            about Python, Java, C++, and Solidity. I also learned about software
            development.
          </p>
          <p className="text-xl text-gray-700">
            This Time I am operating as a Software developer and Automation
            Engineer who found his passion in Programming and Embedded systems.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white flex mx-auto md:mx-0 font-medium rounded-sm px-6 py-3 cursor-pointer"
          >
            Download Resume
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400px"
            height="150px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
          >
            <path
              d="M512 301.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
              fill="#3F51B5"
            />
            <path
              d="M400.3 744.5c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z m0 0c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z"
              fill="#3F51B5"
            />
            <path
              d="M511.8 256.6c24.4 0 44.2 19.8 44.2 44.2S536.2 345 511.8 345s-44.2-19.8-44.2-44.2 19.9-44.2 44.2-44.2m0-20c-35.5 0-64.2 28.7-64.2 64.2s28.7 64.2 64.2 64.2 64.2-28.7 64.2-64.2-28.7-64.2-64.2-64.2z"
              fill="#3F51B5"
            />
            <path
              d="M730.7 529.5c0.4-8.7 0.6-17.4 0.6-26.2 0-179.6-86.1-339.1-219.3-439.5-133.1 100.4-219.2 259.9-219.2 439.5 0 8.8 0.2 17.5 0.6 26.1-56 56-90.6 133.3-90.6 218.7 0 61.7 18 119.1 49.1 167.3 30.3-49.8 74.7-90.1 127.7-115.3 39-18.6 82.7-29 128.8-29 48.3 0 93.9 11.4 134.3 31.7 52.5 26.3 96.3 67.7 125.6 118.4 33.4-49.4 52.9-108.9 52.9-173.1 0-85.4-34.6-162.6-90.5-218.6zM351.1 383.4c9.2-37.9 22.9-74.7 40.6-109.5a502.1 502.1 0 0 1 63.6-95.9c17.4-20.6 36.4-39.9 56.8-57.5 20.4 17.6 39.4 36.9 56.8 57.5 24.8 29.5 46.2 61.8 63.6 95.9 17.7 34.8 31.4 71.6 40.6 109.5 8.7 35.8 13.5 72.7 14.2 109.9C637.4 459 577 438.9 512 438.9c-65 0-125.3 20.1-175.1 54.4 0.7-37.2 5.5-74.1 14.2-109.9z m-90.6 449.2c-9.1-27-13.7-55.5-13.7-84.4 0-35.8 7-70.6 20.8-103.2 8.4-19.8 19-38.4 31.9-55.5 9.7 61.5 29.5 119.7 57.8 172.6-36.4 17.8-69 41.6-96.8 70.5z m364.2-85.3c-0.7-0.3-1.5-0.5-2.2-0.8-0.4-0.2-0.9-0.3-1.3-0.5-0.6-0.2-1.3-0.5-1.9-0.7-0.8-0.3-1.5-0.5-2.3-0.8-0.8-0.3-1.5-0.5-2.3-0.7l-0.9-0.3c-1-0.3-2.1-0.7-3.1-1-1.2-0.4-2.4-0.7-3.5-1.1l-3-0.9c-0.2-0.1-0.4-0.1-0.7-0.2-1.1-0.3-2.3-0.7-3.4-1-1.2-0.3-2.4-0.6-3.5-0.9l-3.6-0.9-3.6-0.9c-1-0.3-2.1-0.5-3.1-0.7-1.2-0.3-2.4-0.5-3.6-0.8-1.3-0.3-2.5-0.6-3.8-0.8h-0.3c-0.9-0.2-1.9-0.4-2.8-0.6-0.4-0.1-0.7-0.1-1.1-0.2-1.1-0.2-2.2-0.4-3.4-0.6-1.2-0.2-2.4-0.4-3.6-0.7l-5.4-0.9c-0.9-0.1-1.9-0.3-2.8-0.4-0.8-0.1-1.6-0.3-2.5-0.4-2.6-0.4-5.1-0.7-7.7-1-1.2-0.1-2.3-0.3-3.5-0.4h-0.4c-0.9-0.1-1.8-0.2-2.8-0.3-1.1-0.1-2.1-0.2-3.2-0.3-1.7-0.2-3.4-0.3-5.1-0.4-0.8-0.1-1.5-0.1-2.3-0.2-0.9-0.1-1.9-0.1-2.8-0.2-0.4 0-0.8 0-1.2-0.1-1.1-0.1-2.1-0.1-3.2-0.2-0.5 0-1-0.1-1.5-0.1-1.3-0.1-2.6-0.1-3.9-0.1-0.8 0-1.5-0.1-2.3-0.1-1.2 0-2.4 0-3.5-0.1h-13.9c-2.3 0-4.6 0.1-6.9 0.2-0.9 0-1.9 0.1-2.8 0.1-0.8 0-1.5 0.1-2.3 0.1-1.4 0.1-2.8 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.4-0.6 0-1.2 0.1-1.8 0.2l-7.8 0.9c-1.1 0.1-2.1 0.3-3.2 0.4-1 0.1-2.1 0.3-3.1 0.4-3.2 0.5-6.4 0.9-9.5 1.5-0.7 0.1-1.4 0.2-2.1 0.4-0.9 0.1-1.7 0.3-2.6 0.5-1.1 0.2-2.3 0.4-3.4 0.6-0.9 0.2-1.7 0.3-2.6 0.5-0.4 0.1-0.8 0.1-1.1 0.2-0.7 0.1-1.4 0.3-2.1 0.4-1.2 0.3-2.4 0.5-3.6 0.8-1.2 0.3-2.4 0.5-3.6 0.8-0.2 0-0.4 0.1-0.6 0.1-0.5 0.1-1 0.2-1.5 0.4-1.1 0.3-2.3 0.6-3.5 0.9-1.3 0.3-2.5 0.6-3.8 1-0.4 0.1-0.9 0.2-1.4 0.4-1.3 0.4-2.7 0.7-4 1.1-1.5 0.4-3 0.9-4.6 1.3-1 0.3-2.1 0.6-3.1 1-2.1 0.6-4.1 1.3-6.2 2-0.7 0.2-1.4 0.5-2.1 0.7-15-27.5-27.4-56.4-37-86.2-11.7-36.1-19.2-73.6-22.5-111.6-0.6-6.7-1-13.3-1.3-20-0.1-1.2-0.1-2.4-0.1-3.6-0.1-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.7 18.8-14 39.2-25.8 61-35 36.1-15.3 74.5-23 114.1-23 39.6 0 78 7.8 114.1 23 21.8 9.2 42.2 20.9 61 35v0.1c0 1 0 1.9-0.1 2.9 0 1.4-0.1 2.8-0.1 4.3 0 0.7 0 1.3-0.1 2-0.1 1.8-0.1 3.5-0.2 5.3-0.3 6.7-0.8 13.3-1.3 20-3.3 38.5-11 76.5-23 113-9.7 30.3-22.3 59.4-37.6 87.1z m136.8 90.9a342.27 342.27 0 0 0-96.3-73.2c29.1-53.7 49.5-112.8 59.4-175.5 12.8 17.1 23.4 35.6 31.8 55.5 13.8 32.7 20.8 67.4 20.8 103.2 0 31-5.3 61.3-15.7 90z"
              fill="#3F51B5"
            />
            <path
              d="M512 819.3c8.7 0 24.7 22.9 24.7 60.4s-16 60.4-24.7 60.4-24.7-22.9-24.7-60.4 16-60.4 24.7-60.4m0-20c-24.7 0-44.7 36-44.7 80.4 0 44.4 20 80.4 44.7 80.4s44.7-36 44.7-80.4c0-44.4-20-80.4-44.7-80.4z"
              fill="#3F51B5"
            />
          </svg>
        </motion.div>
      </motion.div>
      <div className="bg-[#EDF7FA] py-24 space-y-4" id="works">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center lg:w-[80%] w-full px-6 lg:px-0 mx-auto"
        >
          <p className="text-xl text-gray-700 font-medium">Recent Works</p>
          <p className="text-lg font-lg text-indigo-500 cursor-pointer">
            view all
          </p>
        </motion.div>

        <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-12 lg:w-[80%] w-full space-y-12 md:space-y-6 lg:space-y-0 mx-auto px-4 lg:px-0">
          {works.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white py-10 md:px-6 px-4 rounded-lg space-y-5 md:text-start text-center overflow-auto"
            >
              <h1 className="text-2xl font-medium truncate" title={item.title}>
                {item.title}
              </h1>
              <div className="flex md:flex-row flex-col items-center gap-4 text-xl text-gray-700">
                <p className="bg-gray-100 px-4 py-2 truncate" title={item.Date}>
                  {item.Date}
                </p>
                <p className="truncate" title={item.JobDone}>
                  {item.JobDone}
                </p>
              </div>
              <p className="line-clamp-3" title={item.description}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="lg:w-[80%] w-full mx-auto space-y-12 py-16 px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="text-xl text-gray-700 font-medium" variants={item}>
          Featured Works
        </motion.p>

        {FeaturedWorks.map((itemData, index) => (
          <motion.div
            key={index}
            className="flex lg:flex-row flex-col items-center gap-6 border-b-2 border-indigo-800/10 lg:w-[80%] w-full pb-10"
            variants={item}
          >
            <Image
              src={itemData.imageUrl}
              alt="image"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="space-y-6 lg:text-start text-center">
              <h1 className="text-2xl font-bold">{itemData.workName}</h1>
              <div className="flex items-center text-center lg:text-start gap-4">
                <p className="bg-indigo-900 rounded-full px-4 font-bold text-white">
                  {itemData.year}
                </p>
                <p className="text-xl font-medium text-gray-700">
                  {itemData.workCategory}
                </p>
              </div>
              <p className="lg:w-[70%] w-full">{itemData.workDescription}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        id="contact"
        className="w-[80%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl text-gray-700 font-medium">Contacts</h1>

        <motion.ul
          className="space-y-4 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // Animate each contact one by one
              },
            },
          }}
        >
          {[
            { label: "Phone", value: "+250 795 680 055" },
            { label: "Email", value: "bonheurchristian16@gmail.com" },
            { label: "WhatsApp", value: "+250 726 711 232" },
          ].map((contact, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 font-medium text-gray-700"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {contact.label}:
              <span className="text-indigo-800 hover:underline duration-500">
                {contact.value}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <Footer />
    </div>
  );
}
