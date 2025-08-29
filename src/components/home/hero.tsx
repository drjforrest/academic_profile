import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] md:h-[70vh]">
      <Image
        src="https://picsum.photos/1600/900"
        alt="Abstract visualization of interconnecting continents"
        fill
        className="object-cover"
        data-ai-hint="abstract network digital"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 md:bg-gradient-to-r md:from-background/90 md:to-transparent" />

      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Collaboration and Capacity in the Age of AI
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Exploring and applying digital innovation to strengthen global
            health partnerships and research.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/research">Discover My Research</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Collaborate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
