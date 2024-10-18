import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function LandingBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Links = [
    { link: "Home", dest: "/" },
    { link: "About", dest: "#about" },
    { link: "Projects", dest: "#project" },
    { link: "Contacts", dest: "#contacts" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (scrolled) {
      setOpen(false);
    }
  }, [scrolled]);

  return (
    <div>
      <nav className="text-white flex justify-between lg:px-12 sm:px-4 py-12">
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
        <div
          className={`${
            open
              ? "pt-20 flex flex-col space-y-4 me-[-8rem]"
              : "sm:hidden lg:flex items-center gap-24"
          }`}
        >
          <ul className="lg:flex sm:space-y-4 items-center gap-24">
            {Links.map((item, index) => (
              <li className="underline-animation" key={index}>
                <a href={item.dest}>{item.link}</a>
              </li>
            ))}
          </ul>
          <button className="border border-3 text-xl border-[#FF4900] font-semibold rounded-full px-4 py-2 hover:bg-[#FF4900] lg:flex items-center gap-4 sm:hidden md:flex">
            <FiDownload />
            Download CV
          </button>
        </div>
        <div className="sm:block lg:hidden duration-700" onClick={toggleMenu}>
          {open ? (
            <IoCloseSharp size={35} color="#ff4900" />
          ) : (
            <IoMdMenu size={35} color="#ff4900" />
          )}
        </div>
      </nav>
    </div>
  );
}

export default LandingBar;
