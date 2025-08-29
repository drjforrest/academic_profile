import Image from "next/image";

export function NetworkViz() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://picsum.photos/800/600"
                alt="Network visualization of global research collaboration"
                fill
                className="object-cover"
                data-ai-hint="network visualization data flow"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              How do digital tools change global research collaboration?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Using network analysis and data visualization, I map and analyze the flows of knowledge, funding, and partnership in the digital age. These visualizations help identify key actors, uncover hidden structures, and inform strategies for more equitable and effective collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
