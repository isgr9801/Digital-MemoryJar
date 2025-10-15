"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center px-4 py-12">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-md text-center space-y-8">
        {/* Logo and tagline */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="Digital Memory Jar Logo" width={120} height={120} className="drop-shadow-lg" />
          </div>
          <h1 className="text-4xl font-bold text-balance text-gradient-brand">Digital Memory Jar</h1>
          <p className="text-lg text-muted-foreground text-balance">Capture your thoughts. Reflect your emotions.</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          An AI-powered personal life logger that helps you understand your emotional journey through intelligent
          summaries and beautiful visualizations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <Link href="/login">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5 bg-transparent">
              Create Account
            </Button>
          </Link>
        </div>

        {/* Features preview */}
        <div className="pt-8 space-y-3 text-sm">
          <div className="glass-gradient-primary rounded-lg p-3">
            <p className="text-foreground font-medium">AI-Powered Insights</p>
            <p className="text-xs text-muted-foreground">Get intelligent summaries of your thoughts</p>
          </div>
          <div className="glass-gradient-secondary rounded-lg p-3">
            <p className="text-foreground font-medium">Mood Tracking</p>
            <p className="text-xs text-muted-foreground">Visualize your emotional patterns</p>
          </div>
          <div className="glass-gradient-accent rounded-lg p-3">
            <p className="text-foreground font-medium">Private & Secure</p>
            <p className="text-xs text-muted-foreground">Your memories are yours alone</p>
          </div>
        </div>
      </div>
    </main>
  )
}
