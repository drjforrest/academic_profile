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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "../ui/badge";

export function Publications() {
  const { toast } = useToast();

  const handleCopyCitation = (publication: (typeof publications)[0]) => {
    const citation = `${publication.authors.join(
      ", "
    )}. (${publication.year}). ${publication.title}. ${
      publication.journal
    }. doi:${publication.doi}`;
    navigator.clipboard.writeText(citation);
    toast({
      title: "Citation Copied",
      description: "The citation has been copied to your clipboard.",
    });
  };

  return (
    <section>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight">
            Recent Publications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my recent research, articles, and contributions to
            the field.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {publications.map((publication) => (
              <CarouselItem
                key={publication.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="relative aspect-[4/5] p-0">
                      <Image
                        src={publication.imageUrl}
                        alt={publication.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={publication.aiHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black/50">
                        <h3 className="font-headline text-xl font-bold text-primary-foreground">
                          {publication.title}
                        </h3>
                        <p className="text-sm text-primary-foreground/80 mt-2">
                          {publication.authors.map((author, i) => (
                            <span key={i}>
                              {author.includes("Forrest") ? <b>{author}</b> : author}
                              {i < publication.authors.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                           ({publication.year})
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="secondary" asChild>
                            <a href={publication.pdfUrl} target="_blank" rel="noreferrer">
                              <FileText className="mr-2 h-4 w-4" /> View PDF
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleCopyCitation(publication)}
                          >
                            <Copy className="mr-2 h-4 w-4" /> Copy
                          </Button>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity group-hover:opacity-0">
                         <h3 className="font-headline text-lg font-semibold text-white truncate">
                           {publication.title}
                         </h3>
                         <div className="flex flex-wrap gap-2 mt-2">
                           {publication.tags.slice(0, 2).map(tag => (
                             <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                           ))}
                         </div>
                       </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="mt-8 text-center">
            <Button asChild variant="outline">
                <Link href="/publications">View All Publications</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
