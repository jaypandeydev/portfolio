import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="container-px flex h-16 items-center justify-between">
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="cursor-pointer text-base font-semibold tracking-tight"
        >
          Jay Pandey<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 mdl:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-ink"
                className="cursor-pointer text-sm text-inkSoft transition-colors duration-200 hover:text-ink"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-xl text-ink mdl:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <ul className="container-px flex flex-col gap-1 border-t border-line py-3 mdl:hidden">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="block cursor-pointer py-2 text-sm text-inkSoft"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
