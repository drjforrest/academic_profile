import { AtAGlance } from "@/components/home/at-a-glance";
import { DualRole } from "@/components/home/dual-role";
import { Hero } from "@/components/home/hero";
import { NetworkViz } from "@/components/home/network-viz";
import { Publications } from "@/components/home/publications";
import { BlogSection } from "@/components/home/blog-section";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Hero />
      <AtAGlance />
      <DualRole />
      <NetworkViz />
      <BlogSection />
      <Publications />
    </div>
  );
}
