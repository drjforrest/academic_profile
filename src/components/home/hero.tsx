import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] md:h-[70vh]">
      <Image
        src="/images/hero.png"
        alt="Abstract visualization of interconnecting continents"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 md:bg-gradient-to-r md:from-background/90 md:to-transparent" />

      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-tight">
            Technology, Adaptation, and Equity
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Optimizing disruptive, digital innovations to minimize health
            disparities in global health outcomes, research and practice
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start flex-col sm:flex-row">
            <Button asChild size="lg" className="min-w-48">
              <Link href="/research">Discover My Research</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-48">
              <Link href="/contact">Collaborate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
