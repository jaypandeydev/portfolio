import Title from "../layouts/Title";
import { stack } from "../../constants";

const Toolkit = () => {
  return (
    <section id="stack" className="section border-t border-line">
      <div className="container-px">
        <Title
          eyebrow="Stack"
          title="Tools & technologies"
          description="The languages, frameworks and platforms I build with — from enterprise .NET to AI and automation."
        />

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sml:grid-cols-2">
          {stack.map((group) => (
            <div key={group.category} className="bg-bg p-6">
              <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-inkSoft"
                  >
                    {item}
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

export default Toolkit;
