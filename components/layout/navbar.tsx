"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/site";
import { megaMenu } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "glass border-border shadow-lg shadow-black/5"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex items-center gap-1 pl-2">
          <Logo />
        </div>

        <nav className="hidden md:block" aria-label="Primary">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) =>
                item.hasMenu ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[34rem] grid-cols-2 gap-1 p-3">
                        {megaMenu.map((group) => (
                          <div key={group.label} className="p-2">
                            <p className="px-3 pb-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                              {group.label}
                            </p>
                            <ul className="flex flex-col gap-1">
                              {group.items.map((menuItem) => (
                                <li key={menuItem.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={menuItem.href}
                                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2"
                                    >
                                      <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-primary">
                                        <menuItem.icon className="size-4" />
                                      </span>
                                      <span className="flex flex-col">
                                        <span className="text-sm font-medium text-foreground">
                                          {menuItem.label}
                                        </span>
                                        <span className="text-xs leading-snug text-muted">
                                          {menuItem.description}
                                        </span>
                                      </span>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted",
                        )}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/contact">
              Get started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
