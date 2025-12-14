import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Shield, Database, FlaskConical, Globe, Users, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Dr Jamie Forrest",
  description: "Current and past projects in AI, misinformation detection, clinical trials, and global health research.",
};

const projects = [
  {
    id: "medcontext",
    name: "MedContext",
    tagline: "Agentic AI for Medical Misinformation Detection",
    description:
      "A multimodal AI system designed to detect health misinformation by jointly analyzing images and text. Submitted to the Kaggle MedGemma Impact Challenge, MedContext achieves high accuracy by evaluating contextual authenticity rather than content alone.",
    icon: Sparkles,
    tags: ["AI/ML", "Health Misinformation", "Kaggle", "Multimodal"],
    links: [
      { label: "Kaggle Submission", href: "https://kaggle.com", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/drjforrest/medcontext", icon: Github },
    ],
    featured: true,
  },
  {
    id: "counterforce",
    name: "Counterforce AI",
    tagline: "Early-Stage Misinformation Detection & Reputation Management",
    description:
      "Co-founded with Megan, Counterforce AI helps organizations identify and mitigate digital misinformation early. We combine modern AI/ML tools with strategic communications to protect client reputation in an era of information volatility.",
    icon: Shield,
    tags: ["Startup", "AI/ML", "SaaS", "Reputation Management"],
    links: [{ label: "counterforce.tech", href: "https://counterforce.tech", icon: ExternalLink }],
    badge: "UBC Founder Venture",
    featured: false,
  },
  {
    id: "hero-library",
    name: "HERO Evidence Library",
    tagline: "Intelligent Bibliography Management System",
    description:
      "A modern web application for managing research bibliographies with automated metadata extraction, RAG-powered search, and seamless reference formatting. Built for the HERO Lab to accelerate evidence synthesis.",
    icon: Database,
    tags: ["Next.js", "FastAPI", "PostgreSQL", "RAG"],
    links: [
      { label: "Live Demo", href: "#", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/drjforrest/hero-library", icon: Github },
    ],
    featured: true,
  },
];

const pastProjects = [
  {
    id: "together-trial",
    name: "TOGETHER Trial",
    tagline: "Global Adaptive Platform Clinical Trial",
    description:
      "Executive Director of the TOGETHER Adaptive Platform Trial evaluating repurposed therapies for COVID-19. Led recruitment of 12,000+ patients across 22 international collaborating sites, with findings published in The Lancet and New England Journal of Medicine.",
    icon: FlaskConical,
    tags: ["Clinical Trials", "Global Health", "Executive Leadership", "COVID-19"],
    period: "2020-2023",
  },
  {
    id: "rwanda-health-platform",
    name: "Rwanda Health Analytics Platform",
    tagline: "National Health Data Infrastructure",
    description:
      "Led development of Rwanda's national health analytics infrastructure, building systems for real-time health data analysis and evidence-based policy making. Established data pipelines, analytics frameworks, and visualization dashboards for national health programs.",
    icon: Globe,
    tags: ["Health Systems", "Data Infrastructure", "Rwanda", "Policy"],
    period: "2018-2020",
  },
  {
    id: "purpose-africa",
    name: "Purpose Africa",
    tagline: "Research Capacity Building Initiative",
    description:
      "Co-founded initiative to strengthen health research capacity across Africa through training, mentorship, and collaborative research partnerships. Developed programs in research methodology, data analysis, and scientific writing for early-career researchers.",
    icon: Users,
    tags: ["Capacity Building", "Mentorship", "Africa", "Education"],
    period: "2016-2019",
  },
  {
    id: "rwanda-biomedical-centre",
    name: "Rwanda Biomedical Centre",
    tagline: "Data Science Advisor, Ministry of Health",
    description:
      "Served as Data Science Advisor to the Rwanda Biomedical Centre within the Ministry of Health, providing technical guidance on health data systems, analytics strategy, and evidence-based decision making for national health programs.",
    icon: Building2,
    tags: ["Policy Advisory", "Data Science", "Government", "Rwanda"],
    period: "2018-2020",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary-950">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Building tools at the intersection of AI, health, and information integrity.
          From research prototypes to production systems, clinical trials to health systems strengthening.
        </p>
      </div>

      {/* Current Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-headline text-primary-950 mb-6">Current Projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`flex flex-col hover:shadow-xl transition-all duration-300 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent-600/20">
                    <project.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl text-accent-950">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                {project.badge && (
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {project.badge}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="text-base leading-relaxed mb-6">
                {project.description}
              </CardDescription>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-accent-950/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    variant={link.label.includes("GitHub") ? "outline" : "default"}
                    size="sm"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Past Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-headline text-primary-950 mb-2">Past Projects</h2>
        <p className="text-muted-foreground">
          Previous leadership roles in global health research, clinical trials, and health systems strengthening.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pastProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50">
                    <project.icon className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl text-accent-950">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                {project.period && (
                  <Badge
                    variant="outline"
                    className="text-xs border-accent-950/20"
                  >
                    {project.period}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="text-base leading-relaxed mb-6">
                {project.description}
              </CardDescription>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-accent-950/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Interested in collaborating on AI and health research?
        </p>
        <Button asChild size="lg">
          <a href="/contact">Get in Touch</a>
        </Button>
      </div>
    </div>
  );
}
