"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-24">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <h1 className="text-3xl font-bold">About</h1>
        </div>

        {/* Hero section */}
        <Card className="glass border-primary/20 p-8 text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 glass rounded-2xl glow-primary">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Digital Memory Jar</h2>
            <p className="text-sm text-muted-foreground">AI-Powered Personal Life Logger</p>
          </div>
        </Card>

        {/* Story */}
        <Card className="glass border-primary/20 p-6 space-y-4">
          <h3 className="text-sm font-semibold">Our Story</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Digital Memory Jar was created with a simple belief: everyone deserves a space to capture their thoughts,
            reflect on their emotions, and understand their personal journey.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We combined the timeless practice of journaling with modern AI technology to create a tool that helps you
            not just record your memories, but truly understand them.
          </p>
        </Card>

        {/* Mission */}
        <Card className="glass border-accent/20 bg-accent/5 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Our Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To empower individuals to understand themselves better through intelligent reflection and emotional
                awareness.
              </p>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card className="glass border-primary/20 p-6 space-y-4">
          <h3 className="text-sm font-semibold">Key Features</h3>
          <div className="space-y-3">
            {[
              { title: "AI-Powered Insights", desc: "Get intelligent summaries and mood analysis" },
              { title: "Beautiful Analytics", desc: "Visualize your emotional patterns over time" },
              { title: "Private & Secure", desc: "Your memories are encrypted and yours alone" },
              { title: "Mood Tracking", desc: "Understand your emotional journey" },
            ].map((feature) => (
              <div key={feature.title} className="space-y-1">
                <p className="text-sm font-medium">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Team */}
        <Card className="glass border-primary/20 p-6 space-y-4">
          <h3 className="text-sm font-semibold">Built with Love</h3>
          <p className="text-sm text-muted-foreground">
            Digital Memory Jar is built by a passionate team of designers, engineers, and AI enthusiasts who believe in
            the power of self-reflection.
          </p>
        </Card>

        {/* Tech Stack */}
        <Card className="glass border-primary/20 p-6 space-y-4">
          <h3 className="text-sm font-semibold">Technology</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "AI SDK", "Recharts"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Contact */}
        <Card className="glass border-primary/20 p-6 space-y-4">
          <h3 className="text-sm font-semibold">Get in Touch</h3>
          <p className="text-sm text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            Contact Us
          </Button>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-2 pt-4">
          <p className="text-xs text-muted-foreground">Digital Memory Jar v1.0.0</p>
          <p className="text-xs text-muted-foreground">Made with care for your memories</p>
        </div>
      </div>
    </main>
  )
}
