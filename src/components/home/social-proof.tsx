import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Placeholder for now since Avatar isn't installed, using simple div
function UserAvatar({ initials }: { initials: string }) {
    return (
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            {initials}
        </div>
    )
}

const testimonials = [
    {
        quote: "Beach Bird Studios completely transformed our online lead generation. Within 3 months of launching the new site, our conversion rate doubled. They actually understand business, not just code.",
        author: "COO",
        role: "Preclinical Research Organization",
        initials: "PR",
    },
    {
        quote: "The speed of delivery was impressive. We needed a landing page for a campaign launching in two weeks, and they delivered a polished product with days to spare. Highly recommended.",
        author: "Owner",
        role: "Transportation Company",
        initials: "TC",
    },
]

export function SocialProof() {
    return (
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted By Businesses Like Yours</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We&apos;ve helped over 50 companies scale their digital presence.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-none shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 150}ms` }}>
                            <CardContent className="pt-6">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-lg mb-6 leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <UserAvatar initials={testimonial.initials} />
                                    <div>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
