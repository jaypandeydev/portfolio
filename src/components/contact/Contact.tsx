import { useState } from "react";
import type { FormEvent } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "../layouts/Title";
import { contactEmail, socials } from "../../constants";

const isValidEmail = (email: string) =>
  /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase());

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!name) return setErrMsg("Please enter your name.");
    if (!email) return setErrMsg("Please enter your email.");
    if (!isValidEmail(email)) return setErrMsg("Please enter a valid email.");
    if (!message) return setErrMsg("Please enter a message.");

    setErrMsg("");
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-px">
        <div className="grid gap-8 lgl:grid-cols-2 lgl:gap-12">
          <div>
            <Title
              eyebrow="Contact"
              title="Let's build something"
              description="Have an AI product in mind, or want to talk RAG, agents and LLM workflows? Send a message."
            />
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex w-fit items-center gap-2 text-sm font-medium text-ink hover:text-accent"
              >
                {contactEmail} <FiArrowUpRight />
              </a>
              <div className="flex flex-wrap gap-4 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-inkSoft transition-colors hover:text-ink"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSend}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-bg p-6 mdl:p-8"
          >
            <div>
              <label className="text-sm font-medium text-ink">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="field mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="field mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project…"
                className="field mt-2 resize-none"
              />
            </div>

            {errMsg && <p className="text-sm text-red-600">{errMsg}</p>}
            {sent && (
              <p className="text-sm text-accent">
                Thanks, {name} — your email client should now be open.
              </p>
            )}

            <button type="submit" className="btn-primary mt-1">
              Send message <FiArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
