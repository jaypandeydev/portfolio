import { FiArrowUpRight } from "react-icons/fi";
import Title from "../layouts/Title";
import { blogPosts } from "../../constants";

const Blog = () => {
  return (
    <section id="blog" className="section border-t border-line bg-bgAlt">
      <div className="container-px">
        <Title
          eyebrow="Writing"
          title="Notes on building with AI"
          description="Short, practical pieces on RAG, agents and shipping LLM-powered products."
        />

        <div className="mt-8 border-y border-line">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="group flex flex-col gap-1.5 border-b border-line py-6 last:border-b-0 mdl:flex-row mdl:items-baseline mdl:gap-8"
            >
              <span className="text-sm text-muted mdl:w-28 mdl:shrink-0">
                {post.date}
              </span>
              <div className="flex-1">
                <h3 className="flex items-center gap-1.5 text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                  <FiArrowUpRight className="text-base text-muted transition-colors duration-200 group-hover:text-accent" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-inkSoft">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
