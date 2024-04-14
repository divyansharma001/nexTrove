"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Headwear",
    href: "/docs/primitives/alert-dialog",
    description:
      "Hats & Caps, Snapbacks, Trucker Hats etc...",
  },
  {
    title: "Limited Edition Drops",
    href: "/docs/primitives/hover-card",
    description:
      "Legacy Collection, MTV x UM Collaboration",
  },
  {
    title: "Clothing",
    href: "/docs/primitives/progress",
    description:
      "Bottoms, Tops, Outerwear, Casual Dresses etc..",
  },
  {
    title: "Jewelry",
    href: "/docs/primitives/scroll-area",
    description: "Necklaces, Bracelets, Earrings etc.",
  },
  {
    "title": "Footwear",
    "href": "/footwear",
    "description": "Shoes, Sneakers, Boots, Sandals"
  },
  {
    "title": "Accessories",
    "href": "/accessories",
    "description": "Belts, Scarves, Hats, Gloves"
  },
  {
    "title": "Activewear",
    "href": "/activewear",
    "description": "Workout Clothes, Yoga Pants, Athletic Shorts"
  },
  {
    "title": "Formal Wear",
    "href": "/formalwear",
    "description": "Suits, Tuxedos, Dresses"
  },
  {
    "title": "Undergarments",
    "href": "/undergarments",
    "description": "Underwear, Bras, Socks"
  },
  {
    "title": "Swimwear",
    "href": "/swimwear",
    "description": "Swimsuits, Swim Trunks, Cover-Ups"
  }
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
  )
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
  )
})
ListItem.displayName = "ListItem"
