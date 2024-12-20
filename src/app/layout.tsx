'use client'
// import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import { GlobalStyle } from "@/styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Header } from '@/presentation/components/Header';
import { useState } from 'react';


const nunitoSans = Nunito_Sans({
  weight: ['300', '500', '700'],
  style: 'normal',
  display: 'swap',
  variable: '--font-nunito',
  subsets: ['latin']
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <html lang="en">
      <ThemeProvider theme={currentTheme === "light" ? theme.light : theme.dark}>
        <GlobalStyle/>
        <body className={`${nunitoSans.className}`}>
          <Header toggleTheme={toggleTheme} theme={currentTheme}/>
          {children}
        </body>
      </ThemeProvider>
      
    </html>
  );
}
