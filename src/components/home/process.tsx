import { } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We start with a deep dive into your business goals, audience, and competitors to ensure we're solving the right problems.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We create a custom roadmap, timeline, and architectural plan. No guesswork—just a clear path to success.",
    },
    {
        number: "03",
        title: "Build",
        description: "Design and development happens in sprints. You get weekly updates and see progress in real-time.",
    },
    {
        number: "04",
        title: "Launch & Grow",
        description: "After rigorous testing, we launch. But we don't stop there. We monitor performance and optimize for growth.",
    },
]

export function Process() {
    return (
        <section id="process" className="py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple Process, Powerful Results</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From concept to launch in four clear steps.
                    </p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-border hidden md:block -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background border-2 border-muted mb-6 z-10">
                                <span className="text-xl font-bold">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
