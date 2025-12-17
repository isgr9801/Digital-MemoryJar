"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Plus, BarChart3, User } from "lucide-react"
import { Tooltip } from "./tooltip"

export function FloatingNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/add", icon: Plus, label: "Add Memory" },
    { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
    { href: "/profile", icon: User, label: "Profile" },
  ]

  return (
    <>
      {/* Mobile floating nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:hidden">
        <div className="nav-gradient-border shadow-2xl shadow-purple-500/30 dark:shadow-purple-500/50">
          <nav className="relative z-10 rounded-full px-4 py-3 flex items-center gap-2 pointer-events-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Tooltip key={item.href} content={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-all duration-300 flex items-center gap-2 rounded-full whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-4 py-2 shadow-lg shadow-purple-500/40"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 hover:scale-110"
                    }`}
                  >
                    <Icon size={20} />
                  </Link>
                </Tooltip>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop top navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient-brand">DMJ</div>

          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/40"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
