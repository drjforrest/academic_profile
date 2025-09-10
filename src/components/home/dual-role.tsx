import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Lightbulb, Users, Shield, Globe } from "lucide-react";

export function DualRole() {
  return (
    <section>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight">
            Research Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ensuring digital transformation minimizes—not widens—global health
            disparities through equitable research ecosystems grounded in data
            sovereignty, rapid evidence generation, and local agency.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  AI Governance & Health Equity
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Advancing practices and protections so artificial intelligence
                drives equitable health outcomes—especially in emergencies.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  Digital Health Systems
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Integrating technology in resource-limited contexts with a focus
                on sustainability and community ownership.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  Resilient Clinical Research
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Designing adaptive methods and partnerships to accelerate
                rigorous evidence when it matters most.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  Community-Centred Implementation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Using participatory, iterative methods to authentically engage
                and empower communities in health innovation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  Information Integrity
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Studying the impacts of digital misinformation on public health
                trust, especially for marginalized groups.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">
                  Technology Equity & Data Sovereignty
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                Analyzing global power, access, and control in digital health,
                to center local voices and priorities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
