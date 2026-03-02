import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const headline = localFont({
  src: "../components/fonts/headline.ttf",
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Purple Movement | Uniting Purposeful People Worldwide",
  description:
    "The Purple Movement is a global force of purposeful people, changemakers, and visionaries, coming together to create a borderless future full of impact and possibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${headline.variable} ${poppins.variable} bg-[#020205] text-foreground font-body`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
