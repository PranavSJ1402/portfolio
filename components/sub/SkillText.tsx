"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiAmazonaws,
  SiGithubactions,
  SiPython,
  SiRedux,
} from "react-icons/si";

type Skill = {
  skill: string;
  Icon: React.ElementType | null;
  color: string;
  imageUrl?: string;
};

type Theme = {
  from: string; // gradient start (tailwind class fragment, e.g. "from-amber-300")
  to: string; // gradient end
  glow: string; // soft background glow color
};

type Block = {
  title: string;
  caption: string;
  items: Skill[];
  span: string;
  theme: Theme;
  icon: React.ReactNode;
};

// ---- tiny hand-drawn category glyphs (no extra deps) ----
const GlyphCode = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M8 6L2 12l6 6M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GlyphLayout = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const GlyphServer = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="7" cy="7" r="1" fill="currentColor" />
    <circle cx="7" cy="17" r="1" fill="currentColor" />
  </svg>
);
const GlyphCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M7 18a4.5 4.5 0 0 1-.7-8.94A5.5 5.5 0 0 1 17.2 8.1 4 4 0 0 1 17 18H7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);
const GlyphDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// Single skill chip — icon (or monogram fallback) + name
const SkillChip = ({ skill, Icon, color, imageUrl }: Skill) => (
  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.045] border border-white/[0.07] hover:bg-white/[0.09] hover:border-white/[0.2] hover:-translate-y-0.5 transition-all duration-200">
    <div className="text-xl shrink-0 flex items-center justify-center w-6 h-6">
      {Icon ? (
        <Icon color={color} />
      ) : imageUrl ? (
        <img src={imageUrl} alt={skill} className="w-5 h-5 object-contain" />
      ) : (
        <span
          className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white/90"
          style={{ backgroundColor: color }}
        >
          {skill.trim().charAt(0)}
        </span>
      )}
    </div>
    <span className="text-sm sm:text-[15px] text-white/85 font-medium whitespace-nowrap">
      {skill}
    </span>
  </div>
);

// A single category block/card
const SkillBlock = ({ block, index }: { block: Block; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    className={`group relative rounded-2xl p-6 sm:p-7 overflow-hidden bg-white/[0.035] border border-white/[0.08] backdrop-blur-sm hover:border-white/[0.2] transition-colors duration-300 ${block.span}`}
  >
    {/* soft radial glow tucked in the corner, tinted per-category */}
    <div
      className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
      style={{ background: block.theme.glow }}
    />

    <div className="relative flex items-start justify-between mb-5">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${block.theme.from} ${block.theme.to} text-black/80 shadow-lg shadow-black/20`}
        >
          {block.icon}
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white/95 leading-tight">
            {block.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-white/40">{block.caption}</p>
        </div>
      </div>
    </div>

    <div className="relative flex flex-wrap gap-2.5">
      {block.items.map((item) => (
        <SkillChip key={item.skill} {...item} />
      ))}
    </div>
  </motion.div>
);

const SkillText = () => {
  const blocks: Block[] = [
    {
      title: "Frontend",
      caption: "Building interfaces & experiences",
      span: "md:col-span-4",
      icon: <GlyphLayout />,
      theme: { from: "from-cyan-300", to: "to-blue-400", glow: "#22d3ee" },
      items: [
        { skill: "HTML", Icon: SiHtml5, color: "#E34F26" },
        { skill: "CSS", Icon: SiCss3, color: "#1572B6" },
        { skill: "React.js", Icon: SiReact, color: "#61DAFB" },
        { skill: "Next.js", Icon: null, color: "#000000", imageUrl: "/next.png" },
        { skill: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
        { skill: "shadcn/ui", Icon: null, color: "#404040" },
        { skill: "Redux", Icon: SiRedux, color: "#E34F26" },

      ],
    },
    {
      title: "Languages",
      caption: "Core programming languages",
      span: "md:col-span-2",
      icon: <GlyphCode />,
      theme: { from: "from-amber-300", to: "to-orange-400", glow: "#fbbf24" },
      items: [
        { skill: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { skill: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { skill: "Python", Icon: SiPython, color: "#3776AB" },
      ],
    },
    {
      title: "Backend",
      caption: "APIs, services & server logic",
      span: "md:col-span-2",
      icon: <GlyphServer />,
      theme: { from: "from-emerald-300", to: "to-green-400", glow: "#34d399" },
      items: [
        { skill: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { skill: "Express.js", Icon: null, color: "#000000", imageUrl: "/express.png" },
        { skill: "REST APIs", Icon: null, color: "#10b981" },
      ],
    },
    {
      title: "Deployments",
      caption: "Shipping & running software",
      span: "md:col-span-2",
      icon: <GlyphCloud />,
      theme: { from: "from-violet-300", to: "to-fuchsia-400", glow: "#a78bfa" },
      items: [
        { skill: "Linux", Icon: SiLinux, color: "#FCC624" },
        { skill: "Docker", Icon: SiDocker, color: "#2496ED" },
        { skill: "AWS (EC2, S3)", Icon: SiAmazonaws, color: "#FF9900" },
        { skill: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      ],
    },
    {
      title: "Databases & ORM",
      caption: "Storing & modeling data",
      span: "md:col-span-2",
      icon: <GlyphDatabase />,
      theme: { from: "from-rose-300", to: "to-pink-400", glow: "#fb7185" },
      items: [
        { skill: "MySQL", Icon: SiMysql, color: "#4479A1" },
        { skill: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { skill: "Postgresql", Icon: null, color: "#000000", imageUrl: "/postger.png" },
        { skill: "Prisma", Icon: null, color: "#000000", imageUrl: "/prisma.webp" },
        { skill: "ConvexDB", Icon: null, color: "#000000", imageUrl: "/convex.png" },

      ],
    },
  ];

  const { skillCount, domainCount } = useMemo(
    () => ({
      skillCount: blocks.reduce((sum, b) => sum + b.items.length, 0),
      domainCount: blocks.length,
    }),
    []
  );

  return (
    <div
      id="tech-stack"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative mb-14 text-center"
      >
        <span className="inline-block font-mono mb-3 text-3xl tracking-[0.25em] uppercase text-cyan-300/70 border border-cyan-300/20 rounded-full px-4 py-1.5">
          Tech Stack
        </span>
        <p className="text-white/60 text-base italic sm:text-lg mt-3">
          Tools across all domains — from interface to infrastructure
        </p>
      </motion.div>

      {/* Skill Blocks — bento grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
        {blocks.map((block, index) => (
          <SkillBlock key={block.title} block={block} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillText;