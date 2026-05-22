import Title from "../layouts/Title";
import { expertise } from "../../constants";

const Features = () => {
  return (
    <section id="expertise" className="section border-t border-line">
      <div className="container-px">
        <Title
          eyebrow="What I do"
          title="AI engineering, end to end"
          description="From grounding models in real data to shipping them as dependable products — the four areas I work in every day."
        />

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sml:grid-cols-2">
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
      </div>
    </section>
  );
};

export default Features;
