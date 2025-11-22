"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-8 w-auto">
                        {/* Placeholder for logo icon if needed, or just use the full SVG */}
                        <Image src="/logos/full-logo.svg" alt="Beach Bird Studios" width={150} height={40} className="h-8 w-auto" />
                    </div>

                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-auto py-0">Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services/seo-strategy"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">SEO & Strategy</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Build topical authority and dominate search results
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services/web-design-dev"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">Web Design & Development</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Custom websites that convert visitors into customers
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services/digital-advertising"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">Digital Advertising</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Data-driven ad campaigns that maximize ROI
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">View All Services →</div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="mr-2"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <Button variant="ghost" asChild className="mr-2">
                        <Link href="/dashboard">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/contact">Start Project</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                                <SheetClose asChild>
                                    <Link href="/services/seo-strategy" className="text-base font-medium pl-4">
                                        SEO & Strategy
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/services/web-design-dev" className="text-base font-medium pl-4">
                                        Web Design & Dev
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/services/digital-advertising" className="text-base font-medium pl-4">
                                        Digital Advertising
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/services" className="text-base font-medium pl-4">
                                        View All Services →
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Button variant="ghost" className="w-full mt-4" asChild>
                                        <Link href="/dashboard">Login</Link>
                                    </Button>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Start Project</Link>
                                    </Button>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    )
}
