function Contacts() {
  return (
    <div className="text-white ps-24 pb-32 border-b border-[#ff4900]" id="contacts">
      <div className="space-y-6">
        <h4 className="font-montserrat text-md font-semibold text-center">
          Get In Touch
        </h4>
        <h1 className="text-4xl font-extrabold font-lato text-center">
          Contact Me
        </h1>
        <p className="text-md font-lato text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mx-auto space-y-6">
        <div className="flex items-center justify-center gap-6">
          <div>
            <label htmlFor="firstname" className="block font-medium py-2">
              First Name
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md w-[20vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block font-medium py-2">
              Last Name
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md w-[20vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <label htmlFor="firstname" className="block font-medium py-2">
              Email
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md w-[20vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block font-medium py-2">
              Phone Number
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md w-[20vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <label htmlFor="lastname" className="block font-medium py-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Type your message ..."
              className="w-[41.5vw] bg-gray-300 rounded-md outline-none px-4 py-2 text-gray-500 font-medium text-md placeholder:text-slate-500"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
