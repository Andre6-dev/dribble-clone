import './globals.css'
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

export const metadata = {
  title: 'DevHome',
  description: 'Showcase and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
