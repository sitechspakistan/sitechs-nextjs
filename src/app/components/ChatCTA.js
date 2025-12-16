"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ChatCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Hide when user is within 100px of the bottom
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="chat-cta">
      <img
        src="/assets/images/chatbot.png"
        className="chat-cta-image"
        alt="John | Sitechs"
      />
      <p className="chat-cta-text">
        Hey, I’m John from Sitechs. Let’s find the right solution to make your
        team work smarter.
      </p>
      <Link href="/chat-with-us" className="chat-cta-button">
        Chat Now
      </Link>
    </div>
  );
}