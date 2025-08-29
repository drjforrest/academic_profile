import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Amina Osei",
    title: "Director, West African Health Institute",
    quote: "Dr. Forrest's expertise in network analysis was pivotal to our project's success. Their collaborative approach bridged gaps between our technical and clinical teams, leading to truly innovative outcomes.",
    avatar: "AO",
    avatarImage: "https://picsum.photos/100/100?q=1",
    aiHint: "professional woman"
  },
  {
    name: "Dr. Ben Carter",
    title: "Lead, Global Digital Health Fund",
    quote: "Working with Dr. Forrest brings a rare combination of deep technical understanding and on-the-ground programmatic insight. Their work is shaping how we think about digital capacity building.",
    avatar: "BC",
    avatarImage: "https://picsum.photos/100/100?q=2",
    aiHint: "professional man"
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight">
            From My Collaborators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I believe in building strong, equitable partnerships to drive impactful research.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <blockquote className="text-lg text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
