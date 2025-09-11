import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-section relative h-[60vh] min-h-[500px] md:h-[70vh]">
      <Image
        src="/images/hero-new.png"
        alt="Global connectivity network visualization with digital pathways"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />

      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
            Technology, Adaptation, Equity in Global Health Research & Practice
          </h1>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-lg">
            Investigating disruptive, digital innovations to minimize their
            impact on health disparities
          </p>
          <div className="mt-10 flex gap-4 justify-center md:justify-start flex-col sm:flex-row">
            <Button asChild size="lg" variant="hero" className="min-w-48">
              <Link href="/about">Learn About Me</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="hero-outline"
              className="min-w-48"
            >
              <Link href="/contact">Collaborate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
