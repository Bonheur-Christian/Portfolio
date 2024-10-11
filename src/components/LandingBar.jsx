import { FiDownload } from "react-icons/fi";

function LandingBar() {
  const Links = [
    { link: "Home", dest: "/" },
    { link: "About", dest: "#about" },
    { link: "Projects", dest: "#project" },
    { link: "Contacts", dest: "#contacts" },
  ];
  return (
    <div>
      <nav className="text-white flex justify-between px-12 py-12">
        <div>
          <a href="/">
            <img
              src="/svg/logo.svg"
              alt="Personal Logo"
              width={180}
              height={80}
            />
          </a>
        </div>
        <div className="flex items-center gap-24">
          {Links.map((item, index) => (
            <ul key={index}>
              <a href={item.dest}>
                <li className="underline-animation">{item.link}</li>
              </a>
            </ul>
          ))}
          <button className="border border-3 text-xl border-[#FF4900] font-semibold rounded-full px-4 py-2 hover:bg-[#FF4900] flex items-center gap-4">
            <FiDownload />
            Download CV
          </button>
        </div>
      </nav>
    </div>
  );
}

export default LandingBar;
