import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div>
          <h2 className="font-headline text-5xl text-primary-950 font-bold tracking-tight mb-2">
            Mind the Gap
          </h2>
          <h3 className="font-semibold text-eggplant-950 text-2xl mb-8">
            AI, Digital Health, and Who Gets Left Behind
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                In this rapidly evolving digital age, Artificial Intelligence (AI) is transforming every facet of our lives, and healthcare is no exception. But as an academic deeply invested in the societal and public health impact of technology, I believe it's crucial to ask a critical question: <strong>Who benefits from this revolution, and who might be left behind?</strong>
              </p>
              <p className="text-muted-foreground">
                This blog is a space to explore the fascinating, often complex, and sometimes unsettling intersection of AI and digital health, always with a sharp focus on **equity**. We'll be discussing how these powerful technologies can either bridge or widen existing health gaps, examining the challenges of algorithmic bias, the digital divide, data privacy, and equitable access.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" variant="white-card">
                  <Link href="https://blog.drjforrest.com" target="_blank">
                    Visit Mind the Gap
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                More importantly, we'll spotlight innovative solutions, ethical frameworks, and policy considerations that can ensure AI truly serves everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                Through historical analysis, contemporary case studies, and real-world examples, Mind the Gap unpacks the science, discuss the ethics, and share stories of the human impact of AI in health. Whether you're a patient, a healthcare professional, a policymaker, a technologist, or simply someone curious about the future of health, it's fun and informative and the best way to stay connected to my research as it evolves.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div 
                    className="w-full h-56 md:h-56 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg"
                    style={{ backgroundImage: "url('/images/mind-the-gap-logo.png')" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}