import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="font-headline text-2xl font-bold">
              Dr Jamie I Forrest PhD, MPH
            </Link>
            <p className="text-muted-foreground">
              Technology, Adaptation, and Equity in Global Health Research and Practice
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Navigation</h4>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Legal</h4>
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Accessibility
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex items-center gap-2">          
                <Button variant="ghost" size="icon" asChild>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={SOCIAL_LINKS.orcid} target="_blank" rel="noreferrer">
                    <Icons.orcid className="h-5 w-5" />
                    <span className="sr-only">ORCID</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Forrest Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
