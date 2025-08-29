import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const expertise = [
  "Global Health",
  "Digital Innovation",
  "Network Analysis",
  "AI in Healthcare",
  "Capacity Building",
  "Cross-Continental Partnerships",
  "Health Equity",
  "Research Methods",
];

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Avatar className="h-40 w-40 border-4 border-background shadow-lg">
                <AvatarImage src="https://picsum.photos/200/200" alt="Dr. J. Forrest" data-ai-hint="professional portrait" />
                <AvatarFallback>JF</AvatarFallback>
              </Avatar>
              <h1 className="mt-6 font-headline text-3xl font-bold">
                Dr. J. Forrest
              </h1>
              <p className="mt-2 text-muted-foreground">
                Researcher & Digital Innovation Strategist
              </p>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-headline text-2xl font-semibold">About Me</h2>
              <div className="prose prose-lg mt-4 max-w-none text-muted-foreground dark:prose-invert">
                <p>
                  I am a researcher dedicated to understanding and shaping the role of digital innovation in global health. My work is driven by a commitment to fostering equitable and impactful collaborations, particularly between partners in the Global North and South.
                </p>
                <p>
                  With extensive experience in building and sustaining cross-continental partnerships, I focus on how technology can both be a subject of inquiry and a powerful tool for discovery. My research employs mixed-methods approaches, including network analysis and data science, to explore the complex dynamics of modern scientific and health systems.
                </p>
                <p>
                  I believe that the thoughtful application of AI and digital tools holds immense promise for addressing pressing health challenges, but only when developed and deployed with a steadfast focus on ethics, equity, and local capacity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center font-headline text-2xl font-semibold">
              Areas of Expertise
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {expertise.map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
