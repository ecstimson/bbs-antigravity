import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Megaphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | Beach Bird Studios",
    description: "Comprehensive digital marketing services including SEO & Strategy, Web Design & Development, and Digital Advertising. Custom solutions for growing businesses.",
    openGraph: {
        title: "Our Services | Beach Bird Studios",
        description: "Comprehensive digital marketing services including SEO & Strategy, Web Design & Development, and Digital Advertising.",
    },
}

const services = [
    {
        icon: Search,
        title: "SEO & Strategy",
        description: "Build topical authority and dominate search results in your niche.",
        features: [
            "Content silos & topical relevance",
            "Technical SEO & speed optimization",
            "Search Console error resolution",
            "On-page optimization & link strategy",
        ],
        href: "/services/seo-strategy",
    },
    {
        icon: Code,
        title: "Web Design & Development",
        description: "Custom websites and web applications that convert visitors into customers.",
        features: [
            "Custom design & development",
            "Mobile-responsive layouts",
            "CMS integration",
            "Performance optimization",
        ],
        href: "/services/web-design-dev",
    },
    {
        icon: Megaphone,
        title: "Digital Advertising",
        description: "Data-driven ad campaigns that maximize ROI across multiple platforms.",
        features: [
            "Google Ads & Meta Ads",
            "Campaign strategy & management",
            "A/B testing & optimization",
            "Detailed analytics & reporting",
        ],
        href: "/services/digital-advertising",
    },
]

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Our Services
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Comprehensive digital marketing solutions designed to help your business grow online. From SEO to web development to paid advertising, we've got you covered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {services.map((service, index) => (
                                    <Card key={index} className="flex flex-col">
                                        <CardHeader>
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                                <service.icon className="h-6 w-6" />
                                            </div>
                                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                                            <CardDescription className="text-base">
                                                {service.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col">
                                            <ul className="space-y-2 mb-6 flex-1">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                                        <span className="mr-2">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button asChild className="w-full">
                                                <Link href={service.href}>
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Not Sure Which Service You Need?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Schedule a free consultation and we'll help you determine the best strategy for your business goals.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Schedule Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
