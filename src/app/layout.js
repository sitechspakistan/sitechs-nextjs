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
  title: "AI Automation, Web & Mobile App Development | Sitechs",
  description: "Sitechs is a full-service software company helping startups & enterprises build AI automations, web platforms, and mobile apps to scale their digital growth.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.variable}>

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
