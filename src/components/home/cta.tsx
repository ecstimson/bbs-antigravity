import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
    return (
        <section className="py-20 md:py-32">
            <div className="container text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let&apos;s build something great together. Schedule a free consultation to discuss your project goals.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Button size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="/contact">
                                <Calendar className="mr-2 h-5 w-5" />
                                Schedule Consultation
                            </Link>
                        </Button>
                        <p className="text-muted-foreground">
                            Or email us at <a href="mailto:hello@beachbirdstudios.com" className="text-primary hover:underline">hello@beachbirdstudios.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted/50 to-background"></div>
        </section>
    )
}
