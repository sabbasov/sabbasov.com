import { PasswordGate } from "@/app/tools/components/password-gate"
import { ToolsNav } from "@/app/tools/components/tools-nav"
import { HtmlViewer } from "@/app/tools/components/html-viewer"

export const metadata = {
  title: "Workflow — Content Tools",
  description: "Monthly workflow for the outdoor content system",
}

export default function WorkflowPage() {
  return (
    <PasswordGate>
      <div className="min-h-screen bg-[#0f100e] flex flex-col">
        <ToolsNav />
        <HtmlViewer src="/WORKFLOW.html" title="Workflow" />
      </div>
    </PasswordGate>
  )
}
