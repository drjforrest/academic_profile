"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { publications } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export function Publications() {
  const [api, setApi] = useState<CarouselApi>();
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!api) return;

    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();

    const styles = api.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [api, setTweenValues]);

  useEffect(() => {
    if (!api) return;
    onScroll();
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);
  }, [api, onScroll]);

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
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="[perspective:1000px]">
              {publications.map((publication, index) => (
                <CarouselItem
                  key={publication.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  style={{
                    ...(tweenValues.length && {
                      transform: `rotateY(${
                        (tweenValues[index] - 1) * 20
                      }deg) scale(${
                        1 - Math.abs((tweenValues[index] - 1) * 0.2)
                      })`,
                      filter: `blur(${Math.abs(tweenValues[index] - 1) * 4}px)`,
                      transformStyle: "preserve-3d",
                    }),
                  }}
                >
                  <Link
                    href={`/publications/${publication.slug}`}
                    className="group block h-[400px] w-full"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-lg border-4 border-card shadow-2xl transition-all duration-300 ease-in-out group-hover:scale-105">
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
                          <ExternalLink className="mr-2 h-4 w-4" /> Read More
                        </Button>
                      </div>
                    </div>
                  </Link>
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
