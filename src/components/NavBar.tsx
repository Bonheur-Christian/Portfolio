import Link from "next/link";

export default function NavBar() {
  const NavBarLinks = [
    { link: "/works", name: "Works" },
    { link: "/about", name: "About" },
    { link: "/blog", name: "Blog" },
    { link: "/contact", name: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className="w-[80%] mx-auto flex justify-between py-6 pt-12">
        <div>
          <Link href="/" className="text-4xl text-indigo-800 font-extrabold">B</Link>
        </div>
        <div>
          <ul className="flex gap-16 text-lg font-lg">
            {NavBarLinks.map((item, index) => (
              <li key={index} className="underline-animation hover:text-indigo-800 hover:font-medium duration-500">
                <a href={item.link} >{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>  
    </div>
  );
}
