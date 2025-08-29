import { ContactForm } from "@/components/contact-form";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Icons } from "@/components/icons";
import { SOCIAL_LINKS } from "@/lib/constants";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: "j.forrest@email.com",
    href: "mailto:j.forrest@email.com",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-primary" />,
    text: "LinkedIn Profile",
    href: SOCIAL_LINKS.linkedin,
  },
  {
    icon: <Twitter className="h-6 w-6 text-primary" />,
    text: "Twitter / X",
    href: SOCIAL_LINKS.twitter,
  },
  {
    icon: <Icons.orcid className="h-6 w-6 text-primary" />,
    text: "ORCID Profile",
    href: SOCIAL_LINKS.orcid,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Contact & Collaborate
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            I am always open to new ideas, partnerships, and conversations.
            Whether you are a researcher, a potential funder, a student, or
            from the press, I look forward to hearing from you.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Use the form to send me a message directly, or connect with me
                through the channels below.
              </p>
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.text}
                    href={detail.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      {detail.icon}
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {detail.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
