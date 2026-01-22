import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import '../styles/bootstrap.css'
import '../styles/animate.css'
import '../styles/custom-animation.css'
import '../styles/spacing.css'
import "../styles/font-awesome-pro.css";
import '../styles/main.css'
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import SmoothWrapper from "./components/SmoothWrapper";
import ChatCTA from "./components/ChatCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={poppins.variable}>
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
        <SmoothWrapper> 
            {children} 
          <Footer />          
        </SmoothWrapper>
        
        <Script src="/assets/js/gsap-split-text.js" strategy="beforeInteractive" />
        <Script async src="/assets/js/vendor/jquery.js"></Script>
        <Script async src="/assets/js/bootstrap-bundle.js"></Script>
        
        <ChatCTA />

      </body>
    </html>
  );
}
