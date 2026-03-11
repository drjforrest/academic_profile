import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Shield, FlaskConical, Globe, Users, Building2, GraduationCap, Lightbulb, BarChart2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Dr Jamie Forrest",
  description: "Current and past projects in AI, misinformation detection, clinical trials, and global health research.",
};

const projects = [
  {
    id: "hero-lab",
    name: "HERO",
    tagline: "Health Equity & Resilience Observatory | Scientific Director",
    description:
      "The Health Equity & Resilience Observatory (HERO) at UBC is dedicated to equity, trust, and resilience in crisis response. In times of crisis—from pandemics to climate emergencies—misinformation undermines trust in science and exacerbates health inequities. HERO brings together frontline clinical expertise, cutting-edge AI, and global health leadership to transform evidence into action. As Scientific Director, I integrate crisis informatics and data science to create next-generation intelligence for resilience. Research pillars: Trust & Crisis Intelligence (AI tools to detect and counter misinformation); Resilient & Equitable Health Systems; Equity-Driven Interventions. HERO innovations seed Counterforce AI—a unique pipeline from evidence to observatory insights to actionable systems deployed at scale.",
    icon: GraduationCap,
    tags: ["Trust & Crisis Intelligence", "Equity", "Resilience", "UBC"],
    links: [{ label: "nursing.herolab.ubc.ca", href: "https://nursing.herolab.ubc.ca", icon: ExternalLink }],
  },
  {
    id: "counterforce",
    name: "Counterforce AI",
    tagline: "Trust Defense as a Service (TDaaS)",
    description:
      "Counterforce AI is a Trust Defense as a Service (TDaaS) platform designed to detect, map, and respond to AI-amplified threats against institutional trust in real-time. It represents a structural counter-industry response to the commercialized ecosystem of disinformation. Trust in critical institutions—health systems, defense agencies, and emergency responders—is under systematic attack; generative AI has removed cost and skill barriers to industrialized misinformation campaigns. Traditional detection tools are retrospective; Counterforce addresses what to do before damage occurs. Three pillars: SEE (real-time multimodal detection—MedContext deployed at 91.4% accuracy for medical misinformation); MAP (graph neural network analysis of narrative spread, in development); ACT (operational response including pre-bunking and counter-messaging, in development).",
    icon: Shield,
    tags: ["TDaaS", "Trust Defense", "Real-time Detection"],
    links: [{ label: "counterforce.tech", href: "https://counterforce.tech", icon: ExternalLink }],
    badge: "UBC Founder Venture",
  },
  {
    id: "boreal-labs",
    name: "Boreal Labs",
    tagline: "Founder & Principal Scientist",
    description:
      "Private consulting, strategic guidance, and investment in global health, technology, and AI readiness.",
    icon: Lightbulb,
    tags: ["Consulting", "Strategic Advisory", "Investment"],
    links: [{ label: "boreal-labs.com", href: "https://boreal-labs.com", icon: ExternalLink }],
  },
  {
    id: "medcontext",
    name: "MedContext",
    tagline: "Counterforce AI's first deployed product",
    description:
      "Multimodal detection across open and social sources, achieving 91.4% accuracy in detecting medical misinformation—particularly authentic images paired with false claims. Evaluates contextual authenticity rather than content alone. Submitted to the Kaggle MedGemma Impact Challenge. Powers the SEE (real-time detection) pillar of the Counterforce AI platform.",
    icon: Sparkles,
    tags: ["AI/ML", "Health Misinformation", "Kaggle", "Multimodal"],
    links: [
      { label: "Kaggle Submission", href: "https://kaggle.com", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/drjforrest/medcontext", icon: Github },
    ],
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
    id: "cytel",
    name: "Cytel Canada Health",
    tagline: "Director of Global Health Strategy",
    description:
      "Developed web-based decision-support and data visualization tools for policymakers to model COVID-19 impacts and track global clinical trial progress. Delivered successful projects for the Bill & Melinda Gates Foundation, UNICEF, and Health Data Research UK.",
    icon: BarChart2,
    tags: ["Data Visualization", "Decision Support", "Policy", "COVID-19"],
    period: "2020-2021",
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
      "Provided direct scientific and data analytic support to the Rwanda Biomedical Centre (Division of HIV, STIs and Viral Hepatitis), including surveillance indicator configuration, data quality management, and routine reporting workflows. Supported national health systems including the Rwanda Health Analytics Platform (RHAP) and DHIS2-based surveillance.",
    icon: Building2,
    tags: ["Policy Advisory", "Data Science", "Government", "Rwanda"],
    period: "2017-2019",
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
          From research leadership and health systems to AI ventures and digital tools.
          Spanning surveillance, clinical trials, capacity building, and misinformation detection.
        </p>
      </div>

      {/* Current Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-headline text-primary-950 mb-6">Current Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-20">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            className="flex flex-col hover:shadow-xl transition-all duration-300 scroll-mt-24"
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
              {project.links.length > 0 && (
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
              )}
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
            id={project.id}
            className="flex flex-col hover:shadow-lg transition-all duration-300 scroll-mt-24"
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
