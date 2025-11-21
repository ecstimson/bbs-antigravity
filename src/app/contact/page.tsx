"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    services: z.array(z.string()).optional(),
    honeypot: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
    { id: "seo", label: "SEO & Strategy" },
    { id: "web-design", label: "Web Design & Development" },
    { id: "advertising", label: "Digital Advertising" },
]

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    services: selectedServices,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to send message")
            }

            setSubmitStatus("success")
            reset()
            setSelectedServices([])
        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const toggleService = (serviceId: string) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        )
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-32">
                    <div className="container">
                        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                                    Let&apos;s Build Something Amazing
                                </h1>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Ready to take your digital presence to the next level? Fill out the form, and we&apos;ll get back to you within 24 hours to discuss your project.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email Us</h3>
                                            <a href="mailto:hello@beachbirdstudios.com" className="text-muted-foreground hover:text-primary">
                                                hello@beachbirdstudios.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Call Us</h3>
                                            <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">
                                                +1 (555) 123-4567
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Location</h3>
                                            <p className="text-muted-foreground">Wilmington, NC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Send us a message</CardTitle>
                                    <CardDescription>
                                        Tell us a bit about your project and goals.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {submitStatus === "success" && (
                                        <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950">
                                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                                            <AlertDescription className="text-green-800 dark:text-green-200">
                                                Thank you! We&apos;ve received your message and will get back to you within 24 hours.
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    {submitStatus === "error" && (
                                        <Alert className="mb-6 border-red-500 bg-red-50 dark:bg-red-950">
                                            <AlertDescription className="text-red-800 dark:text-red-200">
                                                Something went wrong. Please try again or email us directly.
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        {/* Honeypot field - hidden from users */}
                                        <input
                                            type="text"
                                            {...register("honeypot")}
                                            style={{ display: "none" }}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />

                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Full Name *
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                className={errors.name ? "border-red-500" : ""}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-500">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email *
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                {...register("email")}
                                                className={errors.email ? "border-red-500" : ""}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-500">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">
                                                    Phone
                                                </label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="(555) 123-4567"
                                                    {...register("phone")}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium">
                                                    Company
                                                </label>
                                                <Input
                                                    id="company"
                                                    placeholder="Your Company"
                                                    {...register("company")}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Interested in (optional)
                                            </label>
                                            <div className="space-y-2">
                                                {serviceOptions.map((service) => (
                                                    <div key={service.id} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={service.id}
                                                            checked={selectedServices.includes(service.id)}
                                                            onCheckedChange={() => toggleService(service.id)}
                                                        />
                                                        <label
                                                            htmlFor={service.id}
                                                            className="text-sm font-normal cursor-pointer"
                                                        >
                                                            {service.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">
                                                Message *
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                                className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                                                {...register("message")}
                                            />
                                            {errors.message && (
                                                <p className="text-sm text-red-500">{errors.message.message}</p>
                                            )}
                                        </div>

                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
