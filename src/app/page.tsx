import { BlogSection } from "@/components/home/blog-section";
import { DEIToolSection } from "@/components/home/dei-tool-section";
import { GlobalHealthFocus } from "@/components/home/global-health-focus";
import { Hero } from "@/components/home/hero";
import { Publications } from "@/components/home/publications";
import { Research } from "@/components/home/research";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Hero />
      <Research />
      <GlobalHealthFocus />
      <BlogSection />
      <Publications />
      <DEIToolSection />
    </div>
  );
}
