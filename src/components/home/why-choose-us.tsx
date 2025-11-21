import { Zap, ShieldCheck, BarChart3, HeartHandshake } from "lucide-react"
import Image from "next/image"

const features = [
    {
        title: "Fast Turnaround",
        description: "We launch most projects in weeks, not months, without sacrificing quality.",
        icon: Zap,
    },
    {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise bills. You'll know exactly what you're paying for.",
        icon: ShieldCheck,
    },
    {
        title: "Data-Driven Approach",
        description: "Every decision is backed by analytics and user behavior data.",
        icon: BarChart3,
    },
    {
        title: "Ongoing Partnership",
        description: "We don't just build and leave. We're your long-term digital growth partner.",
        icon: HeartHandshake,
    },
]

export function WhyChooseUs() {
    return (
        <section id="about" className="py-20">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Why Partner with Beach Bird Studios?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We bridge the gap between creative design and technical excellence. Our team is dedicated to building digital products that actually move the needle for your business.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {features.map((feature, index) => (
                                <div key={feature.title} className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src="/images/office-agency.png"
                            alt="Beach Bird Studios modern office with team collaboration"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
