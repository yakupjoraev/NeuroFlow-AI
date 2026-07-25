"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export function DesktopNav() {
  const pathname = usePathname();

  return (
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
                        <p className="label-mono px-3 pb-2 text-muted">
                          {group.label}
                        </p>
                        <ul className="flex flex-col gap-1">
                          {group.items.map((menuItem) => (
                            <li key={menuItem.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={menuItem.href}
                                  className="group flex items-start gap-3 p-3 transition-colors hover:bg-surface-2"
                                >
                                  <menuItem.icon
                                    weight="light"
                                    className="mt-0.5 size-5 shrink-0 text-primary"
                                    aria-hidden
                                  />
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
                      "inline-flex h-9 items-center px-3 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      pathname === item.href ? "text-foreground" : "text-muted",
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
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
  );
}
