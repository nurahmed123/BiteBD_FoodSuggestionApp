import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BiteBD",
  description: "Leets remove hunger together....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="https://files.edgestore.dev/iz2sept3369gmc0f/publicFiles/_public/c964237b-5dd1-411c-afac-c93d761ea749.avif" sizes="any" />
          <UserButton showName />
        </head>
        <body className={inter.className}>
          <FloatingNav navItems={navItems} />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}