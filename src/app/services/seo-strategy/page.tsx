import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, TrendingUp, FileText, BarChart3, Target, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO & Strategy Services | Beach Bird Studios",
    description: "Dominate local search results with comprehensive keyword research, technical SEO, and data-driven content strategy. Get more organic traffic and qualified leads.",
    openGraph: {
        title: "SEO & Strategy Services | Beach Bird Studios",
        description: "Dominate local search results with comprehensive keyword research, technical SEO, and data-driven content strategy.",
    },
}

const process = [
    {
        step: "01",
        title: "Technical SEO & Speed Optimization",
        description: "Fix page load speed, crawl errors using Screaming Frog and other tools, and resolve technical issues impacting performance.",
        icon: Search,
    },
    {
        step: "02",
        title: "Search Console & Error Resolution",
        description: "Fix errors in Google Search Console, resolve indexing issues, and ensure search engines can properly crawl your site.",
        icon: Target,
    },
    {
        step: "03",
        title: "Content Silos & Topical Relevance",
        description: "Build strategic content silos to establish topical authority and signal to search engines you're the expert in your niche.",
        icon: FileText,
    },
    {
        step: "04",
        title: "On-Page Optimization & Link Strategy",
        description: "Optimize page structure, improve copy quality, and build strong outbound/inbound link profiles to boost authority.",
        icon: TrendingUp,
    },
]

const faqs = [
    {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. You'll typically start seeing improvements in 3-6 months, with significant results in 6-12 months. However, technical fixes can show faster results.",
    },
    {
        question: "Do you guarantee first page rankings?",
        answer: "No reputable SEO agency can guarantee specific rankings, as search algorithms are constantly changing. We focus on sustainable, white-hat strategies that improve your overall visibility and organic traffic.",
    },
    {
        question: "How does good SEO help me get found in AI tools like ChatGPT and other LLMs?",
        answer: "Great question! LLMs are trained on web content, so strong topical authority and well-structured content make you more likely to be cited by AI tools. The same principles that help you rank in Google—quality content, clear structure, authoritative links—also help LLMs recognize you as a trusted source in your niche.",
    },
    {
        question: "What's included in the performance dashboard?",
        answer: "Your dashboard includes keyword rankings, organic traffic trends, top-performing pages, conversion data, technical issues found and fixed, and actionable recommendations.",
    },
    {
        question: "Can you help with content creation?",
        answer: "Yes! We provide content strategy and can either create content for you or guide your team with detailed briefs, keyword targets, and optimization recommendations.",
    },
]

export default function SEOStrategyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Search className="h-4 w-4" />
                                SEO & Strategy
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Build Topical Authority & Get Found
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Don't let your competitors steal your online traffic. Our strategic SEO builds topical relevance that positions you as the authority in your niche and drives qualified visitors to your site.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/contact">
                                        Schedule Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/contact">Free SEO Analysis</Link>
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
                                Why SEO Matters for Niche Businesses
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <TrendingUp className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Increase Qualified Traffic</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Attract visitors who are actively searching for your specific expertise, products, or services.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Establish Topical Authority</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Build content silos that signal to search engines you're the expert in your niche.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <BarChart3 className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Measurable ROI</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Track rankings, traffic, and conversions with detailed analytics and performance dashboards.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="process" className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Our SEO Process
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    A proven methodology that delivers sustainable results
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
                <section className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Custom Solutions for Your Business
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Every business has unique SEO needs. We create custom strategies and pricing based on your specific goals, competition level, and current website status.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Custom Proposal</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20">
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
                <section className="py-20 bg-primary/5">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Ready to Improve Your Search Rankings?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Schedule a free consultation to discuss your SEO goals and get a custom strategy.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
