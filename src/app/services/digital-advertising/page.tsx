import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Megaphone, Target, TrendingUp, BarChart3, DollarSign, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Digital Advertising Services | Beach Bird Studios",
    description: "Get qualified leads with targeted ad campaigns. Maximize your advertising ROI across Google Ads, Facebook, Instagram, and LinkedIn. PPC management and optimization.",
    openGraph: {
        title: "Digital Advertising Services | Beach Bird Studios",
        description: "Get qualified leads with targeted ad campaigns. Maximize your advertising ROI across Google and Social channels.",
    },
}

const process = [
    {
        step: "01",
        title: "Audience Research",
        description: "Deep dive into your target audience, competitors, and market to identify the most profitable advertising opportunities.",
        icon: Users,
    },
    {
        step: "02",
        title: "Campaign Strategy",
        description: "Develop a multi-channel advertising strategy with clear KPIs, budget allocation, and creative direction.",
        icon: Target,
    },
    {
        step: "03",
        title: "Launch & Optimize",
        description: "Create ads, set up tracking, launch campaigns, and continuously optimize based on performance data.",
        icon: TrendingUp,
    },
    {
        step: "04",
        title: "Report & Scale",
        description: "Provide detailed performance reports and scale winning campaigns while cutting underperformers.",
        icon: BarChart3,
    },
]

const platforms = [
    {
        name: "Google Ads",
        description: "Search, Display, Shopping, and YouTube ads to capture high-intent customers.",
        icon: Target,
    },
    {
        name: "Facebook & Instagram",
        description: "Social media advertising to build brand awareness and drive conversions.",
        icon: Users,
    },
    {
        name: "LinkedIn Ads",
        description: "B2B advertising to reach decision-makers and generate qualified leads.",
        icon: Megaphone,
    },
]

const deliverables = [
    "Comprehensive audience research",
    "Campaign strategy and planning",
    "Ad creative development (copy and design)",
    "Landing page optimization",
    "Conversion tracking setup",
    "A/B testing and optimization",
    "Budget management and allocation",
    "Weekly performance monitoring",
    "Monthly detailed reports",
    "Competitor analysis",
    "Remarketing campaigns",
    "Ongoing optimization and support",
]

const faqs = [
    {
        question: "How much should I spend on advertising?",
        answer: "We typically recommend starting with $2,000-$5,000/month in ad spend to gather meaningful data. The ideal budget depends on your industry, competition, and goals. We'll help determine the right budget during our consultation.",
    },
    {
        question: "How quickly will I see results?",
        answer: "You'll start seeing traffic and leads within the first week of launching campaigns. However, it takes 2-3 months to fully optimize campaigns and achieve peak performance as we gather data and refine targeting.",
    },
    {
        question: "What's the difference between your fee and ad spend?",
        answer: "Ad spend is the budget that goes directly to the advertising platforms (Google, Facebook, etc.). Our management fee covers strategy, campaign setup, creative development, optimization, and reporting.",
    },
    {
        question: "Do you create the ad creatives?",
        answer: "Yes! We handle all ad copywriting and can create static image ads. For video ads or complex graphics, we can coordinate with your existing creative team or recommend partners.",
    },
    {
        question: "How do you measure success?",
        answer: "We track metrics that matter to your business: cost per lead, cost per acquisition, return on ad spend (ROAS), conversion rate, and overall ROI. Every campaign has clear KPIs aligned with your business goals.",
    },
    {
        question: "Can you work with my existing campaigns?",
        answer: "Absolutely. We can audit and optimize your existing campaigns or start fresh. Many clients see immediate improvements when we take over underperforming campaigns.",
    },
]

export default function DigitalAdvertisingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Megaphone className="h-4 w-4" />
                                Digital Advertising
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Maximize ROI with Data-Driven Ads
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Stop wasting ad spend on campaigns that don't convert. Our data-driven approach to digital advertising maximizes your ROI across Google, Meta, and other platforms.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/contact">
                                        Schedule Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/contact">Get Ad Account Audit</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
                                Why Invest in Digital Advertising
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Reach Your Ideal Customers</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Target specific demographics, interests, and behaviors to reach people most likely to buy from you.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <DollarSign className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Measurable ROI</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Track every dollar spent and see exactly how your ads contribute to revenue and business growth.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <TrendingUp className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Scale Quickly</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Unlike organic strategies, paid ads deliver immediate results and can scale as your business grows.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platforms */}
                <section className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Advertising Platforms We Manage
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Multi-channel campaigns to reach your audience wherever they are
                                </p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-3">
                                {platforms.map((platform, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                                <platform.icon className="h-6 w-6" />
                                            </div>
                                            <CardTitle>{platform.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{platform.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="process" className="py-20">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Our Advertising Process
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Data-driven approach to maximize your advertising ROI
                                </p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {process.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                                <item.icon className="h-8 w-8" />
                                            </div>
                                            <div className="text-sm font-bold text-primary mb-2">{item.step}</div>
                                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom Quote Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Custom Campaign Strategy & Pricing
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Every advertising campaign is unique. We create custom Statement of Work (SOW) and offer stacks based on your budget, goals, target audience, and competitive landscape.
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Schedule a free consultation to discuss your advertising goals and receive a customized proposal with transparent pricing, ad spend recommendations, and expected ROI.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Custom Proposal</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
                                Frequently Asked Questions
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Ready to Scale Your Business with Ads?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Get a free audit of your current advertising or discuss a new campaign strategy.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Schedule Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
