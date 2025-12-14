import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Database, FlaskConical, Globe, Users, Building2 } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: "medcontext",
    name: "MedContext",
    tagline: "Agentic AI for Medical Misinformation",
    description:
      "Multimodal AI system achieving high accuracy in health misinformation detection through contextual authenticity analysis.",
    icon: Sparkles,
    tags: ["AI/ML", "Kaggle", "Multimodal"],
    href: "/projects#medcontext",
  },
  {
    id: "counterforce",
    name: "Counterforce AI",
    tagline: "Misinformation Detection & Reputation Management",
    description:
      "Early-stage venture helping organizations identify and mitigate digital misinformation before it spreads.",
    icon: Shield,
    tags: ["Startup", "SaaS", "AI/ML"],
    href: "/projects#counterforce",
    badge: "UBC Founder Venture",
  },
  {
    id: "hero-library",
    name: "HERO Evidence Library",
    tagline: "Intelligent Bibliography Management",
    description:
      "Modern web application for research bibliography management with RAG-powered search and automated formatting.",
    icon: Database,
    tags: ["Next.js", "FastAPI", "RAG"],
    href: "/projects#hero-library",
  },
];

const pastProjects = [
  {
    id: "together-trial",
    name: "TOGETHER Trial",
    tagline: "Global Adaptive Platform Clinical Trial",
    description:
      "Executive Director of the TOGETHER Adaptive Platform Trial evaluating repurposed therapies for COVID-19. Recruited 12,000+ patients across 22 international sites, with findings published in The Lancet and NEJM.",
    icon: FlaskConical,
    tags: ["Clinical Trials", "Global Health", "Executive Leadership"],
    href: "/projects#together-trial",
  },
  {
    id: "rwanda-health-platform",
    name: "Rwanda Health Analytics Platform",
    tagline: "National Health Data Infrastructure",
    description:
      "Led development of Rwanda's national health analytics infrastructure, building systems for real-time health data analysis and evidence-based policy making.",
    icon: Globe,
    tags: ["Health Systems", "Data Infrastructure", "Rwanda"],
    href: "/projects#rwanda-health-platform",
  },
  {
    id: "purpose-africa",
    name: "Purpose Africa",
    tagline: "Research Capacity Building Initiative",
    description:
      "Co-founded initiative to strengthen health research capacity across Africa through training, mentorship, and collaborative research partnerships.",
    icon: Users,
    tags: ["Capacity Building", "Mentorship", "Africa"],
    href: "/projects#purpose-africa",
  },
  {
    id: "rwanda-biomedical-centre",
    name: "Rwanda Biomedical Centre",
    tagline: "Data Science Advisor, Ministry of Health",
    description:
      "Served as Data Science Advisor to the Rwanda Biomedical Centre within the Ministry of Health, providing technical guidance on health data systems and analytics.",
    icon: Building2,
    tags: ["Policy Advisory", "Data Science", "Government"],
    href: "/projects#rwanda-biomedical-centre",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-accent-50/50 via-white to-white">
      <div className="container">
        {/* Current Projects */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary-950">
              Current Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Building production-grade AI systems at the intersection of health,
              misinformation, and digital equity.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit group">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent-600/10 group-hover:from-primary/20 group-hover:to-accent-600/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  {project.badge && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {project.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-headline text-xl text-accent-950 mt-4">
                  {project.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {project.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-accent-950/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" size="sm" asChild className="w-fit -ml-2">
                  <Link
                    href={project.href}
                    className="flex items-center gap-1 text-primary"
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Projects */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary-950">
            Past Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Previous leadership roles in global health research, clinical trials, and health systems strengthening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-muted to-muted/50 group-hover:from-muted/80 group-hover:to-muted/30 transition-colors">
                    <project.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="font-headline text-xl text-accent-950 mt-4">
                  {project.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {project.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-accent-950/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
