"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText, ListChecks, Settings } from "lucide-react"

const navItems = [
  { href: "/workflow", label: "Workflow", icon: FileText },
  { href: "/checklist", label: "Checklist", icon: ListChecks },
  { href: "/setup", label: "Setup", icon: Settings },
]

export function ToolsNav() {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-[#161714] border-b border-[rgba(255,255,255,0.08)] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand */}
          <Link 
            href="/workflow" 
            className="font-mono text-xs tracking-[0.12em] uppercase text-[#8ec07c] hover:text-[#a0d090] transition-colors"
          >
            Content Tools
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs tracking-wide transition-all",
                    isActive
                      ? "bg-[rgba(142,192,124,0.12)] text-[#8ec07c] border border-[rgba(142,192,124,0.2)]"
                      : "text-[#9e9c95] hover:text-[#dedad2] hover:bg-[rgba(255,255,255,0.03)]"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
