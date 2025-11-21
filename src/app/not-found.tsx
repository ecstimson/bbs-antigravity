import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                <FileQuestion className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
            <p className="mb-8 max-w-md text-lg text-muted-foreground">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/">Go back home</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </div>
    )
}
