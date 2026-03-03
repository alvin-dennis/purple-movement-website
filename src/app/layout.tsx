import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
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
        className={`${montserrat.variable} ${poppins.variable} bg-background text-foreground font-body`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" theme="dark" richColors />
      </body>
    </html>
  );
}
