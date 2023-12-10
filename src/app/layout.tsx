import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

import { Open_Sans } from "next/font/google"

const sans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "엘리의 블로그",
    template: "엘리의 블로그 | %s",
  },
  description: "풀스택 개발자 엘리의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={`${sans.className} m-auto flex w-full max-w-screen-2xl flex-col`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
