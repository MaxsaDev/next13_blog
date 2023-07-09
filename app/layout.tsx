import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ReactNode} from "react";


export const metadata: Metadata = {
  title: 'Maxsa App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <main className='container'>
          {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
