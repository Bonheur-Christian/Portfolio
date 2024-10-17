function Contacts() {
  return (
    <div
      className="text-white lg:ps-24 sm:ps-4 lg:pb-32 sm:pb-12 lg:space-y-0 sm:space-y-6 border-b border-[#ff4900]"
      id="contacts"
    >
      <div className="space-y-6">
        <h4 className="font-montserrat text-md font-semibold text-center">
          Get In Touch
        </h4>
        <h1 className="text-4xl font-extrabold font-lato text-center">
          Contact Me
        </h1>
        <p className="text-md font-lato text-center lg:px-0 sm:px-1">
          Fell free to reach out, In case of poor service offered or you have
          something to suggest.
        </p>
      </div>

      <div className="mx-auto lg:space-y-6 sm:space-y-6">
        <div className="flex items-center justify-center gap-6">
          <div>
            <label htmlFor="firstname" className="block font-medium py-2">
              First Name
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md lg:w-[20vw] sm:w-[40vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block font-medium py-2">
              Last Name
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md lg:w-[20vw] sm:w-[40vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
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
              className="h-[3rem] rounded-md lg:w-[20vw] sm:w-[40vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block font-medium py-2">
              Phone Number
            </label>
            <input
              type="text"
              className="h-[3rem] rounded-md lg:w-[20vw] sm:w-[40vw] bg-gray-300 outline-none px-4 py-2 text-gray-500 font-medium text-md"
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
              className="lg:w-[41.5vw] sm:w-[85vw] bg-gray-300 rounded-md outline-none px-4 py-2 text-gray-500 font-medium text-md placeholder:text-slate-500"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
