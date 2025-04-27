export default function NavBar() {
  const NavBarLinks = [
    { link: "/works", name: "Works" },
    { link: "/about", name: "About" },
    { link: "/blog", name: "Blog" },
    { link: "/contact", name: "Contact" },
  ];
  return (
    <div>
      <nav>
        <ul>
          {NavBarLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
