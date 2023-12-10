"use client"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import remarkGfm from "remark-gfm"

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, ref, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        img: (image) => (
          <Image
            className="max-h-60 w-full object-cover"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
