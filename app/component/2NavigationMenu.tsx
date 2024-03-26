"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Matchmarking",
    href: "/docs/primitives/alert-dialog",
    description: "",
  },
  {
    title: "Marrige",
    href: "/docs/primitives/hover-card",
    description: "",
  },
  {
    title: "Zodiac Signs",
    href: "/docs/primitives/progress",
    description: "",
  },
  {
    title: "Baby Names",
    href: "/docs/primitives/scroll-area",
    description: "",
  },
  {
    title: "Planet",
    href: "/docs/primitives/tabs",
    description: "",
  },
  {
    title: "Palm Reading",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Vastu",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Remedies",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Chinese Astrology",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Spirituality",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Festival",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Vedic Astrology",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Astrologi Mobile Apps",
    href: "/docs/primitives/tooltip",
    description: "",
  },
  {
    title: "Videos",
    href: "/docs/primitives/tooltip",
    description: "",
  },
];

export function NavigationMenuDemo2() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" font-normal">
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 grid-cols-2 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
