import { Link } from "react-scroll";
import { navLinks, socials, contactEmail } from "../../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-px flex flex-col gap-10 py-10 mdl:flex-row mdl:items-start mdl:justify-between">
        <div className="max-w-sm">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="cursor-pointer text-base font-semibold tracking-tight"
          >
            Jay Pandey<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-inkSoft">
            AI Engineer building RAG systems, agents and LLM-powered products —
            shipped and live at vellmontservices.com.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 inline-block text-sm font-medium text-ink hover:text-accent"
          >
            {contactEmail}
          </a>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer text-sm text-inkSoft transition-colors hover:text-ink"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-inkSoft transition-colors hover:text-ink"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-px py-6">
          <p className="text-sm text-muted">
            © {year} Jay Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
