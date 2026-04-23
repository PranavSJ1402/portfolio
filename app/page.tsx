import Hero from "@/components/main/Hero";
import HomeContent from "@/components/main/HomeContent";
import Projects from "@/components/main/Projects";
import RevealOnScroll from "@/components/main/RevealOnScroll";
import Skills from "@/components/main/Skills";
import Experience from "@/components/sub/Experience";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-6">
        <RevealOnScroll>
          <HomeContent />
        </RevealOnScroll>
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
      </div>
    </main>
  );
}
