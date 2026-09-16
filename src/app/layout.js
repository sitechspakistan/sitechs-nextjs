import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/services.css";
import "../styles/content-pages.css";
import Header from "./includes/Header";
import Footer from "./includes/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "AI Automation, SaaS Development & Web Design Agency | Sitechs",
  description:
    "Sitechs is a full-service digital agency helping startups and enterprises build AI automations, SaaS platforms, and high-performing websites. We also craft logos and branding that power business growth.",

  alternates: {
    canonical: "https://sitechs.co",
  },

  openGraph: {
    title: "AI Automation, SaaS Development & Web Design Agency | Sitechs",
    description:
      "Sitechs helps startups & enterprises build AI automations, SaaS platforms, and high-performing websites.",
    url: "https://sitechs.co",
    siteName: "Sitechs",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Sitechs – AI Automation & SaaS Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation, SaaS Development & Web Design Agency | Sitechs",
    description:
      "AI automation, SaaS platforms & modern web solutions for growing businesses.",
    images: ["/assets/images/logo.png"],
  },

  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTX30J3VNZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTX30J3VNZ');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
