import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { PageTransition } from "./components/layout/page-transition";
import "./globals.css";

const Mplus = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-m-plus",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sothearo.dev"),
  title: { template: "Sothearo - %s", default: "Sothearo - Homepage" },
  description: `Discover my portfolio, an engaging showcase of my projects alongside the incredible manga that inspires my creativity and passion for storytelling.`,
  openGraph: {
    url: "https://sothearo.dev",
    siteName: "Sothearo - Homepage",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Mplus.variable} antialiased transition-colors duration-500`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <PageTransition
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="container py-10 !will-change-[transform,opacity]"
          >
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { type: "tween", duration: 0.25 } },
};
