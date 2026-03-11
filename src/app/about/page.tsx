import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Shield, Lightbulb } from "lucide-react";

const expertise = [
  "AI in Healthcare",
  "Misinformation Detection",
  "Digital Innovation",
  "Global Health",
  "Clinical Research Operations",
  "Network Analysis",
  "Capacity Building",
  "Cross-Continental Partnerships",
  "Health Equity",
  "Research Methods",
];

export default function AboutPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Avatar className="h-50 w-50 border-4 border-background shadow-lg">
                  <AvatarImage src="/images/jamie-forrest.png" alt="Dr. Jamie Forrest" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <h1 className="mt-6 font-headline text-3xl font-bold">
                  Dr. Jamie Forrest PhD, MPH
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Postdoctoral Fellow, University of British Columbia, Vancouver, BC, Canada
                </p>
                <div className="mt-4 flex flex-col gap-2 md:flex-row">
                  <a 
                    href="/master-academic-cv.md" 
                    download 
                    className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Download CV (Markdown)
                  </a>
                  <a 
                    href="/pdf/Forrest_JI_CV.pdf" 
                    download 
                    className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Download CV (PDF)
                  </a>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-semibold">
                  AI, Misinformation & Digital Equity in Health
                </h2>
                <h3 className="mt-2 text-lg font-medium text-primary">
                  Building multimodal AI systems to detect misinformation and advance health equity
                </h3>
                
                {/* Current Focus Card */}
                <Card className="mt-6 bg-gradient-to-br from-accent-50 to-primary-50 border-accent-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-accent-950 font-headline">
                      <Sparkles className="h-5 w-5 text-accent-600" />
                      Current Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">MedContext</p>
                        <p className="text-sm text-muted-foreground">
                          Counterforce AI's first deployed product. 91.4% accuracy in detecting medical misinformation 
                          (authentic images paired with false claims). Kaggle MedGemma Impact Challenge.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Counterforce AI</p>
                        <p className="text-sm text-muted-foreground">
                          Trust Defense as a Service (TDaaS) platform detecting and responding to 
                          AI-amplified threats against institutional trust in real-time. UBC Founder Venture.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="prose prose-lg mt-6 max-w-none text-muted-foreground dark:prose-invert">
                  <p>
                    My research examines how digital technologies can be deliberately designed, adapted, and governed to minimize health disparities and promote health equity. Leveraging strengths in global health partnerships for interdisciplinary inquiry, I investigate interconnected challenges that emerge when digital innovation disrupts conventional health research, methods, and practice norms.
                  </p>
                  <p>
                    My research is grounded in a commitment to equity and local agency, evolving from community-driven biomedical and socio-behavioural studies among gay and bisexual men to the pragmatic analysis of global health innovation and information systems. With foundational training in quantitative public health methods, I have consistently sought to center research questions around the lived realities and priorities of marginalized communities, ensuring that evidence not only meets scientific standards, but also meaningfully serves those it is intended to benefit. Years spent embedded with Rwanda's Ministry of Health, co-developing and scaling digital health information systems, provided deeper insights into the intersection of technology, data sovereignty, and sustainable innovation in resource-limited settings.
                  </p>
                  <p>
                    During the COVID-19 pandemic, I led global clinical research operations across 22 sites on three continents, generating actionable evidence for repurposed therapies at unprecedented speed. While these experiences brought into sharp focus the well-established tension between speed and methodological rigor, I also saw how the pressure for rapid results can, if unchecked, exacerbate inequities in research capacity and governance—especially in low- and middle-income contexts. My response has been to advance adaptive and pragmatic research methods that safeguard scientific integrity while intentionally promoting equity and amplifying local voices.
                  </p>
                  <p>
                    Currently, as a Postdoctoral Fellow at the University of British Columbia, my work examines how the adoption of artificial intelligence, the spread of digital misinformation, and shifting models of governance are reshaping public health emergency response on a global scale. Looking ahead, my aim is to unite ecosystem-level analyses with practical implementation tools for policymakers and practitioners—helping to operationalize resilient, equitable, and locally driven health systems in the face of accelerating digital transformation.
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
                  <Badge key={skill} variant="outline" className="px-4 py-2 text-md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
