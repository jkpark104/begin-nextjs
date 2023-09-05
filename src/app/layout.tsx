import type { Metadata } from "next";
import { Nanum_Gothic, Open_Sans } from "next/font/google";
import Link from "next/link";
import styles from "./layout.module.css";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
