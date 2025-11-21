import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, LayoutDashboard, Zap, Smartphone, Code2, Palette, Database, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Web Design & Development | Beach Bird Studios",
    description: "Custom websites built for speed and conversion. From sleek marketing sites to enterprise-level full-stack applications. Mobile-first, sub-2s load times.",
    openGraph: {
        title: "Web Design & Development | Beach Bird Studios",
        description: "Custom websites built for speed and conversion. From sleek marketing sites to enterprise-level full-stack applications.",
    },
}

const process = [
    {
        step: "01",
        title: "Discovery & Planning",
        description: "We dive deep into your business goals, target audience, and technical requirements to create a detailed project roadmap.",
        icon: LayoutDashboard,
    },
    {
        step: "02",
        title: "Design & Prototyping",
        description: "Create wireframes and high-fidelity designs that align with your brand and optimize for conversions.",
        icon: Palette,
    },
    {
        step: "03",
        title: "Development & Testing",
        description: "Build your site with modern technologies, ensuring fast load times, mobile responsiveness, and cross-browser compatibility.",
        icon: Code2,
    },
    {
        step: "04",
        title: "Launch & Optimize",
        description: "Deploy to production, monitor performance, and continuously optimize based on real user data.",
        icon: Zap,
    },
]

const deliverables = [
    "Custom responsive design",
    "Mobile-first development",
    "Sub-2 second load times",
    "SEO-optimized code structure",
    "Content Management System (CMS) integration",
    "Contact forms and lead capture",
    "Google Analytics setup",
    "SSL certificate and security",
    "Cross-browser testing",
    "Performance optimization",
    "30 days of post-launch support",
    "Training and documentation",
]

const technologies = [
    { name: "Next.js", description: "React framework for production" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "Supabase", description: "Backend as a service" },
    { name: "Vercel", description: "Deployment and hosting" },
    { name: "Framer", description: "No-code design tool" },
]

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Timeline depends on complexity. A simple marketing site takes 2-3 weeks, while a custom web application can take 6-12 weeks. We provide a detailed timeline during the planning phase.",
    },
    {
        question: "Do you build e-commerce websites?",
        answer: "Yes! We build custom e-commerce solutions using platforms like Shopify, WooCommerce, or custom solutions with Stripe integration, depending on your needs.",
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All our websites are mobile-first, meaning they're designed and optimized for mobile devices first, then enhanced for larger screens.",
    },
    {
        question: "Can I update the website myself?",
        answer: "Yes. We integrate user-friendly CMS solutions like WordPress, Sanity, or Contentful, and provide training so you can easily update content, images, and pages.",
    },
    {
        question: "What happens after the website launches?",
        answer: "We provide 30 days of post-launch support to fix any bugs and make minor adjustments. We also offer ongoing maintenance packages for updates, security, and performance monitoring.",
    },
    {
        question: "Do you redesign existing websites?",
        answer: "Yes! We can redesign your existing website to improve performance, modernize the design, and enhance user experience while preserving your SEO rankings.",
    },
]

export default function WebDesignDevPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Code2 className="h-4 w-4" />
                                Web Design & Development
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Custom Websites That Convert
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Your website is often the first impression customers have of your business. We build fast, beautiful, and conversion-focused websites that turn visitors into customers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/contact">
                                        Schedule Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/quiz">Project Fit Quiz</Link>
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
                                Why Choose Our Web Development Services
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Zap className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Lightning Fast</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Sub-2 second load times guaranteed. Fast websites rank better in search and convert more visitors.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Smartphone className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Mobile-First Design</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Optimized for mobile devices first, ensuring perfect user experience on all screen sizes.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Database className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Scalable Solutions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Built with modern tech stacks that grow with your business, from MVP to enterprise scale.
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
                                    Our Development Process
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    From concept to launch in four clear phases
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

                {/* Technologies */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Modern Technology Stack
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    We use cutting-edge technologies to build fast, secure, and scalable websites
                                </p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {technologies.map((tech, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{tech.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                                        </CardContent>
                                    </Card>
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
                                Custom Solutions for Your Project
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Every project is unique. We create custom Statement of Work (SOW) and offer stacks based on your specific requirements, timeline, and business goals.
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Schedule a free consultation to discuss your project and receive a detailed proposal with transparent pricing, timeline, and deliverables.
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
                                Ready to Build Your Website?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Let's discuss your project goals and create a custom solution that drives results.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Start Your Project</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
