import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "Lumina Fintech",
        category: "Web Design & Dev",
        description: "A complete rebrand and high-performance marketing site for a Series B fintech startup.",
        image: "/images/project-1.png", // Placeholder
        tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
        title: "Elevate E-commerce",
        category: "Shopify Plus",
        description: "Custom Shopify theme development that increased conversion rates by 45%.",
        image: "/images/project-2.png", // Placeholder
        tags: ["Shopify", "Liquid", "Vue.js"],
    },
    {
        title: "Nexus Health",
        category: "App Development",
        description: "Patient portal and appointment scheduling system for a multi-location clinic.",
        image: "/images/project-3.png", // Placeholder
        tags: ["React Native", "Node.js", "PostgreSQL"],
    },
]

export function FeaturedWork() {
    return (
        <section id="work" className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Work</h2>
                        <p className="text-lg text-muted-foreground">
                            We don&apos;t just make things look good. We build digital products that perform.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={project.title} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl select-none bg-secondary/5 group-hover:scale-105 transition-transform duration-500">
                                    {project.title[0]}
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-muted-foreground bg-secondary/10 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Button variant="outline" className="w-full">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
