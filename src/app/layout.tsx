import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import QueryProvider from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imPM",
  description: "This is awesome Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <h1>imPM 나는 PM이다 </h1>
          <h2>imPM</h2>
          <nav className="flex justify-center">
            <div className="flex">
              <Link href="/" className="p-4">
                HOME
              </Link>
              <Link href="/about" className="p-4">
                ABOUT
              </Link>
              <Link href="/report" className="p-4">
                REPORT
              </Link>
              <Link href="/todosCsr" className="p-4">
                todos-csr
              </Link>
              <Link href="/todosSsr" className="p-4">
                todos-ssr
              </Link>
            </div>
          </nav>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
