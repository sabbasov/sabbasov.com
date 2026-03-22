"use client"

import { useState, useEffect } from "react"

const SESSION_KEY = "tools_session"
const SESSION_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds
const CORRECT_ANSWER = "goprohero12"

interface PasswordGateProps {
  children: React.ReactNode
}

function isSessionValid(): boolean {
  if (typeof window === "undefined") return false
  
  const session = localStorage.getItem(SESSION_KEY)
  if (!session) return false
  
  const sessionTime = parseInt(session, 10)
  const now = Date.now()
  
  return now - sessionTime < SESSION_DURATION
}

function setSession(): void {
  localStorage.setItem(SESSION_KEY, Date.now().toString())
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsUnlocked(isSessionValid())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === CORRECT_ANSWER) {
      setSession()
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setPassword("")
    }
  }

  // Loading state
  if (isUnlocked === null) {
    return (
      <div className="min-h-screen bg-[#0f100e] flex items-center justify-center">
        <div className="animate-pulse text-[#5c5b57] font-mono text-sm">Loading...</div>
      </div>
    )
  }

  // Password gate
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#0f100e] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#161714] border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
          <div className="text-center mb-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[#8ec07c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-[#dedad2] font-mono text-sm tracking-wider uppercase">
              Access Required
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-[#9e9c95] text-xs font-mono">
                What did you return before owning your go pro hero 13
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                }}
                placeholder="Enter answer..."
                className="w-full px-3 py-2 bg-[#0f100e] border border-[rgba(255,255,255,0.1)] rounded text-[#dedad2] font-mono text-sm placeholder:text-[#5c5b57] focus:border-[#8ec07c] focus:outline-none focus:ring-1 focus:ring-[#8ec07c]"
                autoFocus
              />
              <p className="text-[#5c5b57] text-[10px] font-mono">
                Case-sensitive · No quotes
              </p>
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-[#c85a46] text-xs font-mono bg-[rgba(200,90,70,0.1)] p-2 rounded border border-[rgba(200,90,70,0.2)]">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Incorrect answer. Please try again.</span>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#8ec07c] hover:bg-[#a0d090] text-[#0f100e] font-mono text-sm tracking-wide rounded transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Unlocked - show children
  return <>{children}</>
}
