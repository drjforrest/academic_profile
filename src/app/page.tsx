import { AtAGlance } from "@/components/home/at-a-glance";
import { DualRole } from "@/components/home/dual-role";
import { Hero } from "@/components/home/hero";
import { NetworkViz } from "@/components/home/network-viz";
import { Publications } from "@/components/home/publications";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <DualRole />
      <NetworkViz />
      <Publications />
      <Testimonials />
    </>
  );
}
