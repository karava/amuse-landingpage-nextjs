import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import Navigation from "@/components/Navigation";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: {
    template: "%s — Atomic learning",
    default: "Amuse — Atomic learning",
  },
  description: "Amuse is a curiosity-driven learning app that delivers daily, bite-sized lessons, utilizing a flashcard format. Harnessing atomic learning and spaced repetition (srs), Amuse helps users discover new knowledge, optimize memory retention, and enjoy a fun, personalized growth journey. Ideal for learners of all ages and busy schedules.",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const soursSerif = localFont({
  src: "./fonts/SourceSerifPro-Regular.ttf",
  variable: "--font-sourceserif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`bg-primary-800 antialiased ${poppins.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
