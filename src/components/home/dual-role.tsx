import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Beaker, Telescope } from "lucide-react";

export function DualRole() {
  return (
    <section>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight">
            A Dual Focus on Digital Innovation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My work approaches digital tools and AI from two distinct but complementary angles.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Telescope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">
                  When Digital Innovation <em>is</em> the Research
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base">
                Studying how digital tools, platforms, and AI are reshaping health, collaboration, and equity. This involves network analysis, policy evaluation, and understanding the dynamics of digital ecosystems.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Beaker className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">
                  When Digital Innovation <em>enables</em> the Research
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base">
                Applying cutting-edge digital methods and AI to analyze complex health problems. This includes leveraging machine learning, data visualization, and computational tools to uncover new insights from data.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
