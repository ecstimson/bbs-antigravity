import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32 lg:py-40">
            <div className="container relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
                    Now Accepting New Projects for 2025
                </div>

                <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                    Websites That Work <br className="hidden md:block" />
                    <span className="text-primary">As Hard As You Do</span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-backwards">
                    Our team of creative experts delivers stunning, high-quality designs tailored to your needs, ensuring your brand stands out in a crowded market.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                        <Link href="#process">
                            See Our Process
                            <PlayCircle className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/contact">
                            Start Your Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground opacity-80 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Based in North Carolina
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Fast, Reliable Delivery
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Payment Plans Available
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-0 dark:opacity-20"></div>
            <div className="absolute top-0 -z-10 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:hidden"></div>
        </section>
    )
}
