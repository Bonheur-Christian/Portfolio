function About() {
  return (
    <div className="lg:ps-24 sm:px-4 md:w-[80%] sm:w-[100%] lg:w-[100%] mx-auto pt-12 space-y-10" title="About me" id="about">
      <div className="flex gap-2 items-end">
        <img src="svg/line1.svg" alt="Line" className="lg:w-[1%] sm:w-[3%] md:w-[2%]" />
        <h1 className="lg:text-4xl sm:text-2xl font-medium text-white">About</h1>
      </div>
      <div className="border-[0.2rem] border-[#ff4900] w-[100%] text-white text-xl space-y-12 px-10 py-10 rounded-xl ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          atque accusantium sunt odit ut veritatis quisquam dolorem porro,
          itaque omnis modi magnam possimus voluptas perferendis distinctio
          nesciunt neque quibusdam! Expedita sint aperiam, totam fuga earum
          voluptate provident perspiciatis quos cumque ullam! Illo vitae dolores
          velit ipsam, ut nam nulla aliquid!
        </p>
        <p className="sm:hidden lg:block md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          atque accusantium sunt odit ut veritatis quisquam dolorem porro,
          itaque omnis modi magnam possimus voluptas perferendis distinctio
          nesciunt neque quibusdam! Expedita sint aperiam, totam fuga earum
          voluptate provident perspiciatis quos cumque ullam! Illo vitae dolores
          velit ipsam, ut nam nulla aliquid!
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-lato text-[#ff4900] font-light">
            About Me
          </h2>
          <img src="/svg/line2.svg" alt="line" />
        </div>
        <div className="flex lg:flex-row sm:flex-col lg:gap-80 sm:gap-12">
          <div className="lg:w-[30%] sm:w-[100%] space-y-12 pt-6">
            <p className="font-lato lg:text-2xl md:text-2xl sm:text-xl sm:text-center lg:text-start text-white  font-extrabold">
              You can’t use up creativity. The more you use,the more have in
              your significant mind.
            </p>
            <p className="text-white font-lato">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo sed, soluta ullam suscipit iusto obcaecati et at ipsum
              incidunt aperiam in voluptas beatae commodi. Dolorem numquam ut a
              id dolorum.
            </p>
          </div>
          <div className="lg:w-[30%] sm:w-[100%] space-y-6 pt-6">
            <p className="font-lato lg:text-2xl sm:text-xl text-white  font-extrabold lg:w-[60%] sm:w-[100%] lg:text-start sm:text-center">
              Any Type Of Query & Discussion.
            </p>
            <p className="text-white font-lato">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo sed, soluta ullam suscipit iusto obcaecati et at ipsum
              incidunt aperiam in voluptas beatae commodi.
            </p>
            <p className="italic text-[#ff4900] underline lg:text-start sm:text-center">info@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
