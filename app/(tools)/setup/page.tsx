import { PasswordGate } from "@/app/tools/components/password-gate"
import { ToolsNav } from "@/app/tools/components/tools-nav"
import { HtmlViewer } from "@/app/tools/components/html-viewer"

export const metadata = {
  title: "Setup — Content Tools",
  description: "One-time setup configuration for the outdoor content system",
}

export default function SetupPage() {
  return (
    <PasswordGate>
      <div className="min-h-screen bg-[#0f100e] flex flex-col">
        <ToolsNav />
        <HtmlViewer src="/SETUP.html" title="Setup" />
      </div>
    </PasswordGate>
  )
}
