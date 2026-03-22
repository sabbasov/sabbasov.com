"use client"

interface HtmlViewerProps {
  src: string
  title: string
}

export function HtmlViewer({ src, title }: HtmlViewerProps) {
  return (
    <iframe
      src={src}
      title={title}
      className="w-full flex-1 border-0"
      style={{ height: "calc(100vh - 48px)" }}
    />
  )
}
