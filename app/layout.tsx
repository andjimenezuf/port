import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx.
      */}
      <head />
      <body className="min-h-screen bg-[#0e101a] text-white" data-theme="light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
