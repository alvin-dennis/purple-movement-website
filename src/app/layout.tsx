import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import BackToTop from "@/components/BacktoTop";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";

const montserrat = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
        className={`${montserrat.variable} ${plusJakarta.variable} bg-background text-foreground font-body`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" theme="light" richColors />
          <div className="fixed bottom-4 right-4 z-50">
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
