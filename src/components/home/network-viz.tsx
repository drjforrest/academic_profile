import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function NetworkViz() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/earth-2.PNG"
                alt="Global health researcher working across continents"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              Global Health Leadership Across Continents
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A global health researcher and strategy leader advancing
              technology and equity in health emergency response across Africa,
              North America, and beyond. My work bridges research, policy, and
              practice to build resilient health systems.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Current Focus
                </h3>
                <p className="text-muted-foreground">
                  Postdoctoral Research Fellow investigating digital
                  misinformation, AI governance, and information integrity at
                  UBC's Health Emergencies and Resiliency in Outbreaks (HERO)
                  Lab.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Experience Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Chief Partnerships Officer</Badge>
                  <Badge variant="secondary">
                    Managing Director East Africa
                  </Badge>
                  <Badge variant="secondary">$10M+ Research Funding</Badge>
                  <Badge variant="secondary">62 Publications</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
