import { AtAGlance } from "@/components/home/at-a-glance";
import { DualRole } from "@/components/home/dual-role";
import { Hero } from "@/components/home/hero";
import { NetworkViz } from "@/components/home/network-viz";
import { Publications } from "@/components/home/publications";

export default function Home() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <DualRole />
      <NetworkViz />
      <Publications />
    </>
  );
}
