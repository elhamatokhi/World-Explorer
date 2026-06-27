import Footer from "@/components/Footer"
import "./globals.css"
import Navbar from "@/components/Navbar"
export const metadata = {
  title: "World Explorer",
  descreption: "Explore countries around the world."
}

export default function RootLayout({children}){
  return(
    <html lang="en">
     <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
  
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
    <Footer/>
    </body>
    </html>
  )
}
