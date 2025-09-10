import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BlogSection() {
  return (
    <section className="bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              Mind the Gap: AI, Digital Health, and Who Gets Left Behind
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In this rapidly evolving digital age, Artificial Intelligence (AI) is transforming every facet of our lives, and healthcare is no exception. But as an academic deeply invested in the societal and public health impact of technology, I believe it's crucial to ask a critical question: <strong>Who benefits from this revolution, and who might be left behind?</strong>
            </p>
            <p className="mt-4 text-muted-foreground">
              Drawing on decades of digital health history and implementation patterns, we'll explore how past innovations succeeded or failed at serving diverse communities - and what today's AI revolution can learn from those experiences.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="https://blog.drjforrest.com" target="_blank">
                  Visit the Blog
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div 
                className="w-full h-64 md:h-80 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: "url('/images/mind-the-gap-logo.png')" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}