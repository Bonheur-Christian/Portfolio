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
    <div className="md:w-[100%]">
      <nav className="text-gray-700 flex justify-between items-center py-12">
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
              : "sm:hidden lg:flex md:flex items-center gap-24"
          }`}
        >
          <ul className="lg:flex md:flex sm:space-y-4 md:space-y-0 items-center  md:gap-16 md:px-4 lg:gap-24">
            {Links.map((item, index) => (
              <li className="underline-animation" key={index}>
                <a href={item.dest} className="font-medium cursor-pointer">{item.link}</a>
              </li>
            ))}
          </ul>
          <button className="border border-3 text-xl border-gray-700 font-semibold rounded-full px-4 py-2 hover:bg-gray-400 lg:flex items-center gap-4 sm:hidden md:hidden">
            <FiDownload />
            Download CV
          </button>
        </div>
        <div className="sm:block lg:hidden md:hidden duration-700" onClick={toggleMenu}>
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
