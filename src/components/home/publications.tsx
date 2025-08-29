"use client";

import Image from "next/image";
import Link from "next/link";
import { publications } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function Publications() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            Digital Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my recent research, articles, and contributions to
            the field, presented in a digital art gallery format.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            style={{ perspective: "1000px" }}
          >
            <CarouselContent>
              {publications.map((publication) => (
                <CarouselItem
                  key={publication.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="group relative h-[400px] w-full [transform-style:preserve-3d]">
                     <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105 [transform:translateZ(-10px)_rotateY(35deg)] group-hover:[transform:translateZ(0)_rotateY(0)]"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-lg border-4 border-card shadow-2xl">
                        <Image
                          src={publication.imageUrl}
                          alt={publication.title}
                          fill
                          className="object-cover"
                          data-ai-hint={publication.aiHint}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                         <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/50" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                            <h3 className="truncate font-headline text-lg font-semibold">
                                {publication.title}
                            </h3>
                        </div>

                        <div className="absolute inset-0 flex translate-y-4 flex-col items-center justify-center p-4 text-center text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <h3 className="font-headline text-xl font-bold">
                            {publication.title}
                          </h3>
                          <p className="mt-2 text-sm">({publication.year})</p>
                           <Button size="sm" className="mt-4">
                             <ExternalLink className="mr-2 h-4 w-4" /> View Work
                           </Button>
                        </div>

                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden text-foreground sm:flex" />
            <CarouselNext className="hidden text-foreground sm:flex" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/publications">View All Publications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
