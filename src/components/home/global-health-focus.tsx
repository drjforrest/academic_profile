import Image from "next/image";

export function GlobalHealthFocus() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/earth-1.PNG"
                  alt="Global health technology network visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/earth-2.PNG"
                  alt="Technology embedded futuristic earth from space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-5xl text-primary-950 font-bold tracking-tight">
              Global Health Leadership
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A global health researcher and strategy leader with a particular
              interest in health technology innovation.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Current Focus
                </h3>
                <p className="text-muted-foreground">
                  I am currently a Postdoctoral Research Fellow investigating
                  digital misinformation, AI governance, and information
                  integrity at UBC's Health Emergencies and Resiliency in
                  Outbreaks (HERO) Lab in the School of Nursing, Faculty of
                  Applied Science working with Dr. Meaghan Thumath.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Past Professional Experience Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-100 border-l-4 border-l-primary-600 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-base text-foreground">
                        Chief Partnerships Officer, Platform Life Sciences
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Executive Director of the TOGETHER Trial Consortium
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-100 border-l-4 border-l-accent-600 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-accent-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-base text-foreground">
                        Managing Director, MTEK Sciences East Africa
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Advisor to Ministry of Health of Rwanda, Data Science
                        for Decision-making
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-100 border-l-4 border-l-jungle-600 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-jungle-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-base text-foreground">
                        Research & Strategy Lead, Purpose Africa
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Developing pan-African clinical research capacity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-100 border-l-4 border-l-eggplant-600 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-eggplant-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-base text-foreground">
                        Scientific Director
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        African AI Innovation Ecosystem Research Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
