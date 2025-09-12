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
                In this rapidly evolving digital age, Artificial Intelligence
                (AI) is transforming every facet of our lives, and healthcare is
                no exception. As an academic investigating the public
                health side of AI in its many forms, I'm asking the
                critical question:{" "}
                <strong>
                  Who benefits from this revolution, and who might be left
                  behind?
                </strong>
              </p>
              <p className="text-muted-foreground">
                Mind the Gap is a space to explore the fascinating, often
                complex, and sometimes unsettling intersection of AI and
                health, always with a sharp focus on equity. It discusses how
                these powerful technologies can either bridge or widen existing
                disparities, examining the challenges of algorithmic
                bias, the growing digital divide, equitable access, and data privacy and sovereignty.
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
                Most importantly, Mind the Gap spotlights innovative solutions,
                ethical frameworks, and practical policy considerations that can
                helpensure AI truly serves everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                Through historical analysis, contemporary case studies, and
                real-world examples, Mind the Gap unpacks the science, discusses
                the ethics, and shares stories of the human impact of AI in
                health. Whether you're a patient, a healthcare professional, a
                policymaker, a technologist, or curious observer of the AI
                health revolution, it promises to be a fun and informative
                experience, and a great way to stay connected to my research as
                it evolves.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div
                    className="w-full h-56 md:h-56 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: "url('/images/mind-the-gap-logo.png')",
                    }}
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
