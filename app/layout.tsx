import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/layout/header";
import { PageTransition } from "./components/layout/page-transition";
import "./globals.css";

const Mplus = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-m-plus",
});

export const metadata: Metadata = {
  title: { template: "Sothearo - %s", default: "Sothearo - Homepage" },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Mplus.variable} transition-[color,background-color] duration-[250ms]`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <PageTransition
            variants={layoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="container py-12"
          >
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}

const layoutVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { type: "tween", duration: 0.25 } },
};
