import { Link } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { stats, socials, roles } from "../../constants";

const iconFor = (name: string) => {
  if (name === "LinkedIn") return <FaLinkedinIn />;
  if (name === "X") return <RiTwitterXLine />;
  return <FaFacebookF />;
};

const Banner = () => {
  return (
    <section id="top" className="section pt-8 mdl:pt-12">
      <div className="container-px">
        <div className="flex flex-col-reverse gap-8 lgl:flex-row lgl:items-center lgl:gap-12">
          <div className="lgl:w-3/5">
            <p className="eyebrow">AI Enthusiast &amp; Builder</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink mdl:text-6xl">
              AI Engineer building <span className="text-accent">AI products</span> that ship.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-inkSoft mdl:text-lg">
              I'm Jay Pandey — a senior .NET engineer and AI enthusiast. After
              years building enterprise software in C#, .NET, React and Angular,
              I now lead teams and build as a hands-on AI engineer: RAG systems,
              autonomous agents and LLM-powered products. Six live in production
              today.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-inkSoft"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="work"
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                View my work <FiArrowUpRight />
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-ghost cursor-pointer"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://vellmontservices.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
              >
                vellmontservices.com <FiArrowUpRight />
              </a>
              <span className="hidden h-4 w-px bg-line sml:block" />
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-inkSoft transition-colors duration-200 hover:border-ink hover:text-ink"
                  >
                    {iconFor(s.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lgl:w-2/5">
            <img
              src="/profilePhoto.jpg"
              alt="Jay Pandey — AI Engineer and senior .NET developer"
              className="mx-auto w-56 rounded-2xl border border-line object-cover sml:w-64 mdl:w-72"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line mdl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-6">
              <dt className="text-2xl font-semibold tracking-tight text-ink">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-inkSoft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Banner;
