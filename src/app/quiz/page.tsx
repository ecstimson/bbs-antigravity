"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

type QuizData = {
    industry?: string
    goal?: string
    timeline?: string
    budget?: string
    name?: string
    email?: string
    company?: string
    details?: string
}

export default function QuizPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [data, setData] = useState<QuizData>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const totalSteps = 6

    const updateData = (field: keyof QuizData, value: string) => {
        setData(prev => ({ ...prev, [field]: value }))
    }

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        // Here you would send the quiz data to your API
        // For now, we'll just redirect to contact with pre-filled data
        const params = new URLSearchParams({
            name: data.name || "",
            email: data.email || "",
            company: data.company || "",
            message: `Quiz Results:\n\nIndustry: ${data.industry}\nGoal: ${data.goal}\nTimeline: ${data.timeline}\nBudget: ${data.budget}\n\nAdditional Details: ${data.details || "N/A"}`,
            service: "Web Design & Development"
        })
        router.push(`/contact?${params.toString()}`)
    }

    const canProceed = () => {
        switch (step) {
            case 1: return !!data.industry
            case 2: return !!data.goal
            case 3: return !!data.timeline
            case 4: return !!data.budget
            case 5: return !!data.name && !!data.email
            case 6: return true
            default: return false
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20">
                <div className="container max-w-3xl">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
                            <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${(step / totalSteps) * 100}%` }}
                            />
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                {step === 1 && "What industry are you in?"}
                                {step === 2 && "What's your primary goal?"}
                                {step === 3 && "What's your timeline?"}
                                {step === 4 && "What's your budget range?"}
                                {step === 5 && "Let's get your contact info"}
                                {step === 6 && "Any additional details?"}
                            </CardTitle>
                            <CardDescription>
                                {step === 1 && "This helps us understand your specific needs"}
                                {step === 2 && "What do you want to achieve with your website?"}
                                {step === 3 && "When do you need this completed?"}
                                {step === 4 && "This helps us recommend the right solution"}
                                {step === 5 && "We'll send you a customized proposal"}
                                {step === 6 && "Anything else we should know about your project?"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Step 1: Industry */}
                            {step === 1 && (
                                <RadioGroup value={data.industry} onValueChange={(value) => updateData("industry", value)}>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="ecommerce" id="ecommerce" />
                                        <Label htmlFor="ecommerce" className="flex-1 cursor-pointer">E-commerce / Retail</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="healthcare" id="healthcare" />
                                        <Label htmlFor="healthcare" className="flex-1 cursor-pointer">Healthcare / Medical</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="professional" id="professional" />
                                        <Label htmlFor="professional" className="flex-1 cursor-pointer">Professional Services (Legal, Finance, etc.)</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="saas" id="saas" />
                                        <Label htmlFor="saas" className="flex-1 cursor-pointer">SaaS / Technology</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="hospitality" id="hospitality" />
                                        <Label htmlFor="hospitality" className="flex-1 cursor-pointer">Hospitality / Travel</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="other" id="other" />
                                        <Label htmlFor="other" className="flex-1 cursor-pointer">Other</Label>
                                    </div>
                                </RadioGroup>
                            )}

                            {/* Step 2: Goal */}
                            {step === 2 && (
                                <RadioGroup value={data.goal} onValueChange={(value) => updateData("goal", value)}>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="new-website" id="new-website" />
                                        <Label htmlFor="new-website" className="flex-1 cursor-pointer">Build a new website from scratch</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="redesign" id="redesign" />
                                        <Label htmlFor="redesign" className="flex-1 cursor-pointer">Redesign existing website</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="web-app" id="web-app" />
                                        <Label htmlFor="web-app" className="flex-1 cursor-pointer">Build a custom web application</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="ecommerce-store" id="ecommerce-store" />
                                        <Label htmlFor="ecommerce-store" className="flex-1 cursor-pointer">Launch an e-commerce store</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="improve-performance" id="improve-performance" />
                                        <Label htmlFor="improve-performance" className="flex-1 cursor-pointer">Improve website performance/SEO</Label>
                                    </div>
                                </RadioGroup>
                            )}

                            {/* Step 3: Timeline */}
                            {step === 3 && (
                                <RadioGroup value={data.timeline} onValueChange={(value) => updateData("timeline", value)}>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="asap" id="asap" />
                                        <Label htmlFor="asap" className="flex-1 cursor-pointer">ASAP (1-2 weeks)</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="1-month" id="1-month" />
                                        <Label htmlFor="1-month" className="flex-1 cursor-pointer">Within 1 month</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="2-3-months" id="2-3-months" />
                                        <Label htmlFor="2-3-months" className="flex-1 cursor-pointer">2-3 months</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="flexible" id="flexible" />
                                        <Label htmlFor="flexible" className="flex-1 cursor-pointer">Flexible / Just exploring</Label>
                                    </div>
                                </RadioGroup>
                            )}

                            {/* Step 4: Budget */}
                            {step === 4 && (
                                <RadioGroup value={data.budget} onValueChange={(value) => updateData("budget", value)}>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="under-5k" id="under-5k" />
                                        <Label htmlFor="under-5k" className="flex-1 cursor-pointer">Under $5,000</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="5k-10k" id="5k-10k" />
                                        <Label htmlFor="5k-10k" className="flex-1 cursor-pointer">$5,000 - $10,000</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="10k-25k" id="10k-25k" />
                                        <Label htmlFor="10k-25k" className="flex-1 cursor-pointer">$10,000 - $25,000</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="25k-plus" id="25k-plus" />
                                        <Label htmlFor="25k-plus" className="flex-1 cursor-pointer">$25,000+</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer">
                                        <RadioGroupItem value="not-sure" id="not-sure" />
                                        <Label htmlFor="not-sure" className="flex-1 cursor-pointer">Not sure yet</Label>
                                    </div>
                                </RadioGroup>
                            )}

                            {/* Step 5: Contact Info */}
                            {step === 5 && (
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Name *</Label>
                                        <Input
                                            id="name"
                                            value={data.name || ""}
                                            onChange={(e) => updateData("name", e.target.value)}
                                            placeholder="John Doe"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email || ""}
                                            onChange={(e) => updateData("email", e.target.value)}
                                            placeholder="john@example.com"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="company">Company (Optional)</Label>
                                        <Input
                                            id="company"
                                            value={data.company || ""}
                                            onChange={(e) => updateData("company", e.target.value)}
                                            placeholder="Acme Inc."
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 6: Additional Details */}
                            {step === 6 && (
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="details">Additional Details (Optional)</Label>
                                        <Textarea
                                            id="details"
                                            value={data.details || ""}
                                            onChange={(e) => updateData("details", e.target.value)}
                                            placeholder="Tell us more about your project, specific features you need, or any questions you have..."
                                            className="mt-2 min-h-[120px]"
                                        />
                                    </div>
                                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                                        <h4 className="font-semibold flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            Your Quiz Summary
                                        </h4>
                                        <div className="text-sm space-y-1 text-muted-foreground">
                                            <p><strong>Industry:</strong> {data.industry?.replace("-", " ")}</p>
                                            <p><strong>Goal:</strong> {data.goal?.replace("-", " ")}</p>
                                            <p><strong>Timeline:</strong> {data.timeline?.replace("-", " ")}</p>
                                            <p><strong>Budget:</strong> {data.budget?.replace("-", " ")}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex gap-4 pt-4">
                                {step > 1 && (
                                    <Button
                                        variant="outline"
                                        onClick={handleBack}
                                        className="flex-1"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back
                                    </Button>
                                )}
                                {step < totalSteps ? (
                                    <Button
                                        onClick={handleNext}
                                        disabled={!canProceed()}
                                        className="flex-1"
                                    >
                                        Next
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!canProceed() || isSubmitting}
                                        className="flex-1"
                                    >
                                        {isSubmitting ? "Submitting..." : "Get My Custom Proposal"}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}
