"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-950/20 bg-gradient-to-r from-white/95 via-accent-50/95 to-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 text-slate-800 shadow-sm">
      <div className="container flex h-18 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2 group">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent-600 group-hover:scale-125 transition-transform duration-300"></div>
            <span className="font-bold sm:inline-block font-headline text-xl bg-gradient-to-r from-slate-800 to-accent-800 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent-600 transition-all duration-300">
              Dr Jamie Forrest PhD, MPH
            </span>
          </Link>
          <nav className="flex items-center gap-8 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-medium transition-all duration-300 hover:text-primary hover:scale-105 px-2 py-1 rounded-md",
                  pathname === link.href
                    ? "text-primary bg-accent-950/10 shadow-sm"
                    : "text-foreground/70 hover:bg-accent-950/5",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent-600 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="font-bold font-headline text-base bg-gradient-to-r from-slate-800 to-accent-800 bg-clip-text text-transparent">
                Dr Jamie Forrest
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border border-accent-950/20 bg-accent-950/5 hover:bg-accent-950/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gradient-to-b from-white via-accent-50/50 to-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b border-accent-950/20 pb-4">
                    <Link href="/" className="flex items-center space-x-2 group">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent-600 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="font-bold font-headline text-lg bg-gradient-to-r from-slate-800 to-accent-800 bg-clip-text text-transparent">
                        Dr Jamie Forrest PhD, MPH
                      </span>
                    </Link>
                  </div>
                  <nav className="flex-1 mt-6 grid gap-2">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-lg font-medium transition-all duration-300 px-4 py-3 rounded-lg relative",
                            pathname === link.href
                              ? "text-primary bg-accent-950/10 shadow-sm"
                              : "text-foreground/70 hover:text-primary hover:bg-accent-950/5",
                          )}
                        >
                          {link.label}
                          {pathname === link.href && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent-600 rounded-r-full"></div>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
