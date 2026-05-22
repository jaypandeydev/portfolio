import Title from "../layouts/Title";
import { expertise, industries } from "../../constants";

const Features = () => {
  return (
    <section id="expertise" className="section border-t border-line">
      <div className="container-px">
        <Title
          eyebrow="What I do"
          title="From enterprise .NET to production AI"
          description="Years building software that businesses depend on — now channeled into shipping reliable, AI-powered products."
        />

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sml:grid-cols-2 lgl:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-bg p-7 transition-colors duration-200 hover:bg-bgAlt"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accentSoft text-xl text-accent">
                {item.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft">
                {item.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 text-xs text-inkSoft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Industries I've delivered for
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-line px-3 py-1 text-sm text-inkSoft"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
