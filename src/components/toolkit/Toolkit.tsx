import Title from "../layouts/Title";
import { toolkit } from "../../constants";

const Toolkit = () => {
  return (
    <section id="toolkit" className="section border-t border-line">
      <div className="container-px">
        <Title
          eyebrow="Toolkit"
          title="Models & platforms I work with"
          description="A multi-model toolkit — chosen per task for the best balance of reasoning, speed and cost."
        />

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sml:grid-cols-2 lgl:grid-cols-3">
          {toolkit.map((tool) => (
            <div key={tool.name} className="bg-bg p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
                  {tool.name.charAt(0)}
                </span>
                <h3 className="text-base font-semibold text-ink">{tool.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-inkSoft">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
