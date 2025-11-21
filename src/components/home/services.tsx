import {
    LayoutDashboard,
    Search,
    Megaphone,
    ArrowRight
} from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const services = [
    {
        title: "SEO & Strategy",
        description: "Dominate local search results with comprehensive keyword research, technical SEO, and data-driven content strategy.",
        icon: Search,
        href: "/services/seo-strategy",
        bullets: [
            "Keyword & Comp Analysis",
            "Technical SEO Audits",
            "Local SEO Optimization",
            "Content Strategy"
        ]
    },
    {
        title: "Web Design & Dev",
        description: "Custom websites built for speed and conversion. From sleek marketing sites to enterprise-level full-stack applications.",
        icon: LayoutDashboard,
        href: "/services/web-design-dev",
        bullets: [
            "Mobile-First Design",
            "Sub-2s Load Times",
            "Conversion Focused",
            "CMS Integration"
        ]
    },
    {
        title: "Digital Advertising",
        description: "Get qualified leads with targeted ad campaigns. We maximize your advertising ROI across Google and Social channels.",
        icon: Megaphone,
        href: "/services/digital-advertising",
        bullets: [
            "PPC Management",
            "Video Ad Funnels",
            "Landing Page Ops",
            "Performance Tracking"
        ]
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Expertise That Deliver Results</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We don&apos;t just make things look pretty. We build digital engines that drive growth for your business.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={service.title} className="border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-8 flex-1">
                                    {service.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-center text-sm text-muted-foreground">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={service.href} className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto">
                                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
