import type { ReactNode } from "react";
import {
  TbDatabaseSearch,
  TbRobot,
  TbPrompt,
  TbPlugConnected,
} from "react-icons/tb";

/* ---------------------------------- Nav --------------------------------- */
export const navLinks = [
  { id: "expertise", title: "Expertise", link: "expertise" },
  { id: "work", title: "Work", link: "work" },
  { id: "toolkit", title: "Toolkit", link: "toolkit" },
  { id: "blog", title: "Blog", link: "blog" },
  { id: "contact", title: "Contact", link: "contact" },
];

/* -------------------------------- Roles --------------------------------- */
export const roles = [
  "VP · NSR Information Systems",
  "Co-owner · Vellmont Services India",
  "Owner · Vellmont IT Services LLC (UAE)",
];

/* ------------------------------- Hero stats ----------------------------- */
export const stats = [
  { value: "6", label: "Products shipped" },
  { value: "Live", label: "at vellmontservices.com" },
  { value: "4", label: "Core AI disciplines" },
  { value: "Multi-LLM", label: "Claude · GPT · Gemini" },
];

/* ------------------------------- Expertise ------------------------------ */
export type Expertise = {
  title: string;
  icon: ReactNode;
  desc: string;
  tags: string[];
};

export const expertise: Expertise[] = [
  {
    title: "RAG Systems",
    icon: <TbDatabaseSearch />,
    desc: "Retrieval-augmented pipelines that ground model answers in real data — chunking, embeddings, vector search and re-ranking for accurate, sourced responses.",
    tags: ["Vector search", "Embeddings", "Grounded answers"],
  },
  {
    title: "AI Agents",
    icon: <TbRobot />,
    desc: "Autonomous, tool-using agents that plan and execute multi-step tasks — from research and automation to end-to-end workflow orchestration.",
    tags: ["Tool use", "Planning", "Orchestration"],
  },
  {
    title: "Prompt Engineering",
    icon: <TbPrompt />,
    desc: "Structured, reliable prompting for Claude and other models — system design, evaluation and iteration that turns models into dependable products.",
    tags: ["Claude", "System design", "Evaluation"],
  },
  {
    title: "LLM Integration",
    icon: <TbPlugConnected />,
    desc: "Wiring large language models into real applications — APIs, context management and production-grade delivery across multiple model providers.",
    tags: ["APIs", "Context", "Production"],
  },
];

/* -------------------------------- Projects ------------------------------ */
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  live: string;
};

export const projects: Project[] = [
  {
    title: "MedQuePMS",
    desc: "A medical practice platform handling patient queues, consultations, SMS/WhatsApp/IVR booking, pharmacy POS, billing and digital diagnostic records.",
    tags: ["Healthcare", "SaaS"],
    live: "https://medquepms.com",
  },
  {
    title: "VellRoute",
    desc: "Takes tour operators fully digital — replacing manual WhatsApp coordination with a streamlined, end-to-end booking workflow.",
    tags: ["Travel", "Automation"],
    live: "https://vellroute.com",
  },
  {
    title: "Tutora",
    desc: "A platform that connects teachers and students for paid sessions, handling discovery, fees and the learning workflow in one place.",
    tags: ["EdTech", "Platform"],
    live: "https://tutorra.vellmontservices.com",
  },
  {
    title: "VellBill",
    desc: "Invoicing and billing software that makes creating, sending and tracking invoices fast and effortless.",
    tags: ["FinTech", "Billing"],
    live: "https://vellbill.com",
  },
  {
    title: "InviteSync",
    desc: "Manages and tracks invitations with automatic reminders, plus a built-in card creator to design invitations from scratch.",
    tags: ["Productivity", "AI Reminders"],
    live: "https://invitesync.com",
  },
  {
    title: "Vedjyotix",
    desc: "An astrology app that brings personalised charts, predictions and guidance to users in a clean digital experience.",
    tags: ["Astrology", "Consumer App"],
    live: "https://vedjyotix.com",
  },
];

/* -------------------------------- Toolkit ------------------------------- */
/* TODO(jay): confirm tool names — "OpenClaw" and "Hermes Paperclip" were
   taken verbatim from your brief; rename if those were typos. */
export type Tool = {
  name: string;
  desc: string;
};

export const toolkit: Tool[] = [
  { name: "Claude", desc: "Primary model for reasoning, agents and prompt-engineered workflows." },
  { name: "ChatGPT", desc: "GPT models for generation, automation and rapid prototyping." },
  { name: "Gemini", desc: "Google's multimodal models for conversational and content tasks." },
  { name: "Genspark", desc: "AI search and agentic workflows for research-heavy use cases." },
  { name: "OpenClaw", desc: "Agent tooling for browser and computer-use automation." },
  { name: "Hermes Paperclip", desc: "Workflow automation layer for connecting AI to real tasks." },
];

/* ---------------------------------- Blog -------------------------------- */
/* TODO(jay): replace with real posts and set each `url` to the published
   article (or remove the Blog section if you're not writing yet). */
export type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Designing RAG systems that stay accurate",
    date: "May 2026",
    excerpt:
      "Chunking, re-ranking and evaluation — the practical choices that decide whether a retrieval pipeline gives grounded answers or confident guesses.",
    url: "#",
  },
  {
    title: "From prompt to product: shipping with Claude",
    date: "Apr 2026",
    excerpt:
      "How I turn a working prompt into a dependable feature — structure, evaluation and the guardrails that make it production-ready.",
    url: "#",
  },
  {
    title: "When to reach for an AI agent — and when not to",
    date: "Mar 2026",
    excerpt:
      "Agents are powerful but not free. A look at where autonomous, tool-using workflows pay off and where a simple call wins.",
    url: "#",
  },
];

/* --------------------------------- Social ------------------------------- */
export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jppandey/" },
  { name: "X", url: "https://x.com/jaypandeyspeaks" },
  { name: "Facebook", url: "https://www.facebook.com/jay.p.pandey.359/" },
];

export const contactEmail = "pandeyjp1@gmail.com";
