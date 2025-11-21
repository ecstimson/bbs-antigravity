"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ResourcesCTA() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Free Resources to Grow Your Business
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Download our expert guides and checklists to start improving your digital presence today, completely free.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border shadow-sm">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">Ultimate SEO Audit Checklist</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border shadow-sm">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">Website Performance Guide (2025 Edition)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border shadow-sm">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">Content Strategy Template</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <Card>
                            <CardHeader>
                                <CardTitle>Get Your Free Guides</CardTitle>
                                <CardDescription>Enter your email to receive the download links instantly.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <Input placeholder="Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="email" placeholder="Email Address" />
                                    </div>
                                    <Button className="w-full" type="submit">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Now
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
