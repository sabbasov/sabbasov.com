import { ToolsNav } from "@/app/tools/components/tools-nav"
import { HtmlViewer } from "@/app/tools/components/html-viewer"

export const metadata = {
  title: "Checklist — Content Tools",
  description: "Monthly checklist for the outdoor content system",
}

export default function ChecklistPage() {
  return (
    <div className="min-h-screen bg-[#0f100e] flex flex-col">
      <ToolsNav />
      <HtmlViewer src="/CHECKLIST.html" title="Checklist" />
    </div>
  )
}
